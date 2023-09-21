import { Section, SectionDirection } from 'UI/components/menu/section';
import { LZTAppearDB } from 'IndexedDB/appear';
import { LZTContestsDB } from 'IndexedDB/contests';
import { LZTProfileDB } from 'IndexedDB/profile';
import { LZTSettingsDB } from 'IndexedDB/settings';
import { LZTUsersDB } from 'IndexedDB/users';
import { downloadJSONFile, uploadJSONFile } from 'Utils/files';
import { registerAlert } from 'Utils/registers';
import { Logger } from 'Utils/logger';
import { sleep } from 'Utils/utils';


const appearDB = new LZTAppearDB()
const contestsDB = new LZTContestsDB()
const profileDB = new LZTProfileDB()
const settingsDB = new LZTSettingsDB()
const usersDB = new LZTUsersDB()

async function saveSettings() {
  const appearData = await appearDB.read();
  const contestsData = await contestsDB.read();
  const profileData = await profileDB.read();
  const settingsData = await settingsDB.read();
  const usersData = await usersDB.read();

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
    await contestsDB.update(configObj?.contests)
    await profileDB.update(configObj?.profile)
    await settingsDB.update(configObj?.settings)
    await usersDB.update(configObj?.users)
    registerAlert('Настройки загружены. Выполняю перезагрузку страницы...', 5000);
    await sleep(500);
    window.location.reload();
  } catch (err) {
    Logger.error('Ошибка загрузки файла настроек', err)
    registerAlert('Ошибка загрузки файла настроек', 5000);
  }
}

async function clearCache() {
  await GM_setValue('cache', {});
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