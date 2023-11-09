import ThreadBar from "UI/components/threadBar";
import { isThreadPage } from "Utils/checkers";
import generationAPI from "API/summarize/generationAPI";
import {
  checkSummarizeCode,
  SummarizeStatus,
} from "API/summarize/checkStatusCode";
import Logger from "Utils/logger";
import { getHTMLFromString } from "Utils/utils";

const SummarizeID = "LZTUpSummarizeBlock";
const SummarizeTitle = "<i class='fas fa-sparkles'></i> Суммаризатор тем";
const FIND_THREAD_ID = /^\/threads\/([^d]+)\//;

function getThreadId() {
  const path = window.location.pathname;
  const threadId = path.match(FIND_THREAD_ID)?.[1];
  return Number(threadId) || undefined;
}

function getThreadContent() {
  return document.querySelector(".message.firstPost > .messageInfo article")
    ?.innerText;
}

async function getThreadContentByAjax(threadId) {
  try {
    const res = await XenForo.ajax(`/threads/${threadId}`);
    const resHTML = res.templateHtml;

    const parsedHTML = getHTMLFromString(resHTML);
    const text = parsedHTML.querySelector(
      ".message.firstPost > .messageInfo article",
    )?.innerText;

    return text;
  } catch {
    return undefined;
  }
}

async function summarizeThreadBlock(isActive) {
  if (isActive && isThreadPage()) {
    const summarizeBlock = new ThreadBar(
      SummarizeTitle,
      "Получение данных...",
      SummarizeID,
    ).createElement();
    const pageNavLinkGroup = document.querySelector(".pageNavLinkGroup");
    pageNavLinkGroup.before(summarizeBlock.container);

    let threadContent = getThreadContent();

    if (threadContent == undefined) {
      // getting content about a topic if not 1 page is open
      Logger.log("Getting the content via an Ajax request");
      const threadId = getThreadId();
      threadContent = await getThreadContentByAjax(threadId);
    }

    if (!(threadContent?.length >= 300)) {
      summarizeBlock.title.innerHTML = `${SummarizeTitle} (Ошибка валидации)`;
      summarizeBlock.content.innerHTML =
        "Не удалось выполнить суммаризацию темы. Содержимое темы не найдено или содержит менее 300 символов.";
      return false;
    }

    let summarizeInterval;
    let session_id = "";
    summarizeInterval = setInterval(async () => {
      const generatedInfo = await generationAPI.genSummarize(
        threadContent,
        session_id,
      );
      Logger.log("Summarize Generated Info", generatedInfo);

      if (!generatedInfo) {
        Logger.log("Clear summarize interval (ext error)");
        summarizeBlock.title.innerHTML = `${SummarizeTitle} (Внутренняя ошибка)`;
        summarizeBlock.content.innerText =
          "Не удалось выполнить суммаризацию темы. Произошла внутренняя ошибка при запросе к Summarize API. Для детальной информации смотри консоль.";
        clearInterval(summarizeInterval);
        return false;
      }

      session_id = generatedInfo.session_id;
      const result = checkSummarizeCode(generatedInfo);
      if (result.status !== SummarizeStatus.Waiting) {
        Logger.log("Clear summarize interval (by status code)");
        clearInterval(summarizeInterval);
      }

      const contentEl = document.createElement("ul");
      if (result.desc.length > 1) {
        contentEl.classList.add("LZTUpSummarizeThesises");
      }

      for (const thesis of result.desc) {
        const thesisEl = document.createElement("li");
        thesisEl.innerText = thesis.content;
        contentEl.appendChild(thesisEl);
      }

      summarizeBlock.title.innerHTML = `${SummarizeTitle} (${result.title})`;
      summarizeBlock.content.innerHTML = contentEl.outerHTML;
    }, 500);

    return;
  }

  document.getElementById(SummarizeID)?.remove();
}

export {
  getThreadId,
  getThreadContent,
  getThreadContentByAjax,
  summarizeThreadBlock,
};
