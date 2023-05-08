function hideThreadContent(isHidden) {
  const messageContent = $('.message.firstPost > .messageInfo > .messageContent > article > blockquote.messageText');
  return isHidden ? messageContent.hide() : messageContent.show();
}

export { hideThreadContent }