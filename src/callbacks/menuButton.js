import { registerModal } from "Utils/registers";
import { generateMenu } from 'UI/menu/menu';
import { setMenuTitle } from 'UI/menu/utils';
import { Tab } from 'UI/components/menu/tab';
import { updateTooltips } from "Xenforo/tooltips";
import config from "Configs/config";
import { PreviewProfile } from "UI/components/menu/previewProfile";
import { LZTProfileDB } from 'IndexedDB/profile';
import { initColorPickers } from 'Utils/colorPicker';
import { getUserId, getUsername } from 'Utils/users';


async function menuButtonCallback() {
  const tabs = [
    new Tab('Главная', 'LZTUpMainTab', 'LZTUpMainSection', true),
    new Tab('Настройки', 'LZTUpSettingsTab', 'LZTUpSettingsSection', false),
  ];

  const menuContent = await generateMenu(tabs);

  const overlay = registerModal(
    config.extName,
    '<div id="LZTUpModalBase"></div>'
  );

  const modal = document.querySelector('#LZTUpModalBase');
  modal.appendChild(menuContent);
  for (const tab of tabs) {
    tab.active ? tab.setActive() : null;
  }

  const baseModal = modal.parentElement;
  baseModal.style.whiteSpace = 'unset';
  baseModal.parentElement.id = 'LZTUpModalOverlay';
  baseModal.parentElement.style = 'margin-bottom: 15px;';

  setMenuTitle(config.extName);
  updateTooltips();
  initColorPickers();

  // Update Profile Preview
  const profileDB = new LZTProfileDB();
  const profileData = await profileDB.read();
  const userid = getUserId('me');
  const username = getUsername('me');
  const previewProfile = new PreviewProfile(userid, username, profileData);
  await previewProfile.updateAll();
}

export { menuButtonCallback };