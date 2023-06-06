import { LZTProfileDB } from 'IndexedDB/profile';
// import { Checkbox } from 'UI/menu/checkbox';
import { Comment } from 'UI/menu/comment';
import { PreviewProfile } from 'UI/kit/menu/previewProfile';
import { TextArea } from 'UI/kit/menu/textArea';
import { Input } from 'UI/kit/menu/input';
import { ColorPicker } from 'UI/kit/menu/colorPicker';
import { Container } from 'UI/kit/menu/container';
import { Separator } from 'UI/kit/menu/separator';
import { getUserId, getUsername } from 'Utils/users';
import { registerAlert } from 'Utils/registers';
import { clearSVG } from 'Utils/utils';

const getProfileItems = async () => {
  const profileDB = new LZTProfileDB();
  const profileData = await profileDB.read();
  const currentDomain = window.location.hostname;
  const userid = getUserId('me');
  const username = getUsername('me');

  const previewProfile = new PreviewProfile(userid, username, profileData);

  return [
    new Comment(`В этой вкладке можно выбрать стиль вашего ника и лычки. Этот стиль виден только вам.
      Чтобы уник был виден всем, рекомендуем <a href="https://${currentDomain}/account/upgrades?upgrade_id=14" target="_blank">купить</a> настоящий уник.`)
      .createElement(),

    previewProfile.createElement(),

    new Container(
      [
        new TextArea(profileData.usernameStyle, 'color: #0daf77', 0, 1500)
        .createElement(
          (event) => {
            let val = event.target.value;
            if (val.length > 1500) {
              return registerAlert('Максимальная длина стиля ника 1500 символов. Уменьшите введенный текст для сохранения.')
            }

            if (val.length > 1 && val.startsWith('.')) {
              event.target.value = val.replace(/\s/g, '');
              val = event.target.value;
            }

            previewProfile.updateUsernameStyle(val);
            profileDB.update({ usernameStyle: val }); // ! REMOVE AFTER TESTS
          }
        ),
      ],
      'Стиль ника',
      'Максимум 1500 символов. При отсутствии кода используется цвет вашей группы с форума.',
    ).createElement(),

    new Container(
      [
        new TextArea(profileData.bannerStyle, 'background: #fff', 0, 1500)
        .createElement(
          (event) => {
            let val = event.target.value;
            if (val.length > 1500) {
              return registerAlert('Максимальная длина стиля лычки 1500 символов. Уменьшите введенный текст для сохранения.')
            }

            if (val.length > 1 && val.startsWith('.')) {
              event.target.value = val.replace(/\s/g, '');
              val = event.target.value;
            }

            previewProfile.updateBannerStyle(val);
            previewProfile.updateBadgeStyle(val);

            profileDB.update({ bannerStyle: val }); // ! REMOVE AFTER TESTS
          }
        ),
      ],
      'Стиль лычки',
      'Максимум 1500 символов. При отсутствии текста и стиля лычка отключается.',
    ).createElement(),

    new Container(
      [
        new Input(profileData.bannerText, 'Внимание анекдот', 0, 24)
        .createElement(
          (event) => {
            let val = event.target.value;
            if (val.length > 24) {
              return registerAlert('Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.')
            }

            previewProfile.updateBannerText(val);
            profileDB.update({ bannerText: val }); // ! REMOVE AFTER TESTS
          }
        ),
      ],
      'Текст в лычке',
      'Максимум 24 символа. При отсутствии текста и стиля лычка отключается.',
    ).createElement(),


    new Separator().createElement(), // * ADD SEPARATOR


    new Container(
      [
        new TextArea(profileData.badgeIcon, '<svg>...</svg>', 0, 3000)
        .createElement(
          async (event) => {
            // event.target.value = clearSVG(event.target.value); // ! add to save button
            let val = clearSVG(event.target.value.trim());

            if (val.length > 3000) {
              return registerAlert('Максимальная длина иконки 3000 символов. Уменьшите введенный текст для сохранения.')
            }

            let data = await profileDB.read();
            data['badgeIcon'] = val
            previewProfile.updateBadgeAll(data);

            profileDB.update({ badgeIcon: val }); // ! REMOVE AFTER TESTS
          }
        ),
      ],
      'Иконка на аватарке',
      'Максимум 3000 символов.',
    ).createElement(),

    new Container(
      [
        new Input(profileData.badgeText, 'Идут два сталкера', 0, 24)
        .createElement(
          (event) => {
            let val = event.target.value;
            if (val.length > 24) {
              return registerAlert('Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.')
            }

            previewProfile.updateBadgeText(val);
            profileDB.update({ badgeText: val }); // ! REMOVE AFTER TESTS
          }
        ),
      ],
      'Текст при наведение на иконку',
      'Максимум 24 символа.',
    ).createElement(),

    new Container(
      [
        new ColorPicker('LZTUpColorPickerFill', profileData.badgeFill, 'Цвет иконки (fill):')
        .createElement(
          (event) => {
            let val = event.target.value;

            previewProfile.updateBadgeColor(val, 'fill');
            profileDB.update({ badgeFill: val }); // ! REMOVE AFTER TESTS
          }
        ),
        new ColorPicker('LZTUpColorPickerStroke', profileData.badgeStroke, 'Цвет иконки (stroke):')
        .createElement(
          (event) => {
            let val = event.target.value;

            previewProfile.updateBadgeColor(val, 'stroke');
            profileDB.update({ badgeStroke: val }); // ! REMOVE AFTER TESTS
          }
        ),
      ],
      'Изменение цвета иконки'
    ).createElement(),

    // new Checkbox('open_ten_contests', 'Кнопка "Открыть 10"')
    // .createElement(
    //   profileData.openTenContestsBtn,
    //   async () => {
    //     await profileData.update({openTenContestsBtn: 1});
    //     regOpenContestsBtn(10);
    //   },
    //   async () => {
    //     await profileData.update({openTenContestsBtn: 0});
    //     removeOpenContestsBtn(10);
    //   }),
  ];
}

export default getProfileItems;