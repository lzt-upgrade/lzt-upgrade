import StorageName from "Configs/StorageName";
import { Checkbox } from 'UI/menu/checkbox';
import { Comment } from 'UI/menu/comment';
import { registerAlert } from "Utils/registers";

const getAppearItems = async () => {
  const appearData = await GM_getValue(StorageName.Appear, {});

  return [
    new Comment("Раздел настроек внешнего вида").createElement()
  ];
}

export default getAppearItems;