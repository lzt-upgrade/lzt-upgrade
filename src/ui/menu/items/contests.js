import { LZTContestsDB } from "IndexedDB/contests";
import { contestsAutoCloseHandler } from "Callbacks/contestsAutoClose";
import { regOpenContestsBtn, removeOpenContestsBtn } from 'UI/buttons/contestsButton';
import { Checkbox } from 'UI/menu/checkbox';
import {
  contestsTagsVisibility,
  contestThreadBlockMove,
  contestsHideContent,
  contestsHidePoll,
  contestsUpdateCapctha,
  contestsAutoFixCaptcha,
} from 'Utils/contests';

const getContestsItems = async () => {
  const contestsDB = new LZTContestsDB();
  const contestsData = await contestsDB.read();

  return [
    new Checkbox('open_ten_contests', 'Кнопка "Открыть 10"')
    .createElement(
      contestsData.openTenContestsBtn,
      async () => {
        await contestsDB.update({openTenContestsBtn: 1});
        regOpenContestsBtn(10);
      },
      async () => {
        await contestsDB.update({openTenContestsBtn: 0});
        removeOpenContestsBtn(10);
      }),

    new Checkbox('hide_tags_in_contests', `Скрытие тегов в теме розыгрыша`)
    .createElement(
      contestsData.hideTagsInThread,
      async () => {
        await contestsDB.update({hideTagsInThread: 1});
        contestsTagsVisibility(true);
      },
      async () => {
        await contestsDB.update({hideTagsInThread: 0});
        contestsTagsVisibility(false);
      }),

    new Checkbox('auto_close_on_participate',
      `Автозакрытие страницы при нажатие на кнопку "Участвовать"
      <span class="fa fa-exclamation-triangle Tooltip" title="При отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      contestsData.autoCloseOnParticipate,
      async () => {
        await contestsDB.update({autoCloseOnParticipate: 1});
        contestsAutoCloseHandler(true);
      },
      async () => {
        await contestsDB.update({autoCloseOnParticipate: 0});
        window.location.reload();
      }),

    new Checkbox('info_top_in_contests', `Отображение информации о розыгрыше вверху темы`)
    .createElement(
      contestsData.infoTopInThread,
      async () => {
        await contestsDB.update({infoTopInThread: 1});
        contestThreadBlockMove(true);
      },
      async () => {
        await contestsDB.update({infoTopInThread: 0});
        contestThreadBlockMove(false);
      }),

    new Checkbox('remove_content_in_contests', `Скрытие содержимого темы розыгрыша`)
    .createElement(
      contestsData.removeContent,
      async () => {
        await contestsDB.update({removeContent: 1});
        contestsHideContent(true);
      },
      async () => {
        await contestsDB.update({removeContent: 0});
        contestsHideContent(false);
      }),

    new Checkbox('remove_poll_in_contests', `Скрытие голосования в теме розыгрыша`)
    .createElement(
      contestsData.removePoll,
      async () => {
        await contestsDB.update({removePoll: 1});
        contestsHidePoll(true);
      },
      async () => {
        await contestsDB.update({removePoll: 0});
        contestsHidePoll(false);
      }),

    new Checkbox('update_captcha_button_in_contests', `Кнопка "Обновление капчи"`)
    .createElement(
      contestsData.updateCaptchaButton,
      async () => {
        await contestsDB.update({updateCaptchaButton: 1});
        contestsUpdateCapctha();
      },
      async () => {
        await contestsDB.update({updateCaptchaButton: 0});
        document.querySelector('.LZTUpRefreshButton')?.remove();
      }),

    new Checkbox('auto_fix_captcha_in_contests',
    `
      Автофикс капчи
      <span class="fa fa-question Tooltip" title="Автоматически обновляет капчу, если она не появилась"></span>
      <span class="fa fa-exclamation-triangle Tooltip" title="При отключение этой функции страница будет перезагружена"></span>
    `)
    .createElement(
      contestsData.autoFixCaptcha,
      async () => {
        await contestsDB.update({autoFixCaptcha: 1});
        contestsAutoFixCaptcha();
      },
      async () => {
        await contestsDB.update({autoFixCaptcha: 0});
        window.location.reload();
      }),
  ];
}

export default getContestsItems;