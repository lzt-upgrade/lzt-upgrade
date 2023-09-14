import { isContestsNode } from 'Utils/checkers';
import { waitForElm, getThreadLinks } from 'Utils/utils';


function regOpenContestsBtn(amount = 10) {
  if (isContestsNode() && !$(`#openContestsButton${XenForo.htmlspecialchars(amount)}`).length) {
    const updateButton = $('span.UpdateFeedButton.UpdateFeedButtonIcon');
    const openContestsButton = $(`
      <a class="button" id="openContestsButton${XenForo.htmlspecialchars(amount)}">
        Открыть ${XenForo.htmlspecialchars(amount)}
      </a>
    `);

    openContestsButton.on('click', async () => {
      updateButton.click();
      const el = await waitForElm('div.forumImprovements--mask.hidden');
      if (!el) return;

      const links = getThreadLinks();
      if (links.length) {
        $(links).map((element, value) => {
          if (element <= amount) {
            const win = window.open(`https://${window.location.hostname}/${value}`);
            win ? win.focus() : alert('Разрешите доступ к всплывающим окнам для этого сайта');
          } else {
            return;
          }
        })
      }
    });

    updateButton.length ? updateButton.parent().prepend(openContestsButton) : undefined;
  }
}

function removeOpenContestsBtn(amount = 10) {
  if (isContestsNode()) {
    const openContestsButton = $(`#openContestsButton${XenForo.htmlspecialchars(amount)}`);
    openContestsButton.length ? openContestsButton.remove() : null;
  }
}

export { regOpenContestsBtn, removeOpenContestsBtn };