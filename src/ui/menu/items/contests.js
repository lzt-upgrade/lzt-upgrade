import StorageName from 'Configs/StorageName';
import { contestsAutoCloseHandler } from "Callbacks/contestsParticipate";
import { regOpenContestsBtn, removeOpenContestsBtn } from 'UI/buttons/contestsButton';
import { Checkbox } from 'UI/components/menu/checkbox';
import {
  contestsTagsVisibility,
  contestThreadBlockMove,
  contestsHideContent,
  contestsHidePoll,
  contestsUpdateCapctha,
  contestsAutoFixCaptcha,
  contestsParticipateByBtn
} from 'Utils/contests';
import { registerAlert } from "Utils/registers";
import { sleep } from "Utils/utils";


const getContestsItems = async () => {
  const contestsData = await GM_getValue(StorageName.Contests, {});

  return [
    new Checkbox('open_ten_contests', 'Кнопка "Открыть 10"')
    .createElement(
      contestsData.openTenContestsBtn,
      () => {
        regOpenContestsBtn(10);
      },
      () => {
        removeOpenContestsBtn(10);
      },
      async (event) => {
        contestsData.openTenContestsBtn = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
      }),

    new Checkbox('auto_close_on_participate',
      `Автозакрытие страницы при нажатие на кнопку "Участвовать"
      <span class="fa fa-exclamation-triangle Tooltip" title="При отключение этой функции страница будет перезагружена"></span>
      `)
    .createElement(
      contestsData.autoCloseOnParticipate,
      async () => {
        registerAlert('Включено Автозакрытие страницы при нажатие на кнопку "Участвовать"', 5000);
        contestsAutoCloseHandler(true);
      },
      async () => {
        registerAlert('Выключено Автозакрытие страницы при нажатие на кнопку "Участвовать"', 5000);
        await sleep(500);
        window.location.reload();
      },
      async (event) => {
        contestsData.autoCloseOnParticipate = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
      }),

    new Checkbox('info_top_in_contests', `Отображение информации о розыгрыше вверху темы`)
    .createElement(
      contestsData.infoTopInThread,
      () => {},
      () => {},
      async (event) => {
        contestsData.infoTopInThread = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
        contestThreadBlockMove(event.target.checked)
      }),

    new Checkbox('hide_tags_in_contests', `Скрытие тегов в теме розыгрыша`)
    .createElement(
      contestsData.hideTagsInThread,
      () => {},
      () => {},
      async (event) => {
        contestsData.hideTagsInThread = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
        contestsTagsVisibility(event.target.checked);
      }),

    new Checkbox('remove_content_in_contests', `Скрытие содержимого темы розыгрыша`)
    .createElement(
      contestsData.removeContent,
      () => {},
      () => {},
      async (event) => {
        contestsData.removeContent = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
        contestsHideContent(event.target.checked)
      }),

    new Checkbox('remove_poll_in_contests', `Скрытие голосования в теме розыгрыша`)
    .createElement(
      contestsData.removePoll,
      () => {},
      () => {},
      async (event) => {
        contestsData.removePoll = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
        contestsHidePoll(event.target.checked)
      }),

    new Checkbox('update_captcha_button_in_contests', `Кнопка "Обновление капчи"`)
    .createElement(
      contestsData.updateCaptchaButton,
      async () => {
        contestsUpdateCapctha();
      },
      async () => {
        document.querySelector('.LZTUpRefreshButton')?.remove();
      },
      async (event) => {
        contestsData.updateCaptchaButton = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
      }),

    new Checkbox('auto_fix_captcha_in_contests',
    `Автофикс капчи
      <span class="fa fa-question Tooltip" title="Автоматически обновляет капчу, если она не появилась"></span>
      <span class="fa fa-exclamation-triangle Tooltip" title="При отключение этой функции страница будет перезагружена"></span>
    `)
    .createElement(
      contestsData.autoFixCaptcha,
      async () => {
        registerAlert('Включен Автофикс капчи', 5000);
        contestsAutoFixCaptcha();
      },
      async () => {
        registerAlert('Выключен Автофикс капчи', 5000);
        await sleep(500);
        window.location.reload();
      },
      async (event) => {
        contestsData.autoFixCaptcha = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
      }),

    new Checkbox('participate_by_key', `Участие по кнопке Tab`)
    .createElement(
      contestsData.participateByKey,
      () => {},
      () => {},
      async (event) => {
        registerAlert(`Участие по кнопке ${event.target.checked ? 'включено' : 'выключено'}` , 5000);
        contestsData.participateByKey = event.target.checked;
        await GM_setValue(StorageName.Contests, contestsData);
        contestsParticipateByBtn(event.target.checked);
      }),
  ];
}

export default getContestsItems;