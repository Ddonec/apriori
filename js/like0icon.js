function getLikeBLK() {
   const likeBLKs = document.querySelectorAll(".svg-like-blk");
   likeBLKs.forEach(function (likeBLK) {
      likeBLK.addEventListener("click", function () {
         likeBLK.classList.toggle("filled-heart");
      });
   });
}
getLikeBLK();
function getLikeWhite() {
   const likeBLKs = document.querySelectorAll(".svg-like-white");
   likeBLKs.forEach(function (likeBLK) {
      likeBLK.addEventListener("click", function () {
         likeBLK.classList.toggle("filled-heart-w");
      });
   });
}
getLikeWhite();
