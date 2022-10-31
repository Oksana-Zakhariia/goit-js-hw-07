import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryListRef = document.querySelector(".gallery")
const itemsArr = galleryItems.map(({original, preview,description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description} "
    />
  </a>
</div>`}).join('')
galleryListRef.insertAdjacentHTML('beforeend', itemsArr)

galleryListRef.addEventListener('click', onImageClick)

let instance;

function onImageClick(event) { 
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }
    
  instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600" alt = ${event.target.description}>`,
    {
      onShow: (instance) => { document.addEventListener('keydown', keypress) },
      onClose: (instance) => { document.addEventListener('keydown', keypress) }
    });
 instance.show()
}

function keypress(evt) {
  if (evt.key === `Escape`) {
    instance.close();
  }
}