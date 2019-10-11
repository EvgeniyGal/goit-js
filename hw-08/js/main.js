import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');

const galleryItemArr = [];
galleryItems.forEach((element) => {
  const { preview, original, description } = element;
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

function activateLightbox(event) {
  lightbox.classList.add('.lightbox.is-open');
}


console.log(gallery);

console.log(galleryItems);
