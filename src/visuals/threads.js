// СОЗДАТЬ ОТДЕЛЬНУЮ ФУНКЦИЮ ДЛЯ ЭТОГО А ТО АХУЕТЬ СКОК ДУБЛИРУЕТСЯ
function hideThreadContent(isHidden) {
  const messageContent = document.querySelector(
    ".message.firstPost > .messageInfo > .messageContent > article > blockquote.messageText",
  );
  if (messageContent !== null) {
    return (messageContent.style.display = isHidden ? "none" : "");
  }
}

function hideThreadPoll(isHidden) {
  const pollContainer = document.querySelector("div.PollContainer");
  if (pollContainer !== null) {
    return (pollContainer.style.display = isHidden ? "none" : "");
  }
}

export { hideThreadContent, hideThreadPoll };
