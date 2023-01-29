//Задание 1
console.log('С помощью браузера Chrome я открыл страничку 127.0.0.1:5500');

//Задание 2
// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).
const names = document.querySelectorAll('#list li');
for (let li of names){
    console.log(li.innerText);
}

//Задание 3
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

for(let i = 0; i < names.length; i++){
  names[i].innerText = i;
}

//Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
let p = document.createElement('p');
p.innerText = 'Hellow, World!';
p.style.fontSize = "36px";
p.style.fontWeight = "700";
document.body.appendChild(p);

//Задание 5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
document.querySelector('.today').innerText = new Date().toLocaleDateString();

//Задание 6
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function createTag (tag, color, text){
  let newTag = document.createElement(tag);
  newTag.style.color = color;
  newTag.innerText = text;
  document.body.append(newTag);
}
createTag('p','red','Hello, World!')
createTag('h1','green','Name')

//Задание 7
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

let years = document.querySelector('select')
for(let i = 1960; i < 2021; i++){
  let newYear = document.createElement('option');
  newYear.innerText = i;
  years.append(newYear);
}

//Задание 8

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
//Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

const clients = [{name: "Женя", order: true},{name: "Кристина", order: true},{name: "Павел", order: false},{name: "Виолетта", order: false},{name: "Костя", order: true}]
let result = document.querySelector('#clietnsUl');
for (let item of clients){
  let resultEnd = document.createElement('li')
  if(item.order == true){   
    resultEnd.innerText = '- клиент ' + item.name + ' оплатил заказ';
  }else{
    resultEnd.innerText = '- клиент ' + item.name + ' отменил заказ';
  }
  result.append(resultEnd);
}

// Задание 9
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

//1
let divLinks = document.createElement('div');
divLinks.style.backgroundColor = "red";
divLinks.style.height = "100px"
divLinks.style.width = "300px"
document.body.appendChild(divLinks);
linksArr.forEach(item => {
  let a = document.createElement('a');
  a.innerText = item;
  a.setAttribute("href", item);
  // a.href = item;
  a.style.display = "Block"
  a.style.textDecoration = "none";
  a.style.color = "white"
  a.style.textAlign =" center";
  divLinks.append(a);
})

//Задание 10
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li
let removeTag = document.querySelectorAll('.forRemove')
removeTag.forEach(item => {
  item.remove();
})

//Задание 11*
// Создать массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},

// {name:'Den', age: 43}
// ]
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.
const users = [{name: 'Mark', age: 12},{name: 'Olga', age: 30},{name:'Tom', age: 25},{name:'Den', age: 43}]
let tableUsers = document.querySelector(".tableJS");
users.forEach(item => {
  let tr = document.createElement("tr")
  let tdName = document.createElement("td")
  tdName.style.color = "red";
  let tdAge = document.createElement("td")
  tdAge.style.color = "blue";
  tdName.innerText = item.name;
  tdAge.innerText = item.age;
  tr.append(tdName);
  tr.append(tdAge);
  tableUsers.append(tr);
})

