import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryItemArr = [];

galleryItems.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  const galleryItemLink = document.createElement('a');
  galleryItemLink.href = original;
  galleryItemLink.classList.add('gallery__link');
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.alt = description;
  image.dataset.source = original;
  const icon = document.createElement('span');
  const iconMaterial = document.createElement('i');
  icon.classList.add('gallery__icon');
  iconMaterial.textContent = 'zoom_out_map';
  iconMaterial.classList.add('material-icons');
  icon.append(iconMaterial);
  galleryItemLink.append(image, icon);
  galleryItem.append(galleryItemLink);
  galleryItemArr.push(galleryItem);
});

gallery.append(...galleryItemArr);

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox___image');

function openLightbox(event) {
  const {
    target: {
      alt,
      classList,
      dataset: { source },
    },
  } = event;

  if (classList.contains('gallery__image')) {
    event.preventDefault();
    lightboxImage.alt = alt;
    lightboxImage.src = source;
    lightbox.classList.add('is-open');
  }
}

function closeLightbox({ target: { classList }, key }) {
  if (
    classList.contains('lightbox__content')
    || classList.contains('lightbox__button')
    || classList.contains('material-icons')
    || key === 'Escape'
  ) {
    lightbox.classList.remove('is-open');
  }
}

gallery.addEventListener('click', openLightbox);
lightbox.addEventListener('click', closeLightbox);
window.addEventListener('keydown', closeLightbox);
