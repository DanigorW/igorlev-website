const scroll = () => {
  let controller = new ScrollMagic.Controller();
  let ourScene = new ScrollMagic.Scene({
    triggerElement: ".cards",
    offset: -200
  })
    .setClassToggle(".cards", "show")
    .addTo(controller);
};

scroll();

const scroll2 = () => {
  let controller = new ScrollMagic.Controller();
  let ourScene = new ScrollMagic.Scene({
    triggerElement: ".cards",
    offset: -850
  })
    .setClassToggle(".about-me-content", "show")
    .addTo(controller);
};

scroll2();

const scroll3 = () => {
  let controller = new ScrollMagic.Controller();
  let ourScene = new ScrollMagic.Scene({
    triggerElement: ".cards"
  })
    .setClassToggle(".form-container", "show")
    .addTo(controller);
};

scroll3();

let word = "if you can imagine it, I can build it";
let i = 0;

const typing = () => {
  if (i < word.length) {
    document.querySelector(".h1-span").textContent += word.charAt(i);
    i++;

    setTimeout(typing, 150);
  }
};

typing();

let sw = window.matchMedia("(max-width: 1300px)").matches;
if (sw < window.matchMedia("(max-width: 1300px)")) {
  document.querySelector(".circle-nav").style.display = "block";
}
/*
const scroll2 = () => {
  let arrow = document.querySelector(".arrow");
  let scroll = window.scrollY;
  if (scroll > 10) {
    arrow.style.visibility = "hidden";

    setTimeout(scroll2, 100);
  }
};
*/
scroll();
//scroll2();
