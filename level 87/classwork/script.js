const imgs = document.getElementsByClassName("slide");
const leftBtn = document.querySelector(".slider-btn.left");
const rightBtn = document.querySelector(".slider-btn.right");

let i = 0;

rightBtn.addEventListener("click", function () {
  if (i < imgs.length - 1) {
    imgs[i].style.zIndex = i + 1;
    i++;
  }
});