import { Description } from 'UI/components/menu/description.js';

const getInfoItems = async () => {

  return [
    new Description('Информационное меню').createElement()
  ];
}

export default getInfoItems;