import {getRandomArrayElement, createRandomIdFromRangeGenerator, getRandomInteger} from './util.js';

//Количество операций
const COUNT_DESCRIPTIONS = 25;
//  Максимальное и минимальное значение индефикатора
const MIN_ID = 1;
const MAX_ID = 25;
//  Макс и мин значение для адреса картинки
const MIN_URL = 1;
const MAX_URL = 25;
//  Макс и мин значение для лайков
const MIN_LIKES = 15;
const MAX_LIKES = 200;
// Макс и мин число комментариев
const MIN_COMMENT = 1;
const MAX_COMMENT = 5;
//  Макс и мин значение случайного числа
const MIN_COMMENT_ID = 0;
const MAX_COMMENT_ID = 47389;
//  Макс и мин значение для аватарки
const MIN_COMMENT_AVATAR = 1;
const MAX_COMMENT_AVATAR = 6;
//  Описание фотографии
const DESCRIPTIONS = [
  'Никогда не позволяйте никому скучать.',
  'Мечтайте. Поверьте, в это. Добейтесь этого.',
  'Я пыталась заниматься йогой, но в позе лотоса уснула.',
  'Утром, только одна хорошая мысль меняет смысл целого дня.',
  'Никогда не бывает хорошего результата, если у вас негативное отношение к этому.',
  'Мне нравится и улыбаюсь!',
  'Я не ленивый. Просто у меня нет мотивации.',
  'Лучшее еще впереди.',
  'Мне нравится думать, что я на диете. Как же это ужасно!'
];
// Комментарий к фотографии
const MESSANGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
//  Имя авторов коментариев
const NAMES = [
  'Щукина Анна',
  'Аксенова Лидия',
  'Юдин Михаил',
  'Виноградов Фёдор',
  'Романова Вероника',
  'Гуляева Екатерина',
  'Позднякова Альфия',
  'Иванова Виктория',
  'Нефедов Ярослав',
  'Мещерякова Ева',
  'Токарев Семён',
  'Белова Варвара',
  'Архипова Ярослава',
];
//  идентификатор фотографии
const publishPhoto = createRandomIdFromRangeGenerator(MIN_ID, MAX_ID);
// url
const photoUrl = createRandomIdFromRangeGenerator(MIN_URL, MAX_URL);
// id
const commentPhoto = createRandomIdFromRangeGenerator (MIN_COMMENT_ID, MAX_COMMENT_ID);
function createComments () {
  return {
    id: commentPhoto(),
    avatar: `img/avatar-${getRandomInteger (MIN_COMMENT_AVATAR, MAX_COMMENT_AVATAR)}.svg`,
    message: getRandomArrayElement (MESSANGES),
    name: getRandomArrayElement (NAMES),
  };
}

function getPhoto() {
  const countDescriptionComments = getRandomInteger (MIN_COMMENT, MAX_COMMENT);
  return {
    id: publishPhoto(),
    url: `photos/${photoUrl()}.jpg`,
    description: getRandomArrayElement (DESCRIPTIONS),
    likes: getRandomInteger (MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: countDescriptionComments}, createComments)
  };
}

const getPhotoArray = () => Array.from({length: COUNT_DESCRIPTIONS}, getPhoto);
export {getPhotoArray};
