const carousalItems = document.querySelector(".carousal-items");
const carousalItem = document.querySelectorAll(".carousal-item");

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
let slide = 0;
let count = 0;
previousBtn.addEventListener("click", () => {
  if (slide <= 0) {
    return;
  }

  slide--;
  carousalItems.style.transform = `translateX(-${slide * 100}%)`;
  console.log(slide)
});
nextBtn.addEventListener("click", () => {
  slide++;

  carousalItems.style.transform = `translateX(-${slide * 100}%)`;
  if (count == 4) {
    count = 0;
  }
  let firstElement = carousalItem[count].cloneNode(true);
  carousalItems.appendChild(firstElement);
  count++;
  console.log(slide);
});
