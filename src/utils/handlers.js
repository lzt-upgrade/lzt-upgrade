import { waitForElement, sleep } from 'Utils/utils';
import { Logger } from 'Utils/logger';

function onClickCategoryContestsHandler(callback) {
  const giveaways = $('li.node.node766.forum.level-n');
  $(giveaways).on('click', async () => {
    const el = await waitForElement('div.pageNavLinkGroup');
    if (el) callback();
  });
}

async function onParticipateHandler(callback) {
  const el = await waitForElement('.LztContest--Participate');
  if (!el) {
    Logger.debug('onParticipateHandler: no contest button');
    return;
  }

  $(el).on('click', async () => {
    Logger.debug('onParticipateHandler: click contest button');
    if (!$(el).hasClass('disabled')) {
      Logger.debug('onParticipateHandler: waiting for alreadyParticipate button');
      const el = await waitForElement('span.alreadyParticipate');
      if (!el) {
        Logger.debug('onParticipateHandler: no alreadyParticipate button');
        return;
      }

      console.log(el)
      Logger.debug('onParticipateHandler: alreadyParticipate button finded');
      await sleep(1000);
      callback();
    } else {
      Logger.debug('onParticipateHandler: clicked on disabled contest button');
    }
  })
}

export { onClickCategoryContestsHandler, onParticipateHandler };
