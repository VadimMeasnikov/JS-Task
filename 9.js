// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.


const inputFind = document.querySelector(".text");
const formFind =  document.querySelector("form");
const ulFind = document.querySelector("ul");
formFind.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = inputFind.value;
    ulFind.append(li);
    inputFind.value = "";
})

//Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

document.querySelector('.ex2').addEventListener('keyup', () => console.log(document.querySelector('.ex2').value))

//Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const input3Find = document.querySelector(".ex3Text");
const form3Find = document.querySelector(".form3");
const ul3Find = document.querySelector(".ul3");
form3Find.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = input3Find.value;
    ul3Find.append(li);
    input3Find.value = "";
})


//Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)
const calculator = document.querySelector(".calculator");
const firstNumber = document.querySelector(".Number1")
const secondNumber = document.querySelector(".Number2")
const options = document.querySelector(".Options");

calculator.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = 0;
    if (options.value = '+'){
        result = +firstNumber.value + +secondNumber.value;
    } else if (options.value = "-") {
        result = +firstNumber.value - +secondNumber.value;
    } else if (options.value = "*"){
        result = +firstNumber.value *  +secondNumber.value;
    } else {
        result = +firstNumber.value /  +secondNumber.value;
    }
    console.log(result);
    console.log((eval(`${+firstNumber.value}${options.value}${+secondNumber.value}`)))
    firstNumber.value = "";
    secondNumber.value = "";
})

//Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
const button = document.querySelector('.randomButton');
button.style.width = "100px";
button.style.height = "100px";
button.addEventListener("mouseenter", (event => {
    button.style.background = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`
}))
button.addEventListener("mouseleave", (event) => {
    //transform: rotate(90deg);
    button.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`
})
