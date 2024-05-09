const greyBg = document.querySelector(".grey-bg");

function toggleMenu() {
   const menu = document.querySelector(".burger-nav-menu");
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      greyBg.style.display = "none";
      document.body.style.overflow = "unset";
   } else {
      menu.classList.add("active");
      greyBg.style.display = "block";
      document.body.style.overflow = "hidden";
   }
}

function toggleNav() {
   var tabs = document.querySelectorAll(".nav-list");

   tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
         var isActive = tab.classList.contains("active");

         tabs.forEach(function (otherTab) {
            otherTab.classList.remove("active");
         });

         if (!isActive) {
            tab.classList.add("active");
         }
      });
   });
}

toggleNav();
