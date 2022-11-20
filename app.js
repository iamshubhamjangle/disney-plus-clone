const carosel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element corresponding to slider
  let slider = document.createElement("div");
  let slideContent = document.createElement("div");
  let movieTitle = document.createElement("h1");
  let movieDes = document.createElement("p");
  let imgSrc = document.createElement("img");

  // inserting data
  movieTitle.appendChild(document.createTextNode(movies[slideIndex].name));
  movieDes.appendChild(document.createTextNode(movies[slideIndex].des));
  imgSrc.src = movies[slideIndex].image;

  // creating relationship between nodes
  slideContent.appendChild(movieTitle);
  slideContent.append(movieDes);
  slider.appendChild(slideContent);
  slider.appendChild(imgSrc);
  carosel.appendChild(slider);

  slideIndex++;

  // setting up class names
  slider.className = "slider";
  slideContent.className = "slide-content";
  movieTitle.className = "movie-title";
  movieDes.className = "movie-des";

  sliders.push(slider);

  if (sliders.length) {
    // move slider 100% left, and keep 2nd slide in middle, also remove extra margin
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) createSlide();

setInterval(() => {
  createSlide();
}, 3000);

// Video
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

/* card sliders */

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});

const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-link");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
