"use strict";

const [startBtn, stopBtn, resetBtn] = document.querySelectorAll("button");

let current = null;
let to = null;
let intervalId = null;

function printNumbers(from, to, interval) {
    if (current === null) {
        current = from;
    }

    if (intervalId) return;

    intervalId = setInterval(() => {
        if (current > to) {
            clearInterval(intervalId);
            intervalId = null;
            return;
        }

        console.log(current);

        current++;
    }, interval);
}

function stopNumbers() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetNumbers() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    current = null;
    console.clear();
}

startBtn.onclick = function () {
    printNumbers(3, 50, 100);
};

stopBtn.onclick = stopNumbers;

resetBtn.onclick = resetNumbers;
