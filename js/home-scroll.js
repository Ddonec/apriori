var container = document.querySelector(".product-cards-overflow-container");
var pagActive = document.querySelector(".pag-line__pag-active");
var pagBtnPrev = document.querySelector(".control-panel_prev-btn");
var pagBtnNext = document.querySelector(".control-panel_next-btn");

container.addEventListener("scroll", function () {
   var scrollWidth = container.scrollWidth;
   var clientWidth = container.clientWidth;
   var scrollLeft = container.scrollLeft;

   var scrolledPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
   pagActive.style.width = scrolledPercent + "%";

   if (scrolledPercent > 1) {
      pagBtnPrev.classList.remove("unactive");
   }
   if (scrolledPercent < 1) {
      pagBtnPrev.classList.add("unactive");
   }
   if (scrolledPercent > 99) {
      pagBtnNext.classList.add("unactive");
   }
   if (scrolledPercent < 99) {
      pagBtnNext.classList.remove("unactive");
   }
});

pagBtnNext.addEventListener("click", function () {
   container.scrollBy({ left: window.innerWidth, behavior: "smooth" });
});

pagBtnPrev.addEventListener("click", function () {
   container.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
});

var containerM = document.querySelector(".panel-container-overflow");
var pagActiveM = document.querySelector(".pag-line__pag-active-main");
var pagBtnPrevM = document.querySelector(".control-panel_prev-btn-main");
var pagBtnNextM = document.querySelector(".control-panel_next-btn-main");

containerM.addEventListener("scroll", function () {
   var scrollWidthM = containerM.scrollWidth;
   var clientWidthM = containerM.clientWidth;
   var scrollLeftM = containerM.scrollLeft; // Была ошибка здесь

   var scrolledPercentM = (scrollLeftM / (scrollWidthM - clientWidthM)) * 100;
   pagActiveM.style.width = scrolledPercentM + "%";

   if (scrolledPercentM > 1) {
      pagBtnPrevM.classList.remove("unactive");
   }
   if (scrolledPercentM < 1) {
      pagBtnPrevM.classList.add("unactive");
   }
   if (scrolledPercentM > 99) {
      pagBtnNextM.classList.add("unactive");
   }
   if (scrolledPercentM < 99) {
      pagBtnNextM.classList.remove("unactive");
   }
});

pagBtnNextM.addEventListener("click", function () {
   containerM.scrollBy({ left: window.innerWidth, behavior: "smooth" });
});

pagBtnPrevM.addEventListener("click", function () {
   containerM.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
});

let startX,
   startScrollLeft,
   isMouseDown = false;

container.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", dragContent);
document.addEventListener("mouseup", stopDragging);

function startDragging(event) {
   isMouseDown = true;
   startX = event.pageX;
   startScrollLeft = container.scrollLeft;
   container.style.cursor = "grabbing";
}

function dragContent(event) {
   if (!isMouseDown) return;

   const offsetX = event.pageX - startX;
   container.scrollLeft = startScrollLeft - offsetX;
}

function stopDragging() {
   isMouseDown = false;
   container.style.cursor = "grab";
}
