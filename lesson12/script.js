let startButton = document.querySelector('#start')
let timer = document.querySelector('#game-time')
let game = document.querySelector('#game')
let timeValue = document.querySelector('#time-header');
let timeSpan = document.querySelector('#time');
let result = document.querySelector('#result-header');
// Пропустил важный элемент:
let resultSpan = document.querySelector('#result');

let score = 0;
let isGameActive = false

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function renderBox(){
    game.innerHTML = ''
    randomSize =  getRandomInteger(30, 100);
    let maxDelta = 300 - randomSize;
    let box = document.createElement('div');
    // box.style.width = `${getRandomInteger(50, 100)}px`
    // У нас же есть для этого randomSize:
    box.style.width = `${randomSize}px`
    box.style.height = box.style.width;
    box.style.borderColor = 'black';
    box.style.background = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`
    box.style.position = 'absolute';
    // Не работает, потому что нет пикселей:
    // box.style.top = getRandomInteger(0, maxDelta);
    // box.style.left =  getRandomInteger(0, maxDelta);
    box.style.top = `${getRandomInteger(0, maxDelta)}px`;
    box.style.left =  `${getRandomInteger(0, maxDelta)}px`;
    box.style.cursor = 'pointer';
    box.classList.add('box');
    game.append(box);
}
function gameBoxClick(event){
    // Здесь пргопустил проверку запущена ли игра:
    if (!isGameActive) {
        return;
    }
    // эта проверка выше

    if(event.target.classList.contains('box')){
       score = score + 1;
       renderBox();
    }
}
function endGame () {
    isGameActive = false;
    game.innerHTML = '';
    startButton.classList.remove('hide');
    game.style.background = ' #ccc';
    timeValue.classList.add('hide');
    result.classList.remove('hide');

    // Тут тоже напутано:
    // timeSpan.innerText = timeSpan.value

    // Добавляем результат в спан:
    resultSpan.innerText = score.toString();
    // Разблокируем поле для установки времени:
    timer.removeAttribute('disabled');

}
// console.log(startButton, timer, field)
function startGame(){
    isGameActive = true;
    game.style.background = 'white';
    game.style.opacity = '1';
    startButton.classList.add('hide');
    // Обнулить скор:
    score = 0;
    // Заблокировать установку времени:
    timer.setAttribute('disabled', true);
    // Забрать время из поля внизу в заголовок:
    timeSpan.innerText = timer.value;
    // Показать время в заголовке сверху:
    timeValue.classList.remove('hide');
    // Скрыть заголовок с результатом:
    result.classList.add('hide');

    let interval = setInterval(function(){ 
        //  currentTime = Number(timer.value);
        // Забираем время из правильного места:
        let currentTime = Number(timeSpan.innerText);

        if(currentTime <= 0){
            clearInterval(interval);
            endGame();
         } else {
            // timer.innerText = (timer.value - 0.1).toFixed(1);
            // Тоже перепутано, откуда что берется:
            timeSpan.innerText = (currentTime - 0.1).toFixed(1);

        }
    },100);
    renderBox ();
}
game.addEventListener('click', gameBoxClick);
startButton.addEventListener('click', startGame)