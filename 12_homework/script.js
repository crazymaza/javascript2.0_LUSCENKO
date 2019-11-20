// Task 1.
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. 
// При нажатии кнопки, функция читает содержимое input и добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1.
const arr1 = [];
const u1 = document.querySelector('.u-1');
const u2push = document.querySelector('.u-2__push');
const out1 = document.querySelector('.out-1');

u2push.onclick = () => {
    if (u1.value.trim() != '') {
        arr1.push(u1.value);
        out1.textContent = arr1;
        u1.value = '';
    }
};

// Task 2.
// Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву 
// arr1 применяется метод pop, после чего массив выводится в div.out-1
const u2pop = document.querySelector('.u-2__pop');
u2pop.onclick = () => {
    arr1.pop();
    out1.textContent = arr1;
};

// Task 3.
// Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift 
// ( читать за метод shift). После применения shift, массив arr1 выподится в div.out-1.
const u3shift = document.querySelector('.u-3__shift');
u3shift.onclick = () => {
    arr1.shift();
    out1.textContent = arr1;
};

// Task 4.
// Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод 
// unshift ( читать за метод unshift). После применения unshift, массив arr1 выподится в div.out-1.
//  Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?
const u4unshift = document.querySelector('.u-4__unshift');
u4unshift.onclick = () => {
    if (u1.value.trim() != '') {
        arr1.unshift(u1.value);
        out1.textContent = arr1;
        u1.value = '';
    }
};

// Task 5.
// Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести 
// индекс элемента, во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 
// применяется метод splice. Результат применения выводите в div.out-5.

let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
const out5 = document.querySelector('.out-5');
const u5 = document.querySelectorAll('.u-5');
const u5btn = document.querySelector('.u-5-btn');

u5btn.onclick = () => {
    if (u5[0].value.trim() != '' && u5[1].value.trim() != '') {
        arr5.splice(u5[0].value, u5[1].value);
        out5.textContent = arr5;
        u5[0].value = '';
        u5[1].value = '';
    }
};

// Task 6.
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
// читает содержимое input в переменную
// вычисляет длину массива
// присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу

const out6 = document.querySelector('.out-6');
const u6 = document.querySelector('.u-6');
const u6btn = document.querySelector('.u-6-btn');
let arr6 = [];

u6btn.onclick = () => {
    if (u6.value.trim() != '') {
        arr6[arr6.length] = u6.value;
        out6.textContent = arr6;
        u6.value = '';
    }
};

// Task 7.
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
// удаляет последний элемент массива
// Выводит массив на страницу
const u7btn = document.querySelector('.u-7-btn');

u7btn.onclick = () => {
    arr6.length = arr6.length - 1;
    out6.textContent = arr6;
};

// Task 8.
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
// Создает новый массив где нулевым элементом выступает первый элемент исходного массива
// Выводит массив на страницу
const u8btn = document.querySelector('.u-8-btn');

u8btn.onclick = () => {
    let arrNew = [];
    arrNew[0] = arr6[0];
    out6.textContent = arrNew;
};

// Task 9.
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
// читает содержимое input в переменную
// создает новый массив где нулевым элементов задает считанную из input строку
// дописывает остальные значения старого массива в новый
// Выводит массив на страницу
const u9btn = document.querySelector('.u-9-btn');

u9btn.onclick = () => {
    if (u6.value.trim() != '') {
        let arrNew = [];
        arrNew[0] = u6.value;
        u6.value = '';
        arrNew.push(arr6);
        out6.textContent = arrNew;
    }
};

// Task 10.
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse).
//  После применения reverse, массив arr10 выподится в div.out-10.
let arr10 = [2, 4, 6, 8, 10, 'hello'];
const out10 = document.querySelector('.out-10');
out10.textContent = arr10.reverse();

// Task 11.
// Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. 
// По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. 
// Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). 
// Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.
let arr11 = [0, 2, 3, 7, 8, 5, 11];
const out11 = document.querySelector('.out-11');
const inp11 = document.querySelector('.u-11__input');
const btn11 = document.querySelector('.u-11__button');

