import { LZTProfileDB } from 'IndexedDB/profile';
// import { Checkbox } from 'UI/menu/checkbox';
import { Comment } from 'UI/menu/comment';
import { PreviewProfile } from 'UI/kit/menu/previewProfile';
import { TextArea } from 'UI/kit/menu/textArea';
import { Input } from 'UI/kit/menu/input';
import { Button } from 'UI/kit/button';
import { ColorPicker } from 'UI/kit/menu/colorPicker';
import { Container } from 'UI/kit/menu/container';
import { Separator } from 'UI/kit/menu/separator';
import { SortableContainer } from 'UI/kit/menu/sortableContainer';
import { SortableItem } from 'UI/kit/menu/sortableItem';
import { getUserId, getUsername } from 'Utils/users';
import { registerAlert } from 'Utils/registers';
import { clearSVG, clearHTML, clearCSS } from 'Utils/purify';
import { addTemporaryMenuSection, openTempMenu } from 'UI/menu/temporarySection';
import { initColorPickers } from 'Utils/colorPicker';
import { AvatarUserBadges } from 'UI/avatarUserBadges';
import { updateUserStyle, updateUserBanner, updateUserBadges } from 'Visuals/users';


const profileDB = new LZTProfileDB();

async function sortableItemOnEditCallback(e, sortableItem, previewProfile) {
  const badgeId = Number(sortableItem.dataset.id);
  const modalContent = document.querySelector('.LZTUpModalContent');
  const uniqSubMenu = document.querySelector('#LZTUpUniqContainer');
  const profileData = await profileDB.read();
  const thisBadgeArray = profileData.badgeIcons.filter(icon => icon.position === badgeId);
  let badgeData = thisBadgeArray[0];
  console.log(badgeId, '==>', profileData.badgeIcons, '==>', thisBadgeArray, '==>', badgeData); // TODO: delete after tests

  async function updateBadgesData(badgeData) {
    // badgeData its current badge (which we are editing)
    const profData = await profileDB.read();
    // const badges = profData.badgeIcons.filter(icon => icon.position !== badgeId);
    // badges.push(badgeData);
    let badges = profData.badgeIcons;
    const currentBadge = badges.find(badge => badge.position === badgeId);
    const currentBadgeId = badges.indexOf(currentBadge)
    badges[currentBadgeId] = badgeData;
    return badges;
  }

  const el = addTemporaryMenuSection(
    [
      new Container(
        [
          new TextArea(badgeData.svg, '<svg>...</svg>', 0, 3000)
          .createElement(
            async (event) => {
              let val = clearSVG(event.target.value.trim());

              if (val.length > 3000) {
                return registerAlert('Максимальная длина иконки 3000 символов. Уменьшите введенный текст для сохранения.')
              }

              badgeData.svg = val;
            }
          ),
        ],
        'Иконка на аватарке',
        'Максимум 3000 символов.',
      ).createElement(),

      new Container(
        [
          new TextArea(badgeData.style, 'background: #fff', 0, 1500)
          .createElement(
            async (event) => {
              let val = clearCSS(event.target.value.trim());

              if (val.length > 1500) {
                return registerAlert('Максимальная длина стиля иконки 1500 символов. Уменьшите введенный текст для сохранения.')
              }

              if (val.length > 1 && val.startsWith('.')) {
                event.target.value = val.replace(/\s/g, '');
                val = event.target.value;
              }

              badgeData.style = val;
            }
          ),
        ],
        'Стиль иконки',
        'Максимум 1500 символов.',
      ).createElement(),

      new Container(
        [
          new Input(badgeData.text, 'Идут два сталкера', 0, 24)
          .createElement(
            async (event) => {
              let val = event.target.value;

              if (val.length > 24) {
                return registerAlert('Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.')
              }

              badgeData.text = val;
            }
          ),
        ],
        'Текст при наведение на иконку',
        'Максимум 24 символа.',
      ).createElement(),

      new Container(
        [
          new ColorPicker('LZTUpColorPickerFill', badgeData.fillColor, 'Цвет иконки (fill):')
          .createElement(
            async (event) => {
              let val = event.target.value;

              badgeData.fillColor = val;
            }
          ),
          new ColorPicker('LZTUpColorPickerStroke', badgeData.strokeColor, 'Цвет иконки (stroke):')
          .createElement(
            (event) => {
              let val = event.target.value;

              badgeData.strokeColor = val;
            }
          ),
        ],
        'Изменение цвета иконки'
      ).createElement(),

      new Container([
        new Button('Сохранить', 'button primary LZTUpIconButton fit', 'far fa-save').createElement(async () => {
          registerAlert('Иконка успешно сохранена.')
          const badges = await updateBadgesData(badgeData);
          await profileDB.update({ badgeIcons: badges });
          updateUserBadges(badges);
        }),
      ]).createElement()
    ]
  )

  modalContent.appendChild(el);
  initColorPickers();
  openTempMenu('Управление иконкой', 'Локальный Уник', uniqSubMenu, async () => {
    const sortable = document.querySelectorAll('.LZTUpSortableContainer > .LZTUpSortableItem');
    const profileData = await profileDB.read();
    for (let i = 0; i < profileData.badgeIcons.length; i++) {
      const content = sortable[i].querySelector('.LZTUPSortableContent');
      content.innerHTML = clearHTML(profileData.badgeIcons[i].text);
    }

    previewProfile.data = profileData;
    previewProfile.updateAll();
  });
}

