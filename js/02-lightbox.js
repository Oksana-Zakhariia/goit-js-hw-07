import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(galleryItems);
const galleryListRef = document.querySelector(".gallery")
const itemsArr = galleryItems.map(({original, preview,description}) => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`}).join('')
galleryListRef.insertAdjacentHTML('beforeend', itemsArr)
new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
console.log(galleryListRef);
