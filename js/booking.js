var checkbox = document.getElementById("toggle-checkbox");
const switcher = document.querySelector(".toggle-checkbox-switcher");

checkbox.addEventListener("change", function () {
   if (this.checked) {
      switcher.style.left = "54px";
      switcher.textContent = "Нет";
      switcher.style.width = "62px";
   } else {
      switcher.style.left = "0";
      switcher.style.width = "54px";
      switcher.textContent = "Да";
   }
});
var checkboxApprove = document.getElementById("approve-input");
const switcherApprove = document.querySelector(".approve-input-label");

checkboxApprove.addEventListener("change", function () {
   if (this.checked) {
      switcherApprove.style.background = "#66bb6a";
   } else {
      switcherApprove.style.background = "#f8f3ed";
   }
});
