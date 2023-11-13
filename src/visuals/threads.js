import ReportButtons from "UI/reportButtons";

// СОЗДАТЬ ОТДЕЛЬНУЮ ФУНКЦИЮ ДЛЯ ЭТОГО А ТО АХУЕТЬ СКОК ДУБЛИРУЕТСЯ
function hideThreadContent(isHidden) {
  const messageContent = document.querySelector(
    ".message.firstPost > .messageInfo > .messageContent > article > blockquote.messageText",
  );
  if (messageContent !== null) {
    return (messageContent.style.display = isHidden ? "none" : "");
  }
}

function hideThreadPoll(isHidden) {
  const pollContainer = document.querySelector("div.PollContainer");
  if (pollContainer !== null) {
    return (pollContainer.style.display = isHidden ? "none" : "");
  }
}

function updateReportButtons(buttonsData) {
  buttonsData = buttonsData.sort((a, b) => a.position - b.position);
  const postList = document.querySelectorAll(".messageList > li.message");
  const postCommentsList = document.querySelectorAll(
    ".CommentPostList > li.comment",
  );

  const messageList = [...postList, ...postCommentsList];
  for (const message of messageList) {
    const publicControls = message.querySelector(".publicControls");
    if (!publicControls) {
      continue;
    }

    // remove if exists
    publicControls.querySelector(".LZTUpReportButtons")?.remove();

    let postId = message.id.split("-")?.[1];
    if (!postId) {
      console.error(
        "Failed to add report buttons to message element:",
        message,
      );
    }

    // todo: replace by regex
    if (postId.includes("comment-")) {
      postId = postId.replace("comment-", "comments/");
    }

    const buttons = new ReportButtons(buttonsData).createElement(postId);
    publicControls.prepend(buttons);
    Array.from(buttons.children).forEach(e => XenForo.Tooltip($(e)));
  }
}

export { hideThreadContent, hideThreadPoll, updateReportButtons };
