const div = document.querySelector('div')
const ul = document.querySelector('ul');
const cont = document.querySelector('.container')
let httpRequest = new XMLHttpRequest();
// Этот код сработает после того, как мы получим ответ сервера:
httpRequest.onload = function () {
    console.log(httpRequest.responseText);
    let object = JSON.parse(httpRequest.responseText);
    div.innerText = object.title;
};
// Настраиваем GET-запрос по URL:
httpRequest.open('GET', "https://jsonplaceholder.typicode.com/todos/1");
// Отправляем запрос:
httpRequest.send();


//Задание 3
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице.Содержимое каждого li - поле title объекта задачи.

let httpRequest1 = new XMLHttpRequest();
httpRequest1.onload = function () {
    console.log(httpRequest1.responseText);
    let objectTitle = JSON.parse(httpRequest1.responseText);
    for( let item of objectTitle){
       let li = document.createElement ('li')
       li.innerText = item.title;
       ul.append(li)
    }
};
httpRequest1.open('GET', "https://jsonplaceholder.typicode.com/todos");
httpRequest1.send();


//Задание 4
// Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typicode.com/comments


let httpRequest2 = new XMLHttpRequest();
httpRequest2.onload = function () {
    console.log(httpRequest2.responseText);
    let objectComment = JSON.parse(httpRequest2.responseText);
    for( let item of objectComment){
       let block = document.createElement ('div')
       let pName = document.createElement ('p')
       let pEmail = document.createElement ('p')
       let pComment = document.createElement ('p')
       pName.innerText = item.name;
       pEmail.innerText = item.email;
       pComment.innerText = item.body
       cont.append(block)
       block.append(pName);
       block.append(pEmail);
       block.append(pComment);
       block.style.background = "green"
       block.style.marginTop = '20px'
    }
};
httpRequest2.open('GET', "https://jsonplaceholder.typicode.com/comments");
httpRequest2.send();

