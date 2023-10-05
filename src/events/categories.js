import { waitForElm, sleep } from 'Utils/utils';

// TODO: rework with clear JS
function onClickCategory(nodeSelector, callback) {
  const node = $(`li.node${nodeSelector}.forum.level-n`);
  $(node).on('click', async () => {
    await sleep(750);
    const el = await waitForElm('div.pageNavLinkGroup');
    if (el) callback();
  });
}

export default onClickCategory;