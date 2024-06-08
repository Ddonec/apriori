const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
   panel.addEventListener("mouseover", () => {
      removeActiveClasses();
      panel.classList.add("active");
   });
});

function removeActiveClasses() {
   panels.forEach((panel) => {
      panel.classList.remove("active");
   });
}

const prevButton = document.querySelector(".header-slider-buttons_prev");
const nextButton = document.querySelector(".header-slider-buttons_next");
const headers = document.querySelectorAll(".home-header");

let currentIndex = 0;

function updateButtons() {
   if (currentIndex <= 0) {
      prevButton.classList.add("unactive");
   } else {
      prevButton.classList.remove("unactive");
   }

   if (currentIndex >= headers.length - 1) {
      nextButton.classList.add("unactive");
   } else {
      nextButton.classList.remove("unactive");
   }
}

function updateTransform() {
   headers.forEach((header) => {
      header.style.transform = `translateX(-${currentIndex * 100}%)`;
   });
}

function goToNextSlide() {
   if (currentIndex < headers.length - 1) {
      currentIndex++;
   } else {
      currentIndex = 0;
   }
   updateTransform();
   updateButtons();
}

prevButton.addEventListener("click", () => {
   if (currentIndex > 0) {
      currentIndex--;
      updateTransform();
      updateButtons();
   }
});

nextButton.addEventListener("click", () => {
   if (currentIndex < headers.length - 1) {
      currentIndex++;
      updateTransform();
      updateButtons();
   }
});

updateButtons();

setInterval(goToNextSlide, 6000);

