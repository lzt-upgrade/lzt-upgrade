import { onParticipateHandler } from "Events/participate";

function contestsAutoCloseHandler(toggle) {
  if (toggle) {
    onParticipateHandler(() => {
      window.close();
    })
  };
}

function participateByBtnCallback(event) {
  console.log("participateOnBtn", event);
  if (event.key === 'Tab') {
    event.preventDefault();
    if (document.querySelector('.alreadyParticipate.hidden')) {
      document.querySelector('.LztContest--Participate:not(.disabled)')?.click();
    }
  }
}

export {
  contestsAutoCloseHandler,
  participateByBtnCallback
}