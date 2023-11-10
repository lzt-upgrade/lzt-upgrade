import { registerModal } from "Utils/registers";
import { generateMenu } from "UI/menu/menu";
import { setMenuTitle } from "UI/menu/utils";
import { Tab } from "UI/components/menu/tab";
import { updateTooltips } from "Xenforo/tooltips";
import config from "Configs/config";
import PreviewProfile from "UI/components/menu/previewProfile";
import { initColorPickers } from "Utils/colorPicker";
import { getUserId, getUsername } from "Utils/users";
import LZTUp from "Utils/gmWrapper";
import NewStorageName from "Configs/NewStorageName";

async function menuButtonCallback() {
  const tabs = [
    new Tab("Главная", "LZTUpMainTab", "LZTUpMainSection", true),
    new Tab("Настройки", "LZTUpSettingsTab", "LZTUpSettingsSection", false),
  ];

  const menuContent = await generateMenu(tabs);

  registerModal(config.extName, '<div id="LZTUpModalBase"></div>');

  const modal = document.querySelector("#LZTUpModalBase");
  modal.appendChild(menuContent);
  for (const tab of tabs) {
    tab.active ? tab.setActive() : null;
  }

  const baseModal = modal.parentElement;
  baseModal.style.whiteSpace = "unset";
  baseModal.parentElement.id = "LZTUpModalOverlay";
  baseModal.parentElement.style = "margin-bottom: 15px;";

  setMenuTitle(config.extName);
  updateTooltips();
  initColorPickers();

  // Update Profile Preview
  const profileData = await LZTUp.getValue(NewStorageName.Profile);
  const badgesData = await LZTUp.getValue(NewStorageName.ProfileBadges);
  const userid = getUserId("me");
  const username = getUsername("me");
  const previewProfile = new PreviewProfile(
    userid,
    username,
    profileData,
    badgesData,
  );
  await previewProfile.updateAll();
}

export { menuButtonCallback };
