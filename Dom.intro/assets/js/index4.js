// // Управление распределением событий

// const body = document.body;
// const section = document.querySelector("section");
// const button = document.querySelector("button");

// function btnClickHandler(e) {
//     console.log("this = ", this); // currentTarget
//     // console.log("e.target = ", e.target); // Цель события
//     // console.log("e.currentTarget = ", e.currentTarget);

//     e.target.style.backgroundColor = "red";
//     console.log("-------------------");
// }

// // Bubbling and Capturing - Порядок вызова обработчиков;

// // На погружение (capturing)
// body.addEventListener("click", btnClickHandler, { capture: true });
// section.addEventListener("click", btnClickHandler, { capture: true });
// button.addEventListener("click", btnClickHandler, { capture: true });

// // На сплетение (bubbling)
// body.addEventListener("click", btnClickHandler);
// section.addEventListener("click", btnClickHandler);
// button.addEventListener("click", btnClickHandler);

// Прекращение распространения события

// let clickCounter = 0;

// body.addEventListener("click", () => {
//     clickCounter++;
//     console.log("clickCounter >> ", clickCounter);
// });
// button.addEventListener("click", (e) => {
//     e.stopPropagation(); // Прекращение распространения события;
// });

//////////////////////////////////////////////////////

// const div = document.querySelector(".div");

// div.addEventListener("click", () => console.log("click"));

// div.setAttribute("style", "color: red;");

// // div.setAttribute("class", "div div2");

// // classList - Перечень всех классов элемента.

// div.addEventListener("click", function () {
//     // this.classList.add("div2"); // Добавить класс
//     // this.classList.remove("div"); // Убрать класс
//     this.classList.toggle("div2"); // При каждом нажатии либо появляется либо исчезает
// });

// const h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//     this.classList.toggle("headBorder");
// });

///////////////////////////////////////////////////

// const burgerContainer = document.querySelector(".burgerMenuContainer");
// function burgerClickHandler(e) {
//     this.classList.toggle("burgerMenuContainerHide");
//     this.classList.toggle("burgerMenuContainerActive");
//     e.stopPropagation(); // Останавлиявает распространение
// }
// burgerContainer.addEventListener("click", burgerClickHandler);

// function bodyClickHandler() {
//     burgerContainer.classList.add("burgerMenuContainerHide");
//     burgerContainer.classList.remove("burgerMenuContainerActive");
// }

// document.body.addEventListener(
//     "click",
//     bodyClickHandler, //{capture: true }
// );

///////////////////////////////////////////////

// // Добавление дочерних элемеентов (append / prepend).
// const section = document.createElement("section"); // createElement - Создаёт элемент.
// const header = document.querySelector("header");
// const divRoot = document.querySelector("#root");
// const footer = document.querySelector("footer");

// divRoot.append(section); // append - Добавляет элемент после всех дочерних элементов.
// // header.prepend(section); // prepend - Добавляет элемент перед всеми дочерними элементами.

// section.textContent = "Lorem ipsum";
// section.setAttribute("style", "background-color: grey;");

// // Добавление Сиблингов (before / after).
// const btn = document.createElement("button");
// btn.textContent = "Click me!";
// footer.after(btn);

// const divForRemove = document.querySelector(".removable");

// divForRemove.addEventListener("click", function () {
//     this.remove(); // remove - Удаляет элемент.
// });

//////////////////////////////////////////

"use strict";

const users = [
    {
        firstName: "Test1",
        lastName: "Testovych1",
        age: 28,
        photoSrc:
            "https://i.pinimg.com/736x/70/96/3b/70963b5d0f80adfbf170c085d3241bcf.jpg",
    },
    {
        firstName: "Test2",
        lastName: "Testovych2",
        age: 28,
        photoSrc:
            "https://i.pinimg.com/736x/70/96/3b/70963b5d0f80adfbf170c085d3241bcf.jpg",
    },
    {
        firstName: "Test3",
        lastName: "Testovych3",
        age: 28,
        photoSrc:
            "https://i.pinimg.com/736x/70/96/3b/70963b5d0f80adfbf170c085d3241bcf.jpg",
    },
    {
        firstName: "Test4",
        lastName: "Testovych4",
        age: 28,
        photoSrc:
            "https://i.pinimg.com/736x/70/96/3b/70963b5d0f80adfbf170c085d3241bcf.jpg",
    },
    {
        firstName: "Test5",
        lastName: "Testovych5",
        age: 28,
        photoSrc:
            "https://i.pinimg.com/736x/70/96/3b/70963b5d0f80adfbf170c085d3241bcf.jpg",
    },
];

const userCards = users.map((u) => createUserCard(u));
document.body.append(...userCards);

const userCardEl = createUserCard(user);
document.body.append(userCardEl);

function createUserCard(user) {
    const userCardEl = document.createElement("article");
    userCardEl.classList.add("userCard");

    const userImg = createImage(user);
    const userInfoEl = createUserInfo(user);
    const trashIcon = createTrashIcon();

    userCardEl.append(userImg, userInfoEl, trashIcon);
    return userCardEl;
}

function createImage({ photoSrc, firstName, lastName }) {
    const userImg = document.createElement("img");
    userImg.src = photoSrc;
    userImg.alt = `${firstName} ${lastName}`;
    userImg.classList.add("userImg");
    return userImg;
}

const userInfoEl = document.createElement("div");
userInfoEl.classList.add("userInfo");
userCardEl.append(userInfoEl);

const userNameEl = document.createElement("p");
userNameEl.classList.add("userName");
userNameEl.textContent = `${user.firstName} ${user.lastName}`;
userInfoEl.append(userNameEl);

const userAgeEl = document.createElement("span");
userAgeEl.classList.add("userAge");
userAgeEl.textContent = user.age;
userInfoEl.append(userAgeEl);

const trashIcon = document.createElement("i");
trashIcon.classList.add("fa-solid");
trashIcon.classList.add("fa-trash");
trashIcon.classList.add("trashIcon");
userCardEl.append(trashIcon);

function deleteUser(e) {
    // userCardEl.remove();
    //          ИЛИ
    // e.target.parentElement.remove();
    //          ИЛИ
    e.target.closest(".userCard").remove();
    // closest - Ищет ближайший родительский элемент с указанным селектором.
}

trashIcon.addEventListener("click", deleteUser);
