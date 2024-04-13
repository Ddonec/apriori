const menu = document.querySelector(".right-p-p_price-discription_hide");
const img = document.querySelector(".right-p-p_show-more-img");
const text = document.querySelector(".right-p-p_show-more-text");
function toggleProductDisc() {
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      img.style.transform = "rotate(0deg)";
      text.textContent = "Полное описание";
   } else {
      menu.classList.toggle("active");
      img.style.transform = "rotate(180deg)";
      text.textContent = "Скрыть полное описание";

   }
}
