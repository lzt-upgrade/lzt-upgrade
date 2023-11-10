import { waitForElm, sleep } from "Utils/utils";

function onClickCategory(nodeSelector, callback) {
  const nodeEls = document.querySelectorAll(
    `li.node${nodeSelector}.forum.level-n`,
  );
  if (nodeEls.length) {
    for (const nodeEl of nodeEls) {
      nodeEl.addEventListener("click", async () => {
        await sleep(750);
        const el = await waitForElm("div.pageNavLinkGroup");
        if (el) callback();
      });
    }
  }
}

export default onClickCategory;
