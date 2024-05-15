var container = document.querySelector(".product-cards-overflow-container-catalog");
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
