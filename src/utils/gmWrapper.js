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

export default LZTUp;
