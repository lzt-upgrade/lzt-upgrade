import { hasOwn } from "Utils/utils";

function bypassShareTyping() {
  if (hasOwn(XenForo, 'threadNotify') && hasOwn(XenForo.threadNotify, 'shareTypingActivity')) {
    console.log('bypassShareTyping thread: true');
    XenForo.threadNotify.shareTypingActivity = 0;
  }

  // if (hasOwn(XenForo, 'ChatboxRTC') && hasOwn(XenForo.chatboxRTC, 'Start')) {
  //   console.log('bypassShareTyping chat: true');
  //   XenForo.ChatboxRTC.Start.prototype.sendTypingMessage = () => {return};
  // }
}

export { bypassShareTyping };