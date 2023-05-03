function hideThreadContent(visible) {
  const messageContent = $('.message.firstPost > .messageInfo > .messageContent');
  return visible ? messageContent.show() : messageContent.hide();
}

export { hideThreadContent }