function toggleActiveColorBox() {
   var colorBoxes = document.querySelectorAll(".right-p-p_color__box");

   colorBoxes.forEach(function (box) {
      box.addEventListener("click", function () {
         colorBoxes.forEach(function (otherBox) {
            otherBox.classList.remove("right-p-p_color__value-active");
         });
         box.classList.add("right-p-p_color__value-active");
      });
   });
}

toggleActiveColorBox();

function toggleActiveTab() {
   var tabs = document.querySelectorAll(".dscription-p-p_tab");

   tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
         tabs.forEach(function (otherTab) {
            otherTab.classList.remove("active");
         });

         tab.classList.add("active");
      });
   });
}

toggleActiveTab();
