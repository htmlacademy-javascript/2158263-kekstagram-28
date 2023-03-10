const PICTURE_COUNT = 25;
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
