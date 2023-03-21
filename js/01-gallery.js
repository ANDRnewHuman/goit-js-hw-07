import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const refs = {
  galleryTagUl: document.querySelector(".gallery"),
};
const cardsMarkup = createImgCardsMarkup(galleryItems);
refs.galleryTagUl.insertAdjacentHTML("beforeend", cardsMarkup);
refs.galleryTagUl.addEventListener("click", onClickImgGallery);

function createImgCardsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
    })
    .join("");
}
function onClickImgGallery(event) {
  event.preventDefault();
  //   const imgGallery = event.target.classList.contains("gallery__image");
  //   if (!imgGallery) {
  //     return;
  //   }
  const instance = basicLightbox.create(`
    <div class="modal">
        <img
        src = "${event.target.dataset.source}" width = "800" heidth = "600"
        >
    </div>
`);

  instance.show();
  if (instance.show()) {
    refs.galleryTagUl.addEventListener("keyup", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
}
