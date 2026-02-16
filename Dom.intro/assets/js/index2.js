// // Ссылки на кнопки
// const btns = document.querySelectorAll(".counterBtn");

// const [btnMinus, btnPlus] = btns;

// const counterEl = document.querySelector("#counter");

// // Обработка на кнопку
// let counter = 0;

// counterEl.textContent = counter;

// function minCount(event) {
//     counter -= 1;
//     console.log(counter);
//     counterEl.textContent = counter;
// }

// btnMinus.addEventListener("click", minCount);

// function pluCount(event) {
//     counter += 1;
//     console.log(counter);
//     counterEl.textContent = counter;
// }

// btnPlus.addEventListener("click", pluCount);

/////////////////////////////////////////////////////

// View - Spagetti

// View - *** - Model

// Model - Данные + методы работы с ними

class Counter {
    constructor(counter) {
        this.counter = counter;
    }
    min() {
        this.counter -= 1;
    }
    plu() {
        this.counter += 1;
    }
}

// ViewModel

const btns = document.querySelectorAll(".counterBtn");

const [btnMinus, btnPlus] = btns;

const counterEl = document.querySelector("#counter");

const count = new Counter(0);

updateView();

function minCount() {
    count.min();
    updateView();
}

btnMinus.addEventListener("click", minCount);

function pluCount() {
    count.plu();
    updateView();
}

btnPlus.addEventListener("click", pluCount);

function updateView() {
    counterEl.textContent = count.counter;
}
