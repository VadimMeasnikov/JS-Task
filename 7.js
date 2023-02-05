//Задание 1
// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
// Math.round(x)
// Math.ceil(x)
// Math.floor(x)
// В комментариях к каждой строке напишите, как работают эти округления.

console.log(Math.round(5.4),Math.round(5.5),Math.round(5.6)) //Если число имеет дробную часть, меньше, чем 0.5, то число остается прежним, а если более 0.5, то округляется на следующее число.

// Задание 2
// Выведите в консоль фразы в 2 строки:
// Сегодня 27.10.2022 (здесь будет ваша дата)
// 19 часов 20 минут (здесь будет ваше время)
let now = new Date();
let year = now.getFullYear()
let month = now.getMonth();
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
// let time = new Date().toLocaleTimeString()
// let newTime = time.slice(0,-3);
console.log('Сегодня '+ day + '.' + month + '.' + year);
console.log(hours + ' часов ' + minutes + ' минут ')

