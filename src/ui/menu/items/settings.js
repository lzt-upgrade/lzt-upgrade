import StorageName from "Configs/StorageName";

import { Section, SectionDirection } from "UI/components/menu/section";
import { downloadJSONFile, uploadJSONFile } from "Utils/files";
import { registerAlert } from "Utils/registers";
import Logger from "Utils/logger";
import { sleep } from "Utils/utils";
import LZTUp from "Utils/gmWrapper";
import NewStorageName from "Configs/NewStorageName";

async function saveSettings() {
  let configStruct = NewStorageName.generateConfigStruct();

  const config = {};

  // it's necessary that the data have time to turn out
  await Promise.all(
    configStruct.map(async item => {
      config[item.name] = (await LZTUp.getValue(item.original)) || item.default;
    }),
  );

  downloadJSONFile(JSON.stringify(config), "LZTUpgradeConfig");
  registerAlert("Файл настроек выгружен", 5000);
}

async function uploadSettings() {
  const config = await uploadJSONFile(); // upload json config file from user pc

  if (!config) {
    registerAlert("Ошибка загрузки файла настроек", 5000);
    return;
  }

  try {
    let configStruct = NewStorageName.generateConfigStruct();
    const configObj = JSON.parse(config); // read text as json

    // it is necessary that the data has time to load
    await Promise.all(
      configStruct.map(async item => {
        await LZTUp.setValue(
          item.original,
          configObj[item.name] || item.default,
        );
      }),
    );

    registerAlert(
      "Настройки загружены. Выполняю перезагрузку страницы...",
      5000,
    );
    await sleep(500);
    window.location.reload();
  } catch (err) {
    Logger.error("Ошибка загрузки файла настроек", err);
    registerAlert("Ошибка загрузки файла настроек", 5000);
  }
}

async function clearCache() {
  await LZTUp.setValue(StorageName.Cache, StorageName.Cache.value);
  registerAlert("Кеш успешно очищен", 5000);
  await sleep(1000);
  window.location.reload();
}

const getSettingsItems = async () => {
  const settingsSection = new Section("LZTUpInfoSection", {
    direction: SectionDirection.Column,
    hidden: false,
  })
    .addSectionItem(
      "Сохранить настройки в файл",
      "",
      "far fa-file-download",
      "LZTUpSaveSettingsItem",
      { onClick: saveSettings },
    )
    .addSectionItem(
      "Загрузить настройки из файла",
      "",
      "far fa-upload",
      "LZTUpUploadSettingsItem",
      { onClick: uploadSettings },
    )
    .addSectionItem(
      "Очистить кеш",
      "",
      "far fa-database",
      "LZTUpClearCacheItem",
      { onClick: clearCache },
    );

  return [settingsSection.createElement()];
};

export default getSettingsItems;
