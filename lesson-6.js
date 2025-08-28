// Задание 
// 1.  Даны массив `arr_1= [101, 202, 303, 404, 505]` и `arr_2 = [606, 707, 808, 909]` 
// - создайте третий массив `superArr` который будет результатом "слияния" 
// предыдущих двух. Результатом должен быть массив
//  `superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909]`

const arr_1 = [101, 202, 303, 404, 505];
const arr_2 = [606, 707, 808, 909];

const superArr = [...arr_1, ...arr_2];
console.log(superArr);
// 2.  Метод `Math.min()` может принимать в параметры неограниченное кол-во чисел и 
// возвращает наименьшее из них. Например:
// Math.min(102, 1231, 29922, 1);      // вернет 1
//Передайте в этот метод элементы массива superArr (не сам массив, а его элементы)
// Для этого вам надо раскрыть массив.
function resultSuperArr(array) {
  console.log(Math.min(array));
}
resultSuperArr(...superArr)

// 1. Дан объект obj со свойствами width: 300 и heigth: 550. Создайте новый объект, 
// который будет копией obj, но будет иметь еще и метод area(), который должен вернуть
//  произведение свойств width и height;

const obj = {
  width: 300, 
  height: 550
};
const newObj = {
  ...obj,
  area() {
    return this.width * this.height;
  }
}
console.log(newObj.area());



// 2. Создайте функцию которая принимает произвольное количество 
// параметров и возвращает их сумму.


function sum(...number) {
  let total = 0;
  for(let i = 0; i < number.length; i++) {
    total += number[i]
  }
  return total;
}

const number = [10,10,10,10,10];
console.log(sum(...number));




// Задании
// - Получить узел `html`
let html = document.documentElement;
console.log(html);

// - Поменять фоновый цвет всего документа на синий
html.style.backgroundColor = "blue";

// - Пользуясь узлом `document.body` получить узлы `<b>` и `<i>`.
let usel = document.body.firstChild.nextSibling.firstChild;
let uselB = usel.nextSibling.firstChild.nextSibling;
let uselI = usel.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
console.log(uselB);
console.log(uselI);

// - Поменять текст в обоих узлах
uselB.style.color = "red";
uselI.style.color = "red";

// - Задайте тегу `<b>` класс `bold`, а тегу `<i>` класс `cursive`
uselB.className = "bold";
uselI.className = "cursive";

//Получить текстовый узел Линкод находящийся внутри тега <title>, и поменять его на 'Lincode

let title = document.head.firstChild.nextSibling
title.textContent = "Lincode";

// Удалить узел `<b>`**
uselB.remove()



/// Домашка по Promise

// 1. Создайте промис, который возвращает случайное число от 1 до 10. 
// Затем обработайте этот промис, чтобы вывести результат в консоль.

const promise = new Promise((resolve, reject) => {
  let random = Math.floor(Math.random() * 10) + 1
    if(random >= 5) {
      resolve(random);
    } else if (random < 5){
      reject(new Error('Errorrr'));
    }
  })
promise
  .then(msg => console.log(msg))
  .catch(err => console.error(err))

//2. Создайте функцию, которая принимает на вход число и возвращает промис. 
// Если число меньше 10, то промис должен быть выполнен успешно, иначе — с ошибкой. 
// В случае успешного выполнения промиса выведите сообщение «Успех!», 
// в противном случае — «Ошибка!».


function func(sum) {
    return new Promise((resolve, reject) => {
  if (sum < 10) {
    resolve('Успех!')
  } else {
    reject(new Error('Ошибка!'))
  }
})
}

func(7).then(yes => console.log(yes)).catch(err => console.log(err))


// Комплексные задания 
// Задание 1: Создание простого Promise

//1. Создайте новый Promise, который сразу же переходит в состояние "resolved".
//2. Выведите в консоль результат обработки этого Promise с помощью метода then().
const promise3 = Promise.resolve('Успех!!!');
promise3.then(result => console.log(result))

//Задание 2: Использование setTimeout с Promise

// 1. Создайте Promise, который использует функцию `setTimeout` для имитации асинхронной операции.
// 2.Задайте таймер на 2 секунды.
// 3.Выведите в консоль результат обработки этого Promise с помощью метода then().
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => 
    resolve("Сработало быстро!"), ms);
  })
}
wait(2000).then(result => console.log(result))

/// то же самое, но с if and else
function waitIf(ms) {
      return new Promise((resolve) => {
        if(ms < 2000) {
          setTimeout(() => 
            resolve("Сработало быстро!"), ms);
          }else if(ms > 2000){
            setTimeout(() => 
             resolve("Сработало медленно!"), ms);
          }})
        }
waitIf(3000).then(result => console.log(result));



// Задание 3: Использование Promise.all

// 1. Создайте два Promise, которые используют функцию `setTimeout`.
// 2. Задайте таймер на 1 и 3 секунды соответственно.
// 3. Используйте Promise.all, чтобы выполнить оба Promise одновременно.
// 4. Выведите в консоль результаты выполнения обоих Promise.

const promise4 = new Promise((resolve) => {
  setTimeout(() => resolve('Первый промис!'), 1000);
})
const promise42 = new Promise((resolve) => {
  setTimeout(() => resolve('Второй промис!'), 3000);
})

Promise.all([promise4, promise42]).then(result => console.log(result));


// Деструктуризация

// Задание 1: Деструктуризация массива


// 1. Создайте массив `numbers` с элементами `[1, 2, 3]`.
// 2. Используйте деструктуризацию, чтобы создать три переменные `a`, `b` и `c`
//    и присвоить им значения из массива `numbers`.
// 3. Выведите переменные `a`, `b` и `c` в консоль.
const numbers = [1,2,3];
const [a,b,c] = numbers;
console.log(a,b,c);

// Задание 2: Деструктуризация объекта

// 1. Создайте объект `person` со свойствами `name`, `age` и `city`.
// 2. Используйте деструктуризацию, чтобы создать переменные 
// `name`, `age` и `city` и присвоить им значения из объекта `person`.
// 3. Выведите переменные `name`, `age` и `city` в консоль.

// const person = {
//   name: "Mike",
//   age: 20,
//   city: "Moscow"
// };

// const {name,age,city} = person
// console.log(name,age,city);


// Задание 3: Деструктуризация с использованием оставшихся элементов (rest)

// 1. Создайте массив `letters` с элементами `['a', 'b', 'c', 'd', 'e']`.
// 2. Используйте деструктуризацию, чтобы создать переменные
//  `first`, `second` и `rest` и присвоить им значения из массива `letters`.
// 3. Выведите переменные `first`, `second` и `rest` в консоль.

const letters = ['a', 'b', 'c', 'd', 'e'];
const [first,second,...rest] = letters;

console.log(first,second,rest);


// Задание 4: Вложенная деструктуризация

// 1. Создайте объект `student` со свойствами `name`, `age` и `address`, где `address` 
// является объектом с полями `city` и `country`.
// 2. Используйте деструктуризацию, чтобы создать переменные `name`, `age`, `city` и `country`, 
// присвоив им значения из объекта `student`.
// 3. Выведите переменные `name`, `age`, `city` и `country` в консоль.

const student = {
  name: "John",
  age: 34,
  address: {city: "Paris",country: "French"}
}
const {name,age, address: {city,country}} = student
console.log(name,age,city,country);

