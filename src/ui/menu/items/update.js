import { Comment } from 'UI/menu/comment';


const getUpdateItems = async () => {
  return [
    new Comment("Раздел обновления расширения").createElement()
  ];
}

export default getUpdateItems;