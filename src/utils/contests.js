import { isContestThread } from 'Utils/checkers';
import { hideThreadContent, hideThreadPoll } from 'Utils/threads';
import { tagsVisibility } from 'Utils/tags';

function contestThreadBlockMove(toTop = true) {
  if (isContestThread()) {
    const contestsThreadBlock = document.querySelector('div.contestThreadBlock');
    const messageContent = document.querySelector('li.firstPost > div.messageInfo > div.messageContent > article > blockquote.messageText');
    if (toTop) {
      contestsThreadBlock.insertAdjacentElement('afterEnd', messageContent)
      contestsThreadBlock.style.borderTop = 'none';
      contestsThreadBlock.style.borderBottom = '1px solid rgb(45, 45, 45)';
    } else {
      contestsThreadBlock.insertAdjacentElement('beforeBegin', messageContent)
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

export { contestThreadBlockMove, contestsHideContent, contestsTagsVisibility, contestsHidePoll };