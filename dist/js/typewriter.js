const content = "Front end development";
let i = 0;

let typing = () => {
  if (i < content.length) {
    document.querySelector(".txt-type").innerHTML += content.charAt(i);
    i++;
  }

  setTimeout(typing, 150);
};

typing();
