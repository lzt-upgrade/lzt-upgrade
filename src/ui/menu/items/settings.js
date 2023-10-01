import StorageName from 'Configs/StorageName';

import { Section, SectionDirection } from 'UI/components/menu/section';
import { LZTAppearDB } from 'IndexedDB/appear';
import { LZTProfileDB } from 'IndexedDB/profile';
import { LZTSettingsDB } from 'IndexedDB/settings';
import { downloadJSONFile, uploadJSONFile } from 'Utils/files';
import { registerAlert } from 'Utils/registers';
import { Logger } from 'Utils/logger';
import { sleep } from 'Utils/utils';


const appearDB = new LZTAppearDB()
const profileDB = new LZTProfileDB()
const settingsDB = new LZTSettingsDB()

async function saveSettings() {
  const appearData = await appearDB.read();
  const contestsData = await GM_getValue(StorageName.Contests, {});
  const profileData = await profileDB.read();
  const settingsData = await settingsDB.read();
  const usersData = await GM_getValue(StorageName.Users, {});

  const config = JSON.stringify({
    appear: appearData,
    contests: contestsData,
    profile: profileData,
    settings: settingsData,
    users: usersData
  });

  downloadJSONFile(config, 'LZTUpgradeConfig');
  registerAlert('Файл настроек выгружен', 5000);
}

async function uploadSettings() {
  const config = await uploadJSONFile(); // upload json config file from user pc

  if (!config) {
    registerAlert('Ошибка загрузки файла настроек', 5000);
    return;
  }

  try {
    const configObj = JSON.parse(config); // read text as json

    // load data to dbs
    await appearDB.update(configObj?.appear);
    await GM_setValue(StorageName.Contests, configObj?.contests);
    await profileDB.update(configObj?.profile)
    await settingsDB.update(configObj?.settings)
    await GM_setValue(StorageName.Users, configObj?.users);
    registerAlert('Настройки загружены. Выполняю перезагрузку страницы...', 5000);
    await sleep(500);
    window.location.reload();
  } catch (err) {
    Logger.error('Ошибка загрузки файла настроек', err)
    registerAlert('Ошибка загрузки файла настроек', 5000);
  }
}

async function clearCache() {
  await GM_setValue(StorageName.Cache, {});
  registerAlert('Кеш успешно очищен', 5000);
  await sleep(1000);
  window.location.reload();
}

const getSettingsItems = async () => {
  const settingsSection = new Section('LZTUpInfoSection', { direction: SectionDirection.Column , hidden: false})
    .addSectionItem('Сохранить настройки в файл', '', 'far fa-file-download', 'LZTUpSaveSettingsItem', saveSettings)
    .addSectionItem('Загрузить настройки из файла', '', 'far fa-upload', 'LZTUpUploadSettingsItem', uploadSettings)
    .addSectionItem('Очистить кеш', '', 'far fa-database', 'LZTUpClearCacheItem', clearCache)

  return [
    settingsSection.createElement()
  ];
}

export default getSettingsItems;