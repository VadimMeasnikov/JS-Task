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

alert('Сегодня ' + new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString().slice(0,-3) );