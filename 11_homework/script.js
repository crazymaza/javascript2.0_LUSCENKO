const div = document.getElementsByTagName('div');
// Task 1.
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в консоль.
const arr1 = ['a', 2, true];
console.log(arr1);

// Task 2.
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в div. Совет. Попробуйте синтаксиc elem.innerHTML = ваш_массив.
const arr2 = ['a', 2, true];
div[1].innerHTML += `${arr2}`;

// Task 3.
// Создайте массив a. Выведите длину массива a.
const a = [2, 'hello', 17, 34, 'privet']
console.log(a.length);

// Task 4.
// Создайте массив a. Выведите нулевой, третий, восьмой элемент массива a в консоль. Сделайте вывод о 8-м элементе.
// const a = [2, 'hello', 17, 34, 'privet']
console.log(a[0], a[3], a[8]);

// Task 5.
// Создайте массив a. Выведите сумму нулевого, второго и третьего элементов массива.
// const a = [2, 'hello', 17, 34, 'privet']
console.log(a[0] + a[2] + a[3]);

// Task 6.
// Создайте массив, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div.
const arr3 = ['Igor', 'Lion', 12, 02];
div[5].innerHTML += `${arr3}`;

// Task 7.
// Создайте массив b. Добавьте в него значения 'hi', 'foo', 'bar'. Вывести массив на страницу в элемент div.
let b = ['one', 1, 2, 'two', 'hi', 'foo', 'bar'];
div[6].innerHTML += `${b}`;

// Task 8.
// Создайте массив b. Добавьте в него третий элемент равный 3.14, 4 элемент равный 17, 6 элемент равный 5. 
// Выведите массив и в консоль и на страницу. Обратите внимание, как выводятся элементы значения которых не заданы. 
// Также выведите значение длины массива.
let b1 = [];
b1[3] = 3.14;
b1[4] = 17;
b1[6] = 5;
console.log(b1);
div[7].innerHTML += `${b1}`;

// Task 9.
// Создайте массив, который содержит 10 значений. Выведите 3-й и 7-й элемент. Выведите весь массив в консоль.
const c = [1, 3, 4, 5, 6, 7, 8, 9, 0, 2];
console.log(c[3]);
console.log(c[7]);
console.log(c);

// Task 10.
// Создайте массив содержащий только 1-й, 5-й и 10 элемент. Выведите его в консоль. Выведите его в div. Выведите длину данного массива.
const d = [];
d[1] = 1;
d[5] = 5;
d[10] = 10;
console.log(d);
div[9].innerHTML += `<br>${d}`;
div[9].innerHTML += `d.length = ${d.length}`;

// Task 11.
// Создайте массив с, напишите функцию которая по клику на кнопке меняет первый и третий элемент местами. Под сменой мест понимается, 
// что данные элементы поменяют значения - первый станет равный третьему, а третий - первому.
const c1 = [77, 88, 99, 66];
console.log(c1);
const btn = document.querySelector('.task-1');
btn.onclick = () => {
    let a = c1[0];
    c1[0] = c1[2];
    c1[2] = a;
    console.log(c1);
};

// Task 12.
// Напишите функцию, которая получает в качестве аргумента массив, и меняет нулевой и 
// последний элемент массива местами. После чего выводит массив в консоль. 
// Длина переданного массива может меняться. Небольшая подсказка - нам не нужно знать длину массива, поскольку мы можем ее посчитать через length.
function func(arr) {
    let a = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = a;
    console.log(arr);
}
let arre = [1, 3, 5, 7, 4];
console.log(func(arre));

// Task 13.
// Используя цикл выведите элемента массива d на страницу. Разделитель - пробел.
const d1 = ['y', 4, 22, 'o'];
for (let i = 0; i < d1.length; i++) {
    div[12].innerHTML += `${d1[i]} `;
}
// Task 14.
// Используя цикл выведите на страницу массив e в обратном порядке. Разделитель - пробел.
const e = [1, 2, 3, 'hello', 66];
for (let i = e.length - 1; i > 0; i--) {
    div[13].innerHTML += `${e[i]} `;
}

// Task 15.
// Используя цикл выведите на страницу элементы массива d, которые больше нуля. Разделитель - пробел.
const d2 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
for (let i = 0; i < d2.length; i++) {
    if (d2[i] > 0) {
        div[14].innerHTML += `${d2[i]} `;
    }
}

// Task 16.
// Выполните перебор массива d из предыдущей задачи. Четные элементы добавьте в массив a1, нечетные в a2. Выведите полученные массивы a1 и a2 на страницу.
let a1 = [];
let a2 = [];
let count1 = 0;
let count2 = 0;

for (let i = 0; i < d2.length; i++) {
    if (d2[i] % 2 === 0) {
        a1[count1++] = d2[i];
    } else {
        a2[count2++] = d2[i];
    }
}
div[15].innerHTML += `${a1}<br>`;
div[15].innerHTML += `${a2}`;


// Task 17.
// Создайте массив e. Используя цикл и переменную счетчик - выведите количество элементов массива равных нулю.
let e1 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let count = 0;
for (let i = 0; i < e1.length; i++) {
    if (e1[i] === 0) {
        count++;
    }
}
console.log(count);

// Task 18.
// Используя предыдущий массив e и цикл - выведите максимальное значение из массива.
let max = 0;
for (let i = 0; i < e1.length - 1; i++) {
    if (max < e1[i]) {
        max = e1[i];
    }
}
console.log(max);

// Task 19.
// Создайте массив f. С помощью цикла найдите индекс элемента с максимальным значением.
let f = [-3, 0, 45, 22, 123, -485, 98, 34];
let max1 = 0;
for (let i = 0; i < f.length - 1; i++) {
    if (max1 < f[i]) {
        max1 = f[i];
    }
}
for (let k = 0; k < f.length; k++) {
    if(f[k] === max1){
        console.log(k);
        break;
    }
}

// Task 20.
// Используйте массив f. Используя цикл, посчитайте сумму элементов массива.
let sum = 0;
for (let i = 0; i < f.length; i++) {
    sum += f[i];
}
console.log(sum);