function createPreviewProfile(profileData) {
  const userid = getUserId('me');
  const username = getUsername('me');
  return new PreviewProfile(userid, username, profileData);
}

const getProfileItems = async () => {
  function generateBadgeItems(previewProfile, profileData) {
    console.log('Generating badge items')
    const items = [];
    for (const badge of profileData.badgeIcons.sort((a, b) => a.position - b.position)) {
      console.log(badge.text, badge.position)
      items.push(new SortableItem(badge.text, badge.position).createElement((e, sortableItem) => sortableItemOnEditCallback(e, sortableItem, previewProfile), sortableItemOnRemoveCallback));
    }

    console.log(items);

    return items;
  }

  function reloadUserBadges(updatedProfileData) {
    const avatarUserBadgesParent = document.querySelector('#LZTUpPreviewContainer > .avatarBox > .avatarUserBadges');
    if (avatarUserBadgesParent) {
      for (const userBadge of avatarUserBadgesParent.children) {
        userBadge.remove();
      }

      const avatarUserBadges = new AvatarUserBadges(updatedProfileData.badgeIcons, true).createElement();
      avatarUserBadgesParent.innerHTML = avatarUserBadges.innerHTML;

      previewProfile.data = updatedProfileData;
      previewProfile.updateAll();
    }
  }

  async function sortableItemOnRemoveCallback(e, sortableItemEl) {
    const profileData = await profileDB.read();
    let badgeIcons = profileData.badgeIcons;
    let newBadgeIcons = [];

    const badgeEl = document.querySelector(`#LZTUpPreviewBadge[data-position="${sortableItemEl.dataset.id}"]`)
    if (badgeEl) {
      badgeEl.remove();
    }

    const remainBadgeEl = document.querySelector('#LZTUpPreviewBadge')
    if (remainBadgeEl) {
      remainBadgeEl.dataset.position = 1;
      remainBadgeEl.dataset.multiple = "false";
      if (remainBadgeEl?.classList.contains('avatarUserBadge--1')) {
        remainBadgeEl.classList.remove('avatarUserBadge--1');
      }

      if (remainBadgeEl?.classList.contains('avatarUserBadge--2')) {
        remainBadgeEl.classList.remove('avatarUserBadge--2');
      }
    }

    for (const badge of badgeIcons) {
      if (String(badge.position) === sortableItemEl.dataset.id) {
        continue;
      }

      // if removed 1st badge set 2nd badge to 1st position
      const item = document.querySelector('.LZTUpSortableContainer > .LZTUpSortableItem');
      if (item) {
        item.dataset.id = 1;
      }

      badge.position = 1;
      newBadgeIcons.push(badge)
    }

    await profileDB.update({ badgeIcons: newBadgeIcons });
    previewProfile.data = profileData;
    previewProfile.updateAll();
    updateUserBadges(newBadgeIcons);
  }

  const profileData = await profileDB.read();
  const currentDomain = window.location.hostname;

  const previewProfile = createPreviewProfile(profileData);

  return [
    new Comment(`На этой вкладке вы можете выбрать стиль вашего ника и лычки. Этот стиль виден только вам.
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
            profileData.usernameStyle = val;
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

            profileData.bannerStyle = val;
            previewProfile.updateBanner(profileData);
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

            profileData.bannerText = val;
            previewProfile.updateBanner(profileData);
          }
        ),
      ],
      'Текст в лычке',
      'Максимум 24 символа. При отсутствии текста и стиля лычка отключается.',
    ).createElement(),


    new Separator().createElement(), // * ADD SEPARATOR

    new Container(
      [
        new SortableContainer(
          generateBadgeItems(previewProfile, profileData)
        ).createElement(async (e) => {
          // move items
          const items = e.target.children;
          const newProfileData = await profileDB.read();
          newProfileData.badgeIcons.reverse();
          for (let i = 0; i < items.length; i++) {
            console.log('moving items');
            items[i].dataset.id = i + 1;
            newProfileData.badgeIcons[i].position = i + 1;
          }

          profileData.badgeIcons = newProfileData.badgeIcons;
          await profileDB.update({ badgeIcons: newProfileData.badgeIcons });
          reloadUserBadges(profileData);
          updateUserBadges(newProfileData.badgeIcons);
        }),

        new Button('Добавить иконку', 'button LZTUpIconButton', 'far fa-plus')
        .createElement(async (e) => {
          const sortableContainer = e.target.parentElement?.querySelector('.LZTUpSortableContainer');

          if (!sortableContainer) {
            return registerAlert('Не найден контейнер для добавления!')
          }

          if (sortableContainer.children.length === 2) {
            return registerAlert('Вы не можете добавить больше 2 иконок!')
          }

          const newProfileData = await profileDB.read();
          const badgeIcons = newProfileData.badgeIcons;

          const defaultIcon = {
            'position': sortableContainer.children.length + 1,
            'style': '',
            'text': 'Новая иконка',
            'svg': '',
            'fillColor': '',
            'StrokeColor': '',
          }

          badgeIcons.push(defaultIcon)

          const newItem = new SortableItem(defaultIcon.text, defaultIcon.position).createElement((e, sortableItem) => sortableItemOnEditCallback(e, sortableItem, previewProfile), sortableItemOnRemoveCallback);

          sortableContainer.appendChild(newItem);
          await profileDB.update({ badgeIcons: badgeIcons });

          profileData.badgeIcons = badgeIcons;

          reloadUserBadges(profileData);
          updateUserBadges(badgeIcons);
        }),
      ],
      'Управление иконками',
      'Ниже вы можете легко настроить иконки уника и их порядок (изменения автоматически применяются)'
    ).createElement(),

    new Container([
      new Button('Сохранить', 'button primary LZTUpIconButton fit', 'far fa-save').createElement(async () => {
        registerAlert('Настройки локального уника успешно сохранены.');
        await profileDB.update({ usernameStyle: profileData.usernameStyle });
        await profileDB.update({ bannerStyle: profileData.bannerStyle });
        await profileDB.update({ bannerText: profileData.bannerText });
        if (profileData.usernameStyle) {
          updateUserStyle(profileData.usernameStyle);
        }

        if (profileData.bannerStyle && profileData.bannerText) {
          updateUserBanner(profileData.bannerStyle, profileData.bannerText);
        }
      }),
    ]).createElement()
  ];
}

export default getProfileItems;