import { isContestThread } from 'Utils/checkers';
import { hideThreadContent } from 'Utils/threads';

function contestThreadBlockMove(toTop = true) {
  if (isContestThread()) {
    const contestsThreadBlock = $('div.contestThreadBlock');
    const messageContent = $('li.firstPost > div.messageInfo > div.messageContent > article > blockquote.messageText');
    if (toTop) {
      contestsThreadBlock.after(messageContent);
      contestsThreadBlock.css("border-top", "none").css("border-bottom", "1px solid rgb(45, 45, 45)");
    } else {
      contestsThreadBlock.before(messageContent);
      contestsThreadBlock.css("border-top", "1px solid rgb(45, 45, 45)").css("border-bottom", "none");
    }
  }
}

function contestsBtnInBlockMove(toTop = true) {
  if (isContestThread()) {
    let contestCaptcha;
    const contestsThreadBlock = $('div.contestThreadBlock');
    let participateButton = contestsThreadBlock.find('a.LztContest--Participate');
    const contestEnded = contestsThreadBlock.find('span.button.contestIsFinished').length ? true : false;

    if (!participateButton.length) {
      participateButton = contestsThreadBlock.find('span.LztContest--alreadyParticipating');
      if (!participateButton.length) {
        participateButton = contestsThreadBlock.find('span.button.contestIsFinished');
      }
      contestCaptcha = undefined;
    } else {
      contestCaptcha = contestsThreadBlock.find('div.ContestCaptcha');
    }

    if (toTop) { // to top
      const contestsInfoHeading = contestsThreadBlock.find('div.textHeading');
      participateButton.attr("style", "margin: 0 0 15px"); // fixes big interval between infoHeader and participateButton
      contestsThreadBlock.css('padding', "0");
      contestsInfoHeading.before(participateButton);
      contestCaptcha !== undefined ? participateButton.after(contestCaptcha) : null;
    } else { // to default (bottom)
      var marginToFind = contestEnded === true ? 'div.marginBlock:nth-child(7)' : 'div.marginBlock:nth-child(9)'
      var lastMarginBlock = contestsThreadBlock.find(marginToFind)
      participateButton.attr("style", "margin: 15px 0 0");
      contestsThreadBlock.css('padding', "5px");
      lastMarginBlock.after(participateButton);
      contestCaptcha !== undefined ? participateButton.before(contestCaptcha) : null;
    }
  }
}

function hideContestsContent() {
  if (isContestThread()) {
    return hideThreadContent(visible);
  }
}

export { contestThreadBlockMove, contestsBtnInBlockMove, hideContestsContent };