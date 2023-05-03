import { onParticipateHandler } from "Utils/handlers";

function contestsAutoCloseHandler(toggle) {
  if (toggle) onParticipateHandler(() => window.close());
}

export { contestsAutoCloseHandler }