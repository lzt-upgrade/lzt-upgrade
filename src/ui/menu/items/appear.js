import StorageName from "Configs/StorageName";
import Checkbox from 'UI/components/menu/checkbox';
import Comment from 'UI/components/menu/comment';
import { registerAlert } from "Utils/registers";
import { Section, SectionDirection } from 'UI/components/menu/section';


const getAppearItems = async () => {
  const appearData = await GM_getValue(StorageName.Appear, {});

  const appearSection = new Section('LZTUpInfoSection', { direction: SectionDirection.Column, hidden: false })
    .addSectionItem('Логотип', 'Выберите логотип для форума из списка', 'far fa-comments', 'LZTUpLogoManager', { rightArrow: true })
    .addSectionItem('Логотип маркета', 'Выберите логотип для маркета из списка', 'far fa-shopping-cart', 'LZTUpMarketLogoManager', { rightArrow: true })
    .addSectionItem('Менеджер тем', 'Выберите тему для форума из списка', 'far fa-paint-brush', 'LZTUpThemeManager', { rightArrow: true })

  return [
    appearSection.createElement()
  ];
}

export default getAppearItems;