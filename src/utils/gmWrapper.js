import NewStorageName from "Configs/NewStorageName";

const LZTUp = {};

LZTUp.checkType = variable => {
  if (!(variable instanceof NewStorageName)) {
    throw new Error(
      "The variable is not an instance of the 'StorageName' class",
    );
  }
  return true;
};

LZTUp.getValue = async storageName => {
  LZTUp.checkType(storageName);
  return await GM.getValue(storageName.name, storageName.value);
};

LZTUp.setValue = async (storageName, value) => {
  LZTUp.checkType(storageName);
  return await GM.setValue(storageName.name, value);
};

LZTUp.setCache = async (keyName, value) => {
  if (keyName instanceof NewStorageName) {
    // It will help to avoid errors when [Object Object] gets into the cache for the place of the desired value
    keyName = keyName.name;
  }
  const cache = await LZTUp.getValue(NewStorageName.Cache);
  cache[keyName] = value;
  return await GM.setValue(NewStorageName.Cache.name, cache);
};

LZTUp.getCache = async storageName => {
  const cache = await LZTUp.getValue(NewStorageName.Cache);
  return cache[storageName.name] ?? storageName.value;
};

export default LZTUp;
