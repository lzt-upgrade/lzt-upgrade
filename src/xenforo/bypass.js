import Logger from "Utils/logger";

function bypassShareTyping() {
  if (
    Object.hasOwn(unsafeWindow.XenForo, "threadNotify") &&
    Object.hasOwn(unsafeWindow.XenForo.threadNotify, "shareTypingActivity")
  ) {
    Logger.debug("bypassShareTyping thread: true");
    unsafeWindow.XenForo.threadNotify.shareTypingActivity = 0;
  }
}

export { bypassShareTyping };
