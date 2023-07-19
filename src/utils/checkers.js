import extData from "Configs/extData";

// Returns true if it is a DOM element
// https://stackoverflow.com/questions/384286/how-do-you-check-if-a-javascript-object-is-a-dom-object
function isElement(o){
  return (
    typeof HTMLElement === 'object' ? o instanceof HTMLElement : //DOM2
    o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
  );
}

function isContestThread() {
  return document.querySelector('div.contestThreadBlock') !== null;
}

function isContestsNode() {
  const currentPage = window.location.pathname;
  return currentPage.includes('/forums/contests/');
}

function isProfilePage() {
  return document.querySelector('ol#ProfilePostList') !== null;
}

function isThreadPage() {
  return document.querySelector('div#content.thread_view') !== null;
}

function isOpenMemberCard() {
  return document.querySelector(extData.selectors.memberCard) !== null;
}

export { isElement, isContestThread, isContestsNode, isProfilePage, isThreadPage, isOpenMemberCard }