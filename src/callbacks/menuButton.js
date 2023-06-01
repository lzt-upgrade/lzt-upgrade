import { registerModal } from "Utils/registers";
import { generateMenu } from 'UI/menu/menu';
import { setMenuTitle } from 'UI/menu/utils';
import { Tab } from 'UI/menu/tab';
import { updateTooltips } from "Xenforo/utils";
import config from "Configs/config";


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

  setMenuTitle(config.extName);
  updateTooltips();
}

export { menuButtonCallback };