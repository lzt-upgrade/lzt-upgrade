import { participateByBtnCallback } from 'Callbacks/contestsParticipate';
import {
  hideThreadContent,
  hideThreadPoll
} from 'Visuals/threads';
import Button from 'UI/components/button';
import Logger from 'Utils/logger';
import { registerNavButton } from 'Utils/registers';
import {
  waitForElm,
  getThreadLinks,
  updateFeed
} from 'Utils/utils';
import { tagsVisibility } from 'Utils/tags';
import {
  isContestsNode,
  isContestThread
} from 'Utils/checkers';


const pagesToOpen = 10;
const openContestsBtnId = `LZTUpOpenContestsButton`

function regOpenContestsBtn() {
  if (isContestsNode() && !document.getElementById(openContestsBtnId)) {
    const openContestsBtn = new Button(`Открыть ${XenForo.htmlspecialchars(pagesToOpen)}`).createElement(async () => {
      updateFeed();
      const el = await waitForElm('.forumImprovements--mask.hidden');
      if (!el) {
        return;
      };

      const links = getThreadLinks();
      if (!links.length) {
        return;
      };

      for (let i = 0; i < Math.min(pagesToOpen, links.length); i++) {
        window.open(links[i]);
      }
    });
    openContestsBtn.id = openContestsBtnId;
    registerNavButton(openContestsBtn);
  }
}

function removeOpenContestsBtn() {
  if (isContestsNode()) {
    document.getElementById(openContestsBtnId)?.remove();
  }
}

function contestThreadBlockMove(toTop = true) {
  if (isContestThread()) {
    const contestsThreadBlock = document.querySelector('div.contestThreadBlock');
    const messageContent = document.querySelector('li.firstPost > div.messageInfo > div.messageContent > article > blockquote.messageText');
    if (toTop) {
      contestsThreadBlock.parentElement.append(messageContent)
      contestsThreadBlock.style.borderTop = 'none';
      contestsThreadBlock.style.borderBottom = '1px solid rgb(45, 45, 45)';
    } else {
      contestsThreadBlock.parentElement.prepend(messageContent)
      contestsThreadBlock.style.borderTop = '1px solid rgb(45, 45, 45)';
      contestsThreadBlock.style.borderBottom = 'none';
    }
  }
}

function contestsHideContent(isHidden = true) {
  if (isContestThread()) {
    return hideThreadContent(isHidden);
  }
}

function contestsTagsVisibility(isHidden = true) {
  if (isContestThread()) {
    tagsVisibility(isHidden);
  };
}

function contestsHidePoll(isHidden = true) {
  if (isContestThread()) {
    return hideThreadPoll(isHidden);
  }
}

function contestsUpdateCapctha() {
  if (isContestThread()) {
    const participateBtn = document.querySelector('.LztContest--Participate');
    if (!participateBtn) {
      return;
    }

    const updateButton = new Button('', 'button LZTUpRefreshButton', 'far fa-sync').createElement((e) => {
      e.preventDefault();
      reRenderCaptcha();
    });

    participateBtn.insertAdjacentElement('afterend', updateButton);
  }
}

function contestsAutoFixCaptcha() {
  if (isContestThread()) {
    const captchaControl = document.querySelector('.captchaBlock > div');
    if (captchaControl?.childElementCount > 0) {
      return Logger.debug('Captcha exists');
    }

    return reRenderCaptcha();
  }
}

function reRenderCaptcha() {
  const captchaControl = document.querySelector('.captchaBlock > div');
  if (!captchaControl) {
    return Logger.error("CAPTCHA BLOCK MISSING");
  }

  // Rerender captcha
  turnstile.render(`#${captchaControl.id}`, {
    sitekey: '0x4AAAAAAADMHhlDN2zO9nrC',
    theme: 'dark',
    size: 'compact',
    callback: function(token) {
      console.log(`Challenge Success ${token}`);
      $('.Captcha--XenForo_ControllerPublic_Thread').prepend('<input type="hidden" name="cf-turnstile-response" value="' + token + '">');
      let $participateButton = $('.LztContest--Participate');
      if ($participateButton.length) {
        $participateButton.attr('href', $participateButton.attr('href') + '?cf-turnstile-response=' + token);
        $participateButton.removeAttr('disabled').removeClass('disabled');
      }
    },
  });
}

function contestsParticipateByBtn(status) {
  const contestBlock = document.querySelector('div.contestThreadBlock');
  if (!contestBlock) {
    return;
  }

  if (status) {
    document.addEventListener('keydown', participateByBtnCallback);
  } else {
    document.removeEventListener('keydown', participateByBtnCallback);
  }
}

export {
  regOpenContestsBtn,
  removeOpenContestsBtn,
  contestThreadBlockMove,
  contestsHideContent,
  contestsTagsVisibility,
  contestsHidePoll,
  contestsUpdateCapctha,
  contestsAutoFixCaptcha,
  contestsParticipateByBtn
};