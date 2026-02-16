// 1
const textBtn = document.querySelector(".firstBtn");

const oldTextAdd = textBtn.textContent;

const newTextAdd = "Second Text";

function newText() {
    if (textBtn.textContent === newTextAdd) {
        textBtn.textContent = oldTextAdd;
    } else {
        textBtn.textContent = newTextAdd;
    }
}

textBtn.addEventListener("click", newText);

// 2
const colorBtn = document.querySelector(".secondBtn");

function newColor() {
    colorBtn.setAttribute("style", "background-color: green; color: white;");
}

colorBtn.addEventListener("click", newColor);

// 3
const firstImg = document.querySelector("img");

const oldImgSrc = firstImg.src;
const oldImgAlt = firstImg.alt;

const newImgSrc =
    "https://i.pinimg.com/736x/ab/26/f5/ab26f52085a55e83301ed46e202bbd56.jpg";
const newImgAlt = "Car";

function newImg() {
    firstImg.src = newImgSrc;
    firstImg.alt = newImgAlt;
}
function oldImg() {
    firstImg.src = oldImgSrc;
    firstImg.alt = oldImgAlt;
}

firstImg.addEventListener("mouseenter", newImg);
firstImg.addEventListener("mouseleave", oldImg);
