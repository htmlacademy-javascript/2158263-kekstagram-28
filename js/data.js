/*const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENTS_COUNT = 6;
const COMMENTS_LINE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  ' Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  ' Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTION = [
  'Всё отлично!',
  'Отличный отдых',
  'Веселые выходные #like #Бали',
  'Дома лучше',
  'В моменте',
  'Друзья'
];

const NAME = ['Юрий', 'Ярослав', 'Михаил', 'Галина', 'Саша', 'Никита'];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (array)=>
  array[getRandomInteger(0, array.length - 1)];

const createMessage = () =>
  Array.from({length: getRandomInteger(1,2)}, ()=> getRandomArrayElement(COMMENTS_LINE)).join(' ');

const createComment = () => ({
  id: createIdGenerator(),
  avatar: `ing/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAME),
});
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  comments: Array.from (
    {length: getRandomInteger(0, COMMENTS_COUNT)},
    createComment
  ),
});
const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();
*/
import {getRandomArrayElement, createRandomIdFromRangeGenerator, getRandomInteger} from './util.js';

//Константы
//Количество операций
const COUNT_DESCRIPTIONS = 25;

// 1. Максимальное и минимальное значение индефикатора
const MIN_ID = 1;
const MAX_ID = 25;

// 2. Максимальное и минимальное значение для адреса картинки
const MIN_URL = 1;
const MAX_URL = 25;

// 3. Описание фотографии
const DESCRIPTIONS = [
  'Некоторые дни начинаются лучше остальных.',
  'Сегодня в моей душе солнце.',
  'Если ты ищешь того человека, который изменит твою жизнь, просто возьми и посмотри в зеркало.',
  'Красота лишь привлекает внимание, душа – завоевывает сердце.',
  'Все, что мы отдаем, возвращается вновь.',
  'Цени моменты.',
  'Улыбайся больше, смейся чаще.',
  'Счастье никогда не выйдет из моды.',
  'Они говорили мне, что я не смогу, поэтому я это сделала.'
];

// 4. Максимальное и минимальное значение для лайков
const MIN_LIKES = 15;
const MAX_LIKES = 200;

//5. Максимальное и минимальное число комментариев
const MIN_COMMENT = 1;
const MAX_COMMENT = 5;

// 5.1. Максимальное и минимальное значение случайного числа
const MIN_COMMENT_ID = 0;
const MAX_COMMENT_ID = 47389;

// 5.4. Максимальное и минимальное значение для аватарки
const MIN_COMMENT_AVATAR = 1;
const MAX_COMMENT_AVATAR = 6;

// 5.4. Комментарий к фотографии
const MESSANGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// 5.4. Имя авторов коментариев
const NAMES = [
  'Глеб Калинин',
  'Тимур Латышев',
  'Ксения Попова',
  'Максим Иванов',
  'Елизавета Овчинникова',
  'Елисей Зайцев',
  'Тимур Котов',
  'Даниил Зверев',
  'Александр Смирнов',
  'Максим Золотарев',
  'Савелий Захаров',
  'Есения Полякова'
];

// 1. идентификатор опубликованной фотографии publishedPhotoId
const publishedPhotoId = createRandomIdFromRangeGenerator(MIN_ID, MAX_ID);

// 2. url, строка — адрес картинки
const photoUrlId = createRandomIdFromRangeGenerator(MIN_URL, MAX_URL);

//5.1. id — любое число.
const commentPhotoId = createRandomIdFromRangeGenerator (MIN_COMMENT_ID, MAX_COMMENT_ID);

// Обьеденение всех элементов в обьект

function createComments () {
  return {
    id: commentPhotoId(),
    avatar: `img/avatar-${getRandomInteger (MIN_COMMENT_AVATAR, MAX_COMMENT_AVATAR)}.svg`,
    message: getRandomArrayElement (MESSANGES),
    name: getRandomArrayElement (NAMES),
  };
}

function createPhotoDescription () {
  const countDescriptionComments = getRandomInteger (MIN_COMMENT, MAX_COMMENT);
  return {
    id: publishedPhotoId(),
    url: `photos/${photoUrlId()}.jpg`,
    description: getRandomArrayElement (DESCRIPTIONS),
    likes: getRandomInteger (MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: countDescriptionComments}, createComments)
  };
}

const createPhotoDescriptionArray = () => Array.from({length: COUNT_DESCRIPTIONS}, createPhotoDescription);
export {createPhotoDescriptionArray};
