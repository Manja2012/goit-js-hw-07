import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryImages = createGallery(galleryItems);

function createGallery(galleryItems){
  return galleryItems.map(({preview, original, description}) => {
        return `
    <a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}"
        alt="${description}" />
    </a>
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
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionType:'attr',
    captionsData:`alt`,
    captionPosition:'bottom',
    captionDelay:250,
 });
 

