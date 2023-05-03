function isContestThread() {
  return $('div.contestThreadBlock').length;
}

function isContestsNode() {
  const currentPage = window.location.pathname;
  return currentPage.includes('/forums/contests/');
}

function isProfilePage() {
  return $('ol#ProfilePostList').length;
}

function isThreadPage() {
  return $('div#content.thread_view').length;
}

export { isContestThread, isContestsNode, isProfilePage, isThreadPage }