//Задание 2. Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)
let name = prompt('Ваше имя');
alert( 'Привет' + ', ' + name);

//Задание 3. Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
let number = prompt('Введите число');
let  degree = prompt('Введите степень числа');
console.log(number**degree);