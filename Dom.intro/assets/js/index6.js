"use strict";

// // Пользовательские атрибуты (Data атрибуты)

// const btns = document.querySelectorAll("button");

// function btnClickHandler(e) {
//     console.log(e.target.dataset.host);
// }

// // btns[0].addEventListener("click", btnClickHandler);
// // btns[1].addEventListener("click", btnClickHandler);

// btns.forEach((b) => (b.onclick = btnClickHandler));

// // data-userName => dataset.username;
// // data-user-name => dataset.userName;
// console.log(btns[0].dataset.username);
// console.log(btns[1].dataset.userName);

// ////////////////////

// const colorBtns = document.querySelectorAll("div > button");

// function changeColor(e) {
//     e.target.setAttribute(
//         "style",
//         `background-color:${e.target.dataset.color}`,
//     );
// }

// colorBtns.forEach((b) => (b.onclick = changeColor));

/////////////////////////////////////////

// // setTimeout - Функция выполняется через указанное время.
// function timeoutAction() {
//     console.log("Hello");
// }

// console.log("Before Timeout");
// const timeoutId = setTimeout(timeoutAction, 1000);
// console.log("After Timeout");
// clearTimeout(timeoutId); // clearTimeout - остановка Тайм-аута.
// // setInterval - Функция выполняется равномерно через промежуток времени который указан.
// let i = 0;

// function intervalHandler() {
//     if (i === 5) {
//         return clearInterval(intervalId);
//     }
//     console.log(++i);
// }

// console.log("Before Timeout");
// const intervalId = setInterval(intervalHandler, 1000);
// console.log("After Timeout");
// // clearInterval(intervalId); // clearInterval - остановка Интервала.

// /////

// const btn1 = document.querySelector("button");

// function btnHandler(e) {
//     setTimeout(() => {
//         e.target.remove();
//     }, 5000);
// }

// // btn1.onclick = btnHandler;

// function newColor(e) {
//     setTimeout(() => (e.target.style.backgroundColor = "green"), 2000);
// }

// btn1.onclick = newColor;

///////////////////////////////////////////////////////

let time = new Date(0);
// let time = 0;
let intervalId = null;

const timeEl = document.querySelector(".time");

const [startBtn, stopBtn, resetBtn] = document.querySelectorAll(
    "div.btn-container > button",
);

updateTime(time);

function startBtnHandler() {
    const DELAY = 100;

    function tick() {
        time.setMilliseconds(time.getMilliseconds() + DELAY);
        updateTime(time);
    }
    if (!intervalId) {
        intervalId = setInterval(tick, DELAY);
    }
}

startBtn.onclick = startBtnHandler;

function stopBtnHandler() {
    clearInterval(intervalId);
    intervalId = null;
}

stopBtn.onclick = stopBtnHandler;

function resetBtnHandler() {
    time = new Date(0);
    updateTime(time);
}

resetBtn.onclick = resetBtnHandler;

function updateTime(time1) {
    timeEl.textContent = `${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()}`;
}
