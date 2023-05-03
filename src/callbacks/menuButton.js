import { registerModal } from "Utils/registers";
import { generateMenu } from 'UI/menu/menu';
import { setMenuTitle } from 'UI/menu/utils';
import { Tab } from 'UI/menu/tab';
import { updateTooltips } from "Utils/utils";
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

  const modal = $('#LZTUpModalBase');
  modal.append(menuContent);
  for (const tab of tabs) {
    tab.active ? tab.setActive() : null;
  }

  modal.parent().css("white-space", "unset");
  const modalErrorOverlay = modal.parent().parent()
  modalErrorOverlay.attr('id', 'LZTUpModalOverlay');
  setMenuTitle(config.extName);
  updateTooltips();
}

export { menuButtonCallback };