btn11.onclick = () => {
    if (inp11.value.trim() != '') {
        out11.textContent = arr11.indexOf(+inp11.value);
    }
};

// Task 12.
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
// читает содержимое input в переменную
// Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
// Если совпадения нет выводить -1.
const btn12 = document.querySelector('.u-12__button');
btn12.onclick = () => {
    if (inp11.value.trim() != '') {
        for (let i = 0; i < arr11.length; i++) {
            if (arr11[i] === +inp11.value) {
                out11.textContent = i;
                break;
            } else {
                out11.textContent = -1;
            }
        }
    }
};

// Task 13.
// Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:
// Создать новый пустой массив
// Перебирать старый массив с конца (массив создайте сами)
// По очереди по элементу присвоить значения в новый массив.
// Вывести новый массив.
const out13 = document.querySelector('.out-13');
const t13 = (arr) => {
    let newArr = [];
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[count++] = arr[i];
    }
    return newArr;
};
out13.textContent = `${arr11} => ${t13(arr11)}`;

// Task 14.
// Создайте инпут, куда пользователь может ввести число элементов в массиве. 
// Создайте функцию, которая прочитает введенное число и создаст массив такой длины, 
// причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.
const u14 = document.querySelector('.u-14__input');
const btn14 = document.querySelector('.task-14');
const out14 = document.querySelector('.out-14');

btn14.onclick = () => {
    let arr = [];
    for (let i = 0; i < +u14.value; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    out14.textContent = arr;
};

// Task 15.
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который 
// входят только четные элементы массива arr15 (элементы с четным индексом). Выведите на экран.
const out15 = document.querySelector('.out-15');
const arr15 = [1, 3, 5, 6, 8, 45, 7675, 345, 76567];
const f15 = (arr) => {
    let newArr = [];
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            newArr[count++] = arr[index];
        }
    }
    return newArr;
};
out15.textContent = `${arr15} => ${f15(arr15)}`;


// Task 16.
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку 
// примените к массивам метод concat ( читать за метод concat). Результат применения concat выводите на страницу в div.out-16.
let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];
const out16 = document.querySelector('.out-16');
const btn16 = document.querySelector('.u-16__button');

arr16_1.concat(arr16_2);
btn16.onclick = () => {
    out16.textContent = arr16_1.concat(arr16_2);
};


// Task 17.
// Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:
// Перебирает второй массив и его элементы добавляет в первый массив.
// Выводит массив на страницу.

let arr17_1 = [4, 6, 8];
let arr17_2 = [5, 3, 1];
const out17 = document.querySelector('.out-17');

const funcConcat = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        arr1[arr1.length++] = arr2[i];
    }
    return arr1;
};

out17.textContent = funcConcat(arr17_1, arr17_2);

// Task 18.
// Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . 
// По нажатию на кнопку примените к массивам метод includes, который проверяет есть 
// ли в массиве значение введенное в input. ( читать за метод includes). Результат применения includes выводите на страницу в div.out-18.
let arr18 = [3, 5, 7, 11, 12, 13, 14, 'qqq'];
const out18 = document.querySelector('.out-18');
const btn18 = document.querySelector('.u-18__button');
const inp18 = document.querySelector('.u-18__input');

btn18.onclick = () => {
    if (+inp18.value) {
        out18.textContent = arr18.includes(+inp18.value);
    } else {
        out18.textContent = arr18.includes(inp18.value);
    }
};

// Task 19.
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:
// Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
// Если совпадений нет - false.
const btn19 = document.querySelector('.u-19__button');

const funcIncludes = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === inp18.value || arr[i] === +inp18.value) {
            return true;
        }
    }
    return false;
};

btn19.onclick = () => {
    out18.textContent = funcIncludes(arr18);
};

// Task 20.
// Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется метод join ( читать за метод join). 
// Результа выведите на страницу.
const out20 = document.querySelector('.out-20');
const btn20 = document.querySelector('.u-20__button');
let arr20 = [1, 3, 5, 7, 3, 78, 88];

btn20.onclick = () => {
    out20.textContent = arr20.join('+');
};