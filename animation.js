let menu = document.querySelector("nav i");
let cross = document.querySelector("#side__navbar i");

let tL = gsap.timeline();

tL.to("#side__navbar", {
  right: 0,
  duration: 0.5,
});

tL.from("#side__navbar h4", {
  x: 100,
  duration: 0.5,
  stagger: 0.25,
  opacity: 0,
});

tL.from("#side__navbar i", {
  opacity: 0,
});

tL.pause();

menu.addEventListener("click", function () {
  tL.play();
});

cross.addEventListener("click", function () {
  tL.reverse();
});
