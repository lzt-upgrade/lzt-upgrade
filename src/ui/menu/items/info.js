import { Section, SectionDirection } from 'UI/components/menu/section';
import extData from 'Configs/extData';


const getInfoItems = async () => {
  const infoSection = new Section('LZTUpInfoSection', { direction: SectionDirection.Column , hidden: false})
  for (const infoLink of extData.infoLinks) {
    infoSection.addSectionItem(infoLink.title, infoLink.desc, infoLink.icon, infoLink.sectionId, () => window.open(infoLink.href))
  }

  return [
    infoSection.createElement()
  ];
}

export default getInfoItems;