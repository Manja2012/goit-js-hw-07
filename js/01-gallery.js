import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryImages = createGallery(galleryItems);

function createGallery(galleryItems){
  return galleryItems.map(({preview, original, description}) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
    }).join('');
} 

galleryContainer.insertAdjacentHTML('beforeend',galleryImages);

galleryContainer.addEventListener('click', onGalleryContainerClick)
function onGalleryContainerClick(evt){
  evt.preventDefault();
 if(!evt.target.classList.contains('gallery__image')){
  return;
}
const imgSrc = evt.target.dataset.source;
const instance = basicLightbox.create(`
    <img     
    src="${imgSrc}"
    >
    `);
  instance.show();

 window.addEventListener('keydown',onKeypress);
 function onKeypress(evt){
  if(evt.code === 'Escape'){
    instance.close();
  }
}
}









