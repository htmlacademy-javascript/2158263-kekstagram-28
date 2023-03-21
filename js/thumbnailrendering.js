const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const thumbnailListFragment = document.createDocumentFragment();

const generateThumbnails = (foto) => {
  foto.forEach(({ url, likes, comments, description }) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnailListFragment.append(thumbnail);
  });
  container.append(thumbnailListFragment);
};

export { generateThumbnails };
