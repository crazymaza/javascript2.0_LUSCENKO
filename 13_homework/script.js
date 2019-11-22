// Output
const out1 = document.querySelector('.out1'),
  out2 = document.querySelector('.out2'),
  out3 = document.querySelector('.out3'),
  out4 = document.querySelector('.out4'),
  out5 = document.querySelector('.out5'),
  out6 = document.querySelector('.out6'),
  out7 = document.querySelector('.out7'),
  out8 = document.querySelector('.out8'),
  out9 = document.querySelector('.out9'),
  out10 = document.querySelector('.out10'),
  out11 = document.querySelector('.out11'),
  out12 = document.querySelector('.out12'),
  out13 = document.querySelector('.out13'),
  out14 = document.querySelector('.out14'),
  out15 = document.querySelector('.out15'),
  out16 = document.querySelector('.out16'),
  out17 = document.querySelector('.out17'),
  out18 = document.querySelector('.out18'),
  out19 = document.querySelector('.out19'),
  out20 = document.querySelector('.out20');

// Task 1.
// Создайте массив a. Выведите его на страницу. 
// Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
const a = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [4, 5, 6],
  ['d', 'e', 'f'],
  [7, 8, 9],
];

for (let i = 0; i < a.length; i++) {
  for (let k = 0; k < a[i].length; k++) {
    out1.innerHTML += `${a[i][k]} `;
  }
  out1.innerHTML += '<br>';
}

// Task 2.
// Выведите на страницу символ 3 из массива a.
out2.textContent = a[0][2];

// Task 3.
// Выведите на страницу символ e из массива a.
out3.textContent = a[3][1];
// Task 4.
// Выведите на страницу содержимое третьего вложенного массива в массиве a.
out4.textContent = a[2]; //если считать с 0;
// Task 5.
// Выведите на страницу только первые элементы вложенных массивов массива a.
for (let i = 0; i < a.length; i++) {
  for (let k = 0; k < 1; k++) {
    out5.innerHTML += `${a[i][k]} `;
  }
}
// Task 6.
// Выведите на страницу только четные вложенные массивы массива a.
for (let i = 0; i < a.length; i++) {
  if (i % 2 === 0) {
    for (let k = 0; k < a[i].length; k++) {
      out6.innerHTML += `${a[i][k]} `;
    }
  }
  out6.innerHTML += '<br>';
}
// Task 7.
// Выведите на страницу только числа из массива a.
for (let i = 0; i < a.length; i++) {
  for (let k = 0; k < a[i].length; k++) {
    if (+a[i][k]) {
      out7.innerHTML += `${a[i][k]} `;
    }
  }
  out7.innerHTML += '<br>';
}

// Task 8.
// Выведите на страницу длины вложенных массивов в массив a.
for (let i = 0; i < a.length; i++) {
  out8.innerHTML += `${a[i].length} `;
}
// Task 9.
// Выведите на страницу элементы массива a в обратном порядке, т.е.
// 9 8 7 f e ...
for (let i = a.length - 1; i >= 0; i--) {
  for (let k = a[i].length - 1; k >= 0; k--) {
    out9.innerHTML += `${a[i][k]} `;
  }
}

// Task 10.
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
// 3 2 1
// c b a
// 6 5 4
for (let i = 0; i < a.length; i++) {
  for (let k = a[i].length - 1; k >= 0; k--) {
    out10.innerHTML += `${a[i][k]} `;
  }
  out10.innerHTML += '<br>';
}

// Task 11.
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.
const b = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

for (let i = 0; i < b.length; i++) {
  for (let k = 0; k < b[i].length; k++) {
    out11.innerHTML += `${b[i][k]} `;
  }
  out11.innerHTML += '<br>';
}
// Task 12.
// Создайте массив шахматную доску. Белые - 0, черные - 1. 
// Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закранные цветом.
const chess = [
  [],
  [],
  [],
];
out12.style.display = 'inline-block';
out12.style.border = '1px solid black';
for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 5; k++) {
    chess[i][k] = div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.display = 'inline-block';
    // div.style.margin= '-2px';
    if (i % 2 == 0 && k % 2 != 0 || i % 2 != 0 && k % 2 == 0) {
      div.style.backgroundColor = 'black';
    }
  }
}

for (let i = 0; i < chess.length; i++) {
  for (let k = 0; k < chess[i].length; k++) {
    out12.appendChild(chess[i][k]);
  }
  out12.innerHTML += '<br>';
}

// Task 13.
// Создайте массив, который подходит под следующие условия:
// b[0][1] == 4;
// b[3][2] == 5
const b1 = [
  [0, 4],
  [],
  [],
  [0, 1, 5],
];

// Task 14.
// Создайте массив, который подходит под следующие условия:
// c[0][1] == 4;
// c[2] == 5
const c = [
  [0, 4],
  [],
  [5],
];


// Task 15.
// Создайте массив, который подходит под следующие условия:
// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]
// Task 16.
// Создайте массив, который подходит под следующие условия:

// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;
// Task 17.
// Создайте массив, который подходит под следующие условия:

// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;
// Task 18.
// Создайте массив, который подходит под следующие условия:

// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5];

// Task 19.
// Выведите на страницу сумму элементов массива a (только чисел).

// Task 20.
// Создайте массив, который эмулирует доску для крестиков - ноликов, 
// напишите все возможные выиграшные комбинации, т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.