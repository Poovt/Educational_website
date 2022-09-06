function slider() {
  const child = document.querySelector(".child");
  const text = document.querySelector(" .text");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    text.classList.toggle("text-active");
    burger.classList.toggle("toggle");
  });
}
slider();

const accordion = document.getElementsByClassName("accordion");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
let more = document.querySelectorAll(".more");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}
