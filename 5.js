//Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
function addOneToTwo (a, b){ 
    if ( a == undefined ||   b == undefined){
        console.log('--' + 'Введите второй параметр функции' + '--');
    }else if(typeof a !==  'number'  ||  typeof b !== 'number'){
        console.log('Вводите числа');
    }else{
        return a + b;
    }
}
console.log(addOneToTwo (8));

//
// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"

// function square(a) {
//   console.log(a * a)
// }
// square(10) // 100
// square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a){
    if(a == undefined){
        console.log("Функция square не может быть вызвана без аргумента");
    } else {     
        return a*a;
    } 
  
}
console.log(square(66));


//Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }



let guessNumber = (n) => {
  let g = Number(getRandomInteger(1, 10));
  if(n > 11 || n < 1){
    console.log('Ошибка')
  } else {
    if(n == g){
      console.log('Вы выйграли!')
    }else{
      console.log('Вы не угадали, ваше число ' + n + ' ,а выпало число ' + g)
    }
}
}
guessNumber(7);

//Задание 4
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a){
  let array = [];
  for (let item of arr){
   if (item >= a){
    array.push(item);
   }
  }
  return array;
}
console.log(filterFor(arr, 2));

//Задание 5
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

const array = ['i', 'you', 'she'];
const newArray = [];
array.forEach(function copyArr(item){
 newArray.push(item);
})
console.log(array);
console.log(newArray);

//Задание 6
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function  sumObjectValues (object){
let sum = 0;
for (let key in object){
  if (typeof object[key] == "number"){
    sum = sum + object[key];
  } 
}
return sum;
}
console.log(sumObjectValues(objectWithNumbers));