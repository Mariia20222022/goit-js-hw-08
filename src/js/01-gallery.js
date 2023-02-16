//

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const markUp = galleryItems
  .map(
    el =>
      `<div>
  <a class="gallery__item" href="${el.original}">
    <img
     class="gallery__image"
   src="${el.preview}"
      data-source="${el.original}"
       alt="${el.description}">
</a>
</div >`
  )
  .join('');
galleryList.insertAdjacentHTML(`beforeend`, markUp);
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
