const items = [
  {
    name: "Deer",
    description: "Naturalist investigation",
    link: "assets/deer.jpg",
  },
  {
    name: "Squirrel",
    description: "Kamikaze squirrels",
    link: "assets/squirel.jpg",
  },
  {
    name: "Bird",
    description: "Birds Fight club",
    link: "assets/bird.jpg",
  },
];
const toLeft = document.querySelector("#toLeft");
const toRight = document.querySelector("#toRight");
let idCounter = 1;

class Slide {
  constructor(item) {
    this._title = item.name;
    this._description = item.description;
    this._image = item.link;
  }

  _getTemplate() {
    const slideElement = document
      .querySelector(".slide-template")
      .content.querySelector(".slide")
      .cloneNode(true);
    return slideElement;
  }

  generateSlide() {
    this._element = this._getTemplate();
    this._element.querySelector(".slider-image").src = this._image;
    this._element.querySelector(".slider-title").textContent = this._title;
    this._element.querySelector(".slider-text").textContent = this._description;
    return this._element;
  }
}

function initialSlides(items) {
  items.forEach((item) => {
    const slide = new Slide(item);
    const slideElement = slide.generateSlide();
    slideElement.id = `slide-${idCounter}`;
    document.querySelector(".slide-template").append(slideElement);
    idCounter++;
  });
}

initialSlides(items);

function cleaner() {
  let first = document.querySelector(`#slide-${idCounter - 3}`);
  let second = document.querySelector(`#slide-${idCounter - 2}`);
  let third = document.querySelector(`#slide-${idCounter - 1}`);
  first.replaceWith("");
  second.replaceWith("");
  third.replaceWith("");
}

function left() {
  let z = items[0];
  items.shift();
  items.push(z);
  cleaner();
  initialSlides(items);
}

function right() {
  let z = items[2];
  items.pop();
  items.unshift(z);
  cleaner();
  initialSlides(items);
}

toLeft.addEventListener("click", left);
toRight.addEventListener("click", right);
