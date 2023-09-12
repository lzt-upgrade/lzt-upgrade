import { isContestThread } from 'Utils/checkers';
import { hideThreadContent, hideThreadPoll } from 'Visuals/threads';
import { tagsVisibility } from 'Utils/tags';
import { Button } from 'UI/components/button';
import { Logger } from 'Utils/logger';

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
    if (captchaControl.childElementCount > 0) {
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

export {
  contestThreadBlockMove,
  contestsHideContent,
  contestsTagsVisibility,
  contestsHidePoll,
  contestsUpdateCapctha,
  contestsAutoFixCaptcha,
};