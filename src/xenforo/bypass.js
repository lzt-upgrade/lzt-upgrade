import Logger from "Utils/logger";

function bypassShareTyping() {
  if (
    Object.hasOwn(XenForo, "threadNotify") &&
    Object.hasOwn(XenForo.threadNotify, "shareTypingActivity")
  ) {
    Logger.debug("bypassShareTyping thread: true");
    XenForo.threadNotify.shareTypingActivity = 0;
  }
}

export { bypassShareTyping };
