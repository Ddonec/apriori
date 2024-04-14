function toggleMenu() {
   const menu = document.querySelector(".burger-nav-menu");
   menu.classList.toggle("active");
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
