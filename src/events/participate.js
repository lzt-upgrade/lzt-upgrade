import { waitForElm, sleep } from 'Utils/utils';
import Logger from 'Utils/logger';

function onParticipateHandler(callback, sleepTime = 1000) {
  return waitForElm('.LztContest--Participate')
    .then(el => {
      Logger.debug('onParticipateHandler: Participate button finded');
      el.addEventListener('click', async () => {
        Logger.debug('onParticipateHandler: click contest button');
        if (el.classList.contains('disabled')) {
          Logger.debug('onParticipateHandler: clicked on disabled contest button');
          return;
        }

        Logger.debug('onParticipateHandler: waiting for alreadyParticipate button');
        const elem = await waitForElm('span.alreadyParticipate');
        if (!elem) {
          Logger.debug('onParticipateHandler: no alreadyParticipate button');
          return;
        }

        Logger.debug('onParticipateHandler: alreadyParticipate button finded');
        await sleep(sleepTime);
        callback();
      })
    })
    .catch(el => {
      Logger.debug('onParticipateHandler: no contest button');
    });
}

export { onParticipateHandler };