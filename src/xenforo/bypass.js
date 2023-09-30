import { Logger } from "Utils/logger";

function bypassShareTyping() {
  if (Object.hasOwn(XenForo, 'threadNotify') && Object.hasOwn(XenForo.threadNotify, 'shareTypingActivity')) {
    Logger.debug('bypassShareTyping thread: true');
    XenForo.threadNotify.shareTypingActivity = 0;
  }

  // if (Object.hasOwn(XenForo, 'ChatboxRTC') && Object.hasOwn(XenForo.chatboxRTC, 'Start')) {
  //   console.log('bypassShareTyping chat: true');
  //   XenForo.ChatboxRTC.Start.prototype.sendTypingMessage = () => {return};
  // }
}

export { bypassShareTyping };