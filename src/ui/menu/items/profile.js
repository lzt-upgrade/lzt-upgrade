import NewStorageName from "Configs/NewStorageName";

import Checkbox from "UI/components/menu/checkbox";
import Comment from "UI/components/menu/comment";
import PreviewProfile from "UI/components/menu/previewProfile";
import TextArea from "UI/components/menu/textArea";
import Input from "UI/components/menu/input";
import Button from "UI/components/button";
import ColorPicker from "UI/components/menu/colorPicker";
import Container from "UI/components/menu/container";
import Separator from "UI/components/menu/separator";
import SortableContainer from "UI/components/menu/sortableContainer";
import SortableItem from "UI/components/menu/sortableItem";
import { getUserId, getUsername } from "Utils/users";
import { registerAlert } from "Utils/registers";
import { clearSVG, clearHTML, clearCSS } from "Utils/purify";
import {
  addTemporaryMenuSection,
  openTempMenu,
} from "UI/menu/temporarySection";
import { initColorPickers } from "Utils/colorPicker";
import AvatarUserBadges from "UI/avatarUserBadges";
import {
  updateUserStyle,
  updateUserBanner,
  updateUserBadges,
} from "Visuals/users";
import { addBackgroundImage } from "Visuals/universal";
import { addBackgroundImageInProfile } from "Visuals/profile";
import Logger from "Utils/logger";
import LZTUp from "Utils/gmWrapper";

const MAX_ICONS_COUNT = 2;

async function sortableItemOnEditCallback(e, sortableItem, previewProfile) {
  const badgeId = Number(sortableItem.dataset.id);
  const modalContent = document.querySelector(".LZTUpModalContent");
  const uniqSubMenu = document.querySelector("#LZTUpUniqContainer");
  const profileData = await LZTUp.getValue(NewStorageName.Profile);
  const badgesData = await LZTUp.getValue(NewStorageName.ProfileBadges);
  const thisBadgeArray = badgesData.filter(icon => icon.position === badgeId);
  let badgeData = thisBadgeArray[0];

  const tempPreviewProfile = createPreviewProfile(
    profileData,
    badgesData,
    "LZTUpTempPreviewContainer",
  );

  async function updateBadgesData(badgeData) {
    // badgeData its current badge (which we are editing)
    const actualBadgeData = await LZTUp.getValue(NewStorageName.ProfileBadges);
    const currentBadge = actualBadgeData.find(
      badge => badge.position === badgeId,
    );
    const currentBadgeId = actualBadgeData.indexOf(currentBadge);
    actualBadgeData[currentBadgeId] = badgeData;
    return actualBadgeData;
  }

  const el = addTemporaryMenuSection([
    tempPreviewProfile.createElement(),

    new Container(
      [
        new TextArea(badgeData.svg, "<svg>...</svg>", 0, 3000).createElement(
          async event => {
            let val = clearSVG(event.target.value.trim());

            if (val.length > 3000) {
              return registerAlert(
                "Максимальная длина иконки 3000 символов. Уменьшите введенный текст для сохранения.",
              );
            }

            badgeData.svg = val;
            tempPreviewProfile.badges.badges =
              await updateBadgesData(badgeData);
            tempPreviewProfile.updateBadges();
          },
        ),
      ],
      "Иконка на аватарке",
      "Максимум 3000 символов.",
    ).createElement(),

    new Container(
      [
        new TextArea(
          badgeData.style,
          "background: #fff",
          0,
          1500,
        ).createElement(async event => {
          let val = clearCSS(event.target.value.trim());

          if (val.length > 1500) {
            return registerAlert(
              "Максимальная длина стиля иконки 1500 символов. Уменьшите введенный текст для сохранения.",
            );
          }

          if (val.length > 1 && val.startsWith(".")) {
            event.target.value = val.replace(/\s/g, "");
            val = event.target.value;
          }

          badgeData.style = val;
          tempPreviewProfile.badges.badges = await updateBadgesData(badgeData);
          tempPreviewProfile.updateBadges();
        }),
      ],
      "Стиль иконки",
      "Максимум 1500 символов.",
    ).createElement(),

    new Container(
      [
        new Input(badgeData.text, "Идут два сталкера", 0, 24).createElement(
          async event => {
            let val = event.target.value;

            if (val.length > 24) {
              return registerAlert(
                "Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.",
              );
            }

            badgeData.text = val;
            tempPreviewProfile.badges.badges =
              await updateBadgesData(badgeData);
            tempPreviewProfile.updateBadges();
          },
        ),
      ],
      "Текст при наведение на иконку",
      "Максимум 24 символа.",
    ).createElement(),

    new Container(
      [
        new ColorPicker(
          "LZTUpColorPickerFill",
          badgeData.fillColor,
          "Цвет иконки (fill):",
        ).createElement(async event => {
          let val = event.target.value;

          badgeData.fillColor = val;
          tempPreviewProfile.badges.badges = await updateBadgesData(badgeData);
          tempPreviewProfile.updateBadges();
        }),
        new ColorPicker(
          "LZTUpColorPickerStroke",
          badgeData.strokeColor,
          "Цвет иконки (stroke):",
        ).createElement(async event => {
          let val = event.target.value;

          badgeData.strokeColor = val;
          tempPreviewProfile.badges.badges = await updateBadgesData(badgeData);
          tempPreviewProfile.updateBadges();
        }),
      ],
      "Изменение цвета иконки",
    ).createElement(),

    new Container([
      new Button(
        "Сохранить",
        "button primary LZTUpIconButton fit",
        "far fa-save",
      ).createElement(async () => {
        const badges = await updateBadgesData(badgeData);
        await LZTUp.setValue(NewStorageName.ProfileBadges, badges);
        updateUserBadges(badges);
        tempPreviewProfile.badges.badges = badges;
        tempPreviewProfile.updateBadges();
        registerAlert("Иконка успешно сохранена.");
      }),
    ]).createElement(),
  ]);

  modalContent.appendChild(el);
  initColorPickers();
  openTempMenu(
    "Управление иконкой",
    "Локальный Уник",
    uniqSubMenu,
    async () => {
      const sortable = uniqSubMenu.querySelectorAll(
        ".LZTUpSortableContainer > .LZTUpSortableItem",
      );

      const actualBadgesData = await LZTUp.getValue(
        NewStorageName.ProfileBadges,
      );

      for (let i = 0; i < actualBadgesData.length; i++) {
        const content = sortable[i].querySelector(".LZTUpSortableContent");
        content.innerHTML = clearHTML(actualBadgesData[i].text);
      }

      previewProfile.badges.badges = actualBadgesData;
      previewProfile.updateBadges();
    },
  );
  await tempPreviewProfile.updateAll(profileData); // update temp preview profile menu after init
}

