// console.log(document);

// console.log(document.body);

// console.log(document.head);

// // Поиск по ID
// const rootEl = document.getElementById("root");
// console.log(rootEl);

// // Поиск по ТЭГУ
// const divEls = document.getElementsByTagName("div");
// console.log(divEls);

// const divRoot2 = divEls[0];
// console.log(divRoot2);

// // Поиск по КЛАССУ
// const contentDivs = document.getElementsByClassName("content");
// console.log(contentDivs);

// ////////////////////

// const rootEl3 = document.querySelector("#root");
// console.log(rootEl3);

// const divEls1 = document.querySelectorAll("div");
// console.log(divEls1);

// const contentDivs1 = document.querySelectorAll(".content");
// console.log(contentDivs1);

////////////////////////////

// // 1 Способ
// const btn = document.getElementById("ClickBtn");
// console.log(btn);

// const clickHandler = function (event) {
//     console.log("Btn was clicked");
// };

// // Добавляем
// btn.onclick = clickHandler;
// // Убираем
// btn.onclick = null;

// ///////////////////////

// // 2 Способ
// const loginBtn1 = document.getElementById("loginBtn");

// function loginBtnHandler(e) {
//     alert("Log in in process");
// }

// // Добавляем
// loginBtn1.addEventListener("click", loginBtnHandler);
// // Убираем
// loginBtn1.removeEventListener("click", loginBtnHandler);

// //////////////////////

// function logg(e) {
//     console.log("aleeee");
// }

// // loginBtn1.onmouseenter = logg;

// loginBtn1.addEventListener("mouseenter", logg);

// ///////////////////

// const HelloWorldBtn1 = document.querySelector("#HelloWorldBtn");

// function worldConsole(e) {
//     console.log("Hello World!");
// }

// // HelloWorldBtn1.onclick = worldConsole;

// HelloWorldBtn1.addEventListener("click", worldConsole);

// ////////////////////////////////////////////////////

// // Через атрибуты
// const p1 = document.querySelector("#p1");
// console.log(p1);

// console.log(p1.title);

// console.log(p1.id);

// console.log((p1.title = "New Title"));

// // Булевое значение
// p1.hidden = false;

// p1.style.color = "red";

// p1.style.backgroundColor = "orange";

// /////

// // Через методы

// const p2 = document.querySelector("#p2");
// p2.setAttribute("title", "Title of p2");
// console.log(p2.title);

// p2.setAttribute("style", "font-size: 10px; color: yellow;");

// // Булевое значение
// // p2.setAttribute("hidden", "hidden");

// // Вывод - get
// console.log(p2.getAttribute("style"));

// //////////

// const body1 = document.querySelector("body");

// // body1.style.backgroundColor = "blue";

// body1.setAttribute("style", "background-color: green;");
// console.log(body1.getAttribute("style"));

// // Изменение контента
// p2.textContent = "New Text";

// const imgAttr = {
//     src: "https://i.pinimg.com/1200x/f2/03/c8/f203c845333f0e89e4ab948211919b7e.jpg",
//     alt: "Cat",
// };

// const img1 = document.querySelector("img");
// img1.src = imgAttr.src;
// img1.alt = imgAttr.alt;

// img1.setAttribute("height", "400px");

//////////////////////////////////////////////////

// const h11 = document.querySelector("h1");

// h11.setAttribute("style", "background-color: green");

// const btn1 = document.querySelector("button");

// const img1 = document.querySelector(".mainImg");

// function click1(event) {
//     console.log(h11);
//     h11.setAttribute("style", "background-color: blue");

//     img1.src =
//         "https://i.pinimg.com/736x/89/56/c6/8956c6410c0aff689c38a4546ee8bdba.jpg";
//     img1.alt = "Cold";
//     img1.setAttribute(
//         "style",
//         "height: 400px; width: 400px; border-radius: 50%;",
//     );
// }

// // btn1.onclick = click1;

// btn1.addEventListener("click", click1);

// const h2s = document.querySelectorAll("h2");

// h2s.forEach((h2El) => {
//     h2El.style.fontSize = "20px";
//     h2El.style.color = "orange";
// });

///////////////////////////////////////////////

const slides = [
    {
        src: "https://i.pinimg.com/1200x/e6/4f/c1/e64fc17c0f368e3917da5a54641a30bd.jpg",
        alt: "landscape1",
    },
    {
        src: "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
        alt: "landscape2",
    },
    {
        src: "https://i.pinimg.com/1200x/bb/fa/ba/bbfabaf7128019c1272646356567bb61.jpg",
        alt: "landscape3",
    },
    {
        src: "https://i.pinimg.com/1200x/d4/ec/7d/d4ec7d9bddd532ff22384012602c3fb5.jpg",
        alt: "landscape4",
    },
];

let currentSlideIndex = 0;

const slideImg = document.querySelector("img");
slideImg.src = slides[currentSlideIndex].src;
slideImg.alt = slides[currentSlideIndex].alt;

const [prevBtn, nextBtn] = document.querySelectorAll(".navBtn");

function nextSlideHandler() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex += 1;
    } else {
        currentSlideIndex = 0;
    }
    slideImg.src = slides[currentSlideIndex].src;
    slideImg.alt = slides[currentSlideIndex].alt;
}

function prevSlideHandler() {
    if (currentSlideIndex > 0) {
        currentSlideIndex -= 1;
    } else {
        currentSlideIndex = slides.length - 1;
    }
    slideImg.src = slides[currentSlideIndex].src;
    slideImg.alt = slides[currentSlideIndex].alt;
}

nextBtn.addEventListener("click", nextSlideHandler);

prevBtn.addEventListener("click", prevSlideHandler);
