let word = "if you imagine it, I can build it";
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

const showItem = () => {
  const about = document.querySelector(".about-me-content");
  let aboutPosition = about.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (about > screenPosition) {
    about.classList.add(".about-me-content-show");
  }
};

window.addEventListener("scroll", showItem);
