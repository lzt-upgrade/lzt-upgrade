import { onParticipateHandler } from "Events/participate";

function contestsAutoCloseHandler(toggle) {
  if (toggle) {
    onParticipateHandler(() => {
      window.close();
    })
  };
}

export { contestsAutoCloseHandler }