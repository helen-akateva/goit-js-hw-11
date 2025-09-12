import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector(`.gallery`);
const loader = document.querySelector('.loader');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captions: true,
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
            <div class="card">
          <ul class="card-list">
            <li class="card-item">Likes ${likes}</li>
            <li class="card-item">Views ${views}</li>
            <li class="card-item">Comments ${comments}</li>
            <li class="card-item">Downloads ${downloads}</li>
          </ul>
        </div>
          </a>
        </li>`;
      }
    )
    .join('');

  galleryListEl.innerHTML = markup;
  gallery.refresh();
}

export function clearGallery() {
  galleryListEl.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
