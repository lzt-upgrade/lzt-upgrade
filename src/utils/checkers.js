// Returns true if it is a DOM element
// https://stackoverflow.com/questions/384286/how-do-you-check-if-a-javascript-object-is-a-dom-object
function isElement(o){
  return (
    typeof HTMLElement === 'object' ? o instanceof HTMLElement : //DOM2
    o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
  );
}

function isContestThread() {
  return !!document.querySelector('div.contestThreadBlock');
}

function isContestsNode() {
  const currentPath = window.location.pathname;
  return currentPath.includes('/forums/contests/');
}

function isProfilePage() {
  // exec time: <1ms (faster than check meta)
  return !!document.querySelector('#content.member_view');
}

function isThreadPage() {
  // exec time: <1ms (faster than check meta)
  return !!document.querySelector('#content.thread_view');
}

function isOpenMemberCard() {
  return !!document.querySelector('.xenOverlay.memberCard');
}

export {
  isElement,
  isContestThread,
  isContestsNode,
  isProfilePage,
  isThreadPage,
  isOpenMemberCard
}