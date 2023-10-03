import { Comment } from 'UI/components/menu/comment';


const getUpdateItems = async () => {
  return [
    new Comment("Раздел обновления расширения").createElement()
  ];
}

export default getUpdateItems;