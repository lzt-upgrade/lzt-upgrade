import { Section, SectionDirection } from 'UI/components/menu/section';
import InfoLink from 'Configs/InfoLink';


const getInfoItems = async () => {
  const infoSection = new Section('LZTUpInfoSection', { direction: SectionDirection.Column , hidden: false})
  console.log(InfoLink.getLinks());
  for (const infoLink of InfoLink.getLinks()) {
    infoSection.addSectionItem(infoLink.title, infoLink.desc, infoLink.icon, infoLink.sectionItemId, { onClick: () => window.open(infoLink.href) });
  }

  return [
    infoSection.createElement()
  ];
}

export default getInfoItems;