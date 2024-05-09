const tabs = document.querySelectorAll(".cabinet-tab");

tabs.forEach(function (tab, index) {
   tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
         tab.classList.remove("active");
      });
      this.classList.add("active");
      if (index === 0) {
         console.log(1);
         profile();
      } else if (index === 1) {
         console.log(2);
         order();
      } else if (index === 2) {
         console.log(3);
         bunus();
      }
   });
});

const cabinetOne = document.querySelector(".cabinet-tab-1");
const cabinetTwo = document.querySelector(".cabinet-tab-2");
const cabinetThree = document.querySelector(".cabinet-tab-3");

function profile() {
   cabinetOne.classList.remove("none");
   cabinetTwo.classList.add("none");
   cabinetThree.classList.add("none");
}
function order() {
   cabinetOne.classList.add("none");
   cabinetTwo.classList.remove("none");
   cabinetThree.classList.add("none");
}

function bunus() {
   cabinetOne.classList.add("none");
   cabinetTwo.classList.add("none");
   cabinetThree.classList.remove("none");
}

const tabsOrders = document.querySelectorAll(".orders-tab");

tabsOrders.forEach(function (tab) {
   tab.addEventListener("click", function () {
      tabsOrders.forEach(function (t) {
         t.classList.remove("active");
      });

      tab.classList.add("active");
   });
});
