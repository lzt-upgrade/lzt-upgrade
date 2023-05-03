import { isContestsNode } from 'Utils/checkers';
import { waitForElement, getContestsLinks } from 'Utils/utils';


function regOpenContestsBtn(amount = 10) {
  if (isContestsNode()) {
    removeOpenContestsBtn(amount);
    const updateButton = $('span.UpdateFeedButton.UpdateFeedButtonIcon');
    const openContestsButton = $(`
      <a class="button" id="openContestsButton${XenForo.htmlspecialchars(amount)}">
        Открыть ${amount < 100 ? XenForo.htmlspecialchars(amount) : 'прогруженные'}
      </a>
    `);

    openContestsButton.on('click', async () => {
      updateButton.click();
      const el = await waitForElement('div.forumImprovements--mask.hidden');
      if (!el) return;

      const links = getContestsLinks();
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