function createPreviewProfile(profileData, badgesData, profileElId = null) {
  const userid = getUserId("me");
  const username = getUsername("me");
  return new PreviewProfile(
    userid,
    username,
    profileData,
    badgesData,
    profileElId,
  );
}

const getProfileItems = async () => {
  function generateBadgeItems(previewProfile, profileBadgesData) {
    console.log("Generating badge items");
    const items = [];

    for (const badge of profileBadgesData.sort(
      (a, b) => a.position - b.position,
    )) {
      console.log(badge.text, badge.position);
      items.push(
        new SortableItem(badge.text, badge.position).createElement(
          (e, sortableItem) =>
            sortableItemOnEditCallback(e, sortableItem, previewProfile),
          sortableItemOnRemoveCallback,
        ),
      );
    }

    console.log(items);

    return items;
  }

  async function reloadUserBadges(
    updatedProfileData,
    updatedBadgesData,
    profileElId = "LZTUpPreviewContainer",
  ) {
    // TODO: replace with profileBadgesData
    const avatarUserBadgesParent = document.querySelector(
      `#${profileElId} > .avatarBox > .avatarUserBadges`,
    );
    if (avatarUserBadgesParent) {
      for (const userBadge of avatarUserBadgesParent.children) {
        userBadge.remove();
      }

      const avatarUserBadges = new AvatarUserBadges(
        updatedBadgesData,
        true,
      ).createElement();
      avatarUserBadgesParent.innerHTML = avatarUserBadges.innerHTML;

      previewProfile.data = updatedProfileData;
      previewProfile.badgesData = updatedBadgesData;
      await previewProfile.updateAll();
    }
  }

  async function sortableItemOnRemoveCallback(e, sortableItemEl) {
    const uniqSubMenu = document.querySelector("#LZTUpUniqContainer");
    let badgeIcons = await LZTUp.getValue(NewStorageName.ProfileBadges);
    let newBadgeIcons = [];

    const badgeEl = document.querySelector(
      `#LZTUpPreviewBadge[data-position="${sortableItemEl.dataset.id}"]`,
    );
    if (badgeEl) {
      badgeEl.remove();
    }

    const remainBadgeEl = document.querySelector("#LZTUpPreviewBadge");
    if (remainBadgeEl) {
      remainBadgeEl.dataset.position = 1;
      remainBadgeEl.dataset.multiple = "false";
      if (remainBadgeEl?.classList.contains("avatarUserBadge--1")) {
        remainBadgeEl.classList.remove("avatarUserBadge--1");
      }

      if (remainBadgeEl?.classList.contains("avatarUserBadge--2")) {
        remainBadgeEl.classList.remove("avatarUserBadge--2");
      }
    }

    for (const badge of badgeIcons) {
      if (String(badge.position) === sortableItemEl.dataset.id) {
        continue;
      }

      // if removed 1st badge set 2nd badge to 1st position
      const item = uniqSubMenu.querySelector(
        ".LZTUpSortableContainer > .LZTUpSortableItem",
      );
      if (item) {
        item.dataset.id = 1;
      }

      badge.position = 1;
      newBadgeIcons.push(badge);
    }

    await LZTUp.setValue(NewStorageName.ProfileBadges, newBadgeIcons);
    previewProfile.badgesData = newBadgeIcons;
    await previewProfile.updateAll();
    updateUserBadges(newBadgeIcons);
  }

  const profileData = await LZTUp.getValue(NewStorageName.Profile);
  console.log("TEST 123", profileData);
  const badgesData = await LZTUp.getValue(NewStorageName.ProfileBadges);
  const userGroup = await LZTUp.getValue(NewStorageName.UserGroup);
  const currentDomain = window.location.hostname;

  const previewProfile = createPreviewProfile(profileData, badgesData);

  return [
    new Comment(`На этой вкладке вы можете выбрать стиль вашего ника и лычки. Этот стиль виден только вам.
      Чтобы уник был виден всем, рекомендуем <a href="https://${currentDomain}/account/upgrades?upgrade_id=14" target="_blank">купить</a> настоящий уник.`).createElement(),

    previewProfile.createElement(),

    new Container(
      [
        new TextArea(
          profileData.usernameStyle,
          "color: #0daf77",
          0,
          1500,
        ).createElement(event => {
          let val = event.target.value.trim();
          if (val.length > 1500) {
            return registerAlert(
              "Максимальная длина стиля ника 1500 символов. Уменьшите введенный текст для сохранения.",
            );
          }

          if (val.length > 1 && val.startsWith(".")) {
            event.target.value = val.replace(/\s/g, "");
            val = event.target.value;
          } else {
            val = clearCSS(val);
          }

          previewProfile.updateUsernameStyle(val);
          profileData.usernameStyle = val;
          console.log("TEST use", profileData);
        }),
      ],
      "Стиль ника",
      "Максимум 1500 символов. При отсутствии кода используется цвет вашей группы с форума.",
    ).createElement(),

    new Container(
      [
        new TextArea(
          profileData.bannerStyle,
          "background: #fff",
          0,
          1500,
        ).createElement(event => {
          let val = event.target.value.trim();
          if (val.length > 1500) {
            return registerAlert(
              "Максимальная длина стиля лычки 1500 символов. Уменьшите введенный текст для сохранения.",
            );
          }

          if (val.length > 1 && val.startsWith(".")) {
            event.target.value = val.replace(/\s/g, "");
            val = event.target.value;
          } else {
            val = clearCSS(val);
          }

          profileData.bannerStyle = val;
          previewProfile.updateBanner(profileData);
        }),
      ],
      "Стиль лычки",
      "Максимум 1500 символов. При отсутствии текста или стиля лычка отключается.",
    ).createElement(),

    new Container(
      [
        new Input(
          profileData.bannerText,
          "Внимание анекдот",
          0,
          24,
        ).createElement(event => {
          let val = event.target.value;
          if (val.length > 24) {
            return registerAlert(
              "Максимальная длина текста в лычке 24 символа. Уменьшите введенный текст для сохранения.",
            );
          }

          profileData.bannerText = val;
          previewProfile.updateBanner(profileData);
        }),
      ],
      "Текст в лычке",
      "Максимум 24 символа. При отсутствии текста или стиля лычка отключается.",
    ).createElement(),

    new Separator().createElement(), // * ADD SEPARATOR

    new Container(
      [
        new SortableContainer(
          generateBadgeItems(previewProfile, badgesData),
        ).createElement(async e => {
          // move items
          const items = e.target.children;
          const actualBadgesData = await LZTUp.getValue(
            NewStorageName.ProfileBadges,
          );
          actualBadgesData.reverse();
          for (let i = 0; i < items.length; i++) {
            Logger.debug("moving items");
            items[i].dataset.id = i + 1;
            actualBadgesData[i].position = i + 1;
          }

          await LZTUp.setValue(NewStorageName.ProfileBadges, actualBadgesData);
          await reloadUserBadges(profileData, actualBadgesData); // TODO: ВЫЗОВЕТ ОШИБКУ ИЛИ БУДЕТ НЕПРАВИЛЬНО РАБОТАТЬ!!! Переделать на actualBadgesData
          updateUserBadges(actualBadgesData);
        }),

        new Button(
          "Добавить иконку",
          "button LZTUpIconButton",
          "far fa-plus",
        ).createElement(async e => {
          const sortableContainer = e.target.parentElement?.querySelector(
            ".LZTUpSortableContainer",
          );

          if (!sortableContainer) {
            return registerAlert("Не найден контейнер для добавления!");
          }

          if (sortableContainer.children.length === MAX_ICONS_COUNT) {
            return registerAlert("Вы не можете добавить больше 2 иконок!");
          }

          const actualBadgesData = await LZTUp.getValue(
            NewStorageName.ProfileBadges,
          );

          const defaultIcon = {
            position: sortableContainer.children.length + 1,
            style: "",
            text: "Новая иконка",
            svg: "",
            fillColor: "",
            StrokeColor: "",
          };

          actualBadgesData.push(defaultIcon);

          const newItem = new SortableItem(
            defaultIcon.text,
            defaultIcon.position,
          ).createElement(
            (e, sortableItem) =>
              sortableItemOnEditCallback(e, sortableItem, previewProfile),
            sortableItemOnRemoveCallback,
          );

          sortableContainer.appendChild(newItem);

          await LZTUp.setValue(NewStorageName.ProfileBadges, actualBadgesData);

          await reloadUserBadges(profileData, actualBadgesData);
          updateUserBadges(actualBadgesData);
        }),
      ],
      "Управление иконками",
      "Ниже вы можете легко настроить иконки уника и их порядок (изменения автоматически применяются).",
    ).createElement(),

    new Separator().createElement(), // * ADD SEPARATOR

    new Container(
      [
        new Input(
          profileData.backgroundImage,
          "Ссылка на изображение",
          0,
          2048,
        ).createElement(event => {
          let val = XenForo.htmlspecialchars(event.target.value);
          if (val.length > 2048) {
            return registerAlert(
              "Максимальная длина ссылки на фон 2048 символов. Введите другую ссылку для сохранения.",
            );
          }

          console.log("execute background");
          profileData.backgroundImage = val;
          console.log("TEST bacl", profileData);
          previewProfile.updateBackground(profileData.backgroundImage);
        }),
      ],
      "Фон профиля",
      "Поддерживаются только прямые ссылки на изображения.",
    ).createElement(),

    new Checkbox(
      "profile_background_everywhere",
      `Заменить фон на всех страницах форума`,
    ).createElement(
      profileData.backgroundImageEverywhere,
      async () => {
        addBackgroundImage(profileData.backgroundImage);
      },
      async () => {
        addBackgroundImage("");
        addBackgroundImageInProfile(profileData.backgroundImage);
      },
      async event => {
        const actualProfileData = await LZTUp.getValue(NewStorageName.Profile);
        actualProfileData.backgroundImageEverywhere =
          profileData.backgroundImageEverywhere = event.target.checked;
        await LZTUp.setValue(NewStorageName.Profile, actualProfileData);
        registerAlert(
          `${
            event.target.checked ? "Включен" : "Выключен"
          } кастомный фон на всех страницах`,
          5000,
        );
      },
    ),

    new Container([
      new Button(
        "Сохранить",
        "button primary LZTUpIconButton fit",
        "far fa-save",
      ).createElement(async () => {
        const oldProfileData = await LZTUp.getValue(NewStorageName.Profile);
        await LZTUp.setValue(NewStorageName.Profile, profileData);

        registerAlert("Настройки локального уника успешно сохранены.");

        if (profileData.usernameStyle) {
          // update all user styles in page
          updateUserStyle(profileData.usernameStyle);
        } else if (
          oldProfileData.usernameStyle !== "" &&
          profileData.usernameStyle == ""
        ) {
          updateUserStyle(`.${userGroup}`);
        }

        if (profileData.bannerStyle && profileData.bannerText) {
          // update banner in profile
          updateUserBanner(profileData.bannerStyle, profileData.bannerText);
        }

        if (profileData.backgroundImage) {
          // update background image of page
          if (profileData.backgroundImageEverywhere) {
            addBackgroundImage(profileData.backgroundImage);
          } else {
            addBackgroundImageInProfile(profileData.backgroundImage);
          }
        }
        previewProfile.data = profileData;
        await previewProfile.updateAll();
      }),
    ]).createElement(),
  ];
};

export default getProfileItems;
