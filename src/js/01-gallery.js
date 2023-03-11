// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGalleryMarkup();

function createGalleryMarkup() {
    return galleryItems.map(({ preview , original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionPosition: 'bottom',
  captionDelay: 250,
});

