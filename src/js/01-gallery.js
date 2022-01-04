import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryEls = galleryItems.map((item) =>
    `<div>
     <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
        />
     </a>
</div>
`
).join("");

gallery.insertAdjacentHTML("beforeend", galleryEls);

//Initialization of SimpleLightBox library
let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });

console.log(gallery);


console.log(galleryItems);
