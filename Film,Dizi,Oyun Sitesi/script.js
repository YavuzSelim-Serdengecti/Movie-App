const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageitem = movielists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageitem - (2 + clickCounter) >= 0) {
      movielists[i].style.transform = `translateX(${
        movielists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielists[i].style.transform = "translateX(0)";
    }
  });
});

/*dark mode start*/

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.navbar a,.sidebar,.sidebar i,.movie-list-title,.toggle,.toggle-ball"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
