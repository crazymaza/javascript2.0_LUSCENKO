let
	a1_res = '',
	a2_res = '',
	a7_res = [],
	a8_res = 0,
	a9_res = {},
	a10_res = [],
	a11_res = '',
	a14_res = [],
	a15_res = [],
	a16_res = {},
	a18_res = '',
	a20_res = {}
;
// Task 1 ============================================
/* <p> Переберите массив a1 = [5, 7, 9, 11, 13, 15], c помощью цикла for. Выведите на страницу в формате значение+пробел. Результат присвойте переменной a1_res. Действия запускаются при вызове функции t1. </p>  */

function t1() {
	let a1 = [5, 7, 9, 11, 13, 15];
	for (let i = 0; i < a1.length; i++) {
		a1_res += a1[i] + ' ';
	}
	document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Переберите массив a2 = [5, 7, 9, 11, 13, 15], c помощью цикла for.
Выведите на страницу в виде ключ - значение. Разделитель между ключом и значением - дефис, между строками - br.
Результат присвойте переменной a2_res. Действия запускаются при вызове функции t2. */

function t2() {
	const a2 = [5, 7, 9, 11, 13, 15];
	for (let i = 0; i < a2.length; i++) {
		a2_res += `${i} - ${a2[i]}<br>`;
	}
	document.querySelector('.out-2').innerHTML = a2_res;
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/* При нажатии кнопки, получите div.u-3 с помощью getElementsByClassName,
переберите циклом for, допишите в каждый из div цифру 3 (без пробелов).
Действия запускаются при вызове функции t3. */

function t3() {
	const u3 = document.getElementsByClassName('u-3');
	for (let i = 0; i < u3.length; i++) {
		u3[i].textContent += 3;
	}
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Получите div.u-3 с помощью querySelectorAll, переберите циклом for,
допишите в каждый из div цифру 4 (без пробелов).
Действия запускаются при вызове функции t4.
*/

function t4() {
	const u3q = document.querySelectorAll('.u-3');
	for (let i = 0; i < u3q.length; i++) {
		u3q[i].textContent += 4;
	}
}

document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*  Создайте div с помощью createElement. Получите все div.u-3
с помощью getElementsByClassName в "массив".
Попробуйте добавить в "массив" созданный div с
помощью метода push. В комментарии к задаче опишите результат.

 Действия должны запускаться при вызове функции t5. */

/* Результат
	Uncaught TypeError: u3_5.push is not a function
    at HTMLButtonElement.t5 (unit_16.js:90)
	Т.е. невозможно добавлять элементы на страницу через метод push().
 */
function t5() {
	const u3_5 = document.getElementsByClassName('u-3');
	u3_5.push(document.createElement('div'));
}

document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Создайте div с помощью createElement.
Получите все div.u-3 с помощью querySelectorAll в "массив".
Попробуйте добавить в "массив" созданный div с помощью метода push.
В комментарии к задаче опишите результат. Действия должны запускаться при вызове функции t6. */

/* Результат
	Uncaught TypeError: u3q1.push is not a function
    at HTMLButtonElement.t6 (unit_16.js:104)
	Т.е. невозможно добавлять элементы на страницу через метод push().
 */
function t6() {
	const u3q1 = document.querySelectorAll('.u-3');
	u3q1.push(document.createElement('div'));
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Дан массив a7 = [ [1,2], [3,4], [5,6]],
напишите функцию которая делает из него массив [1,2,3,4,5,6].
 Используем for. Действия должны запускаться при вызове функции t7.
 Результат - выведите на страницу и сохраните в массив a7_res. */

function t7() {
	let a7 = [[1, 2], [3, 4], [5, 6]];
	for (let i = 0; i < a7.length; i++) {
		for (let j = 0; j < a7[i].length; j++) {
			a7_res.push(a7[i][j]);
		}
	}
	document.querySelector('.out-7').textContent = a7_res;
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* Дан массив a8 = [ [1,2,3], [3,4,9], [5,6]], напишите функцию которая выводит
самый большой индекс вложенных массивов. Результат сохраняется в переменную a8_res.
 Используем for. Действия должны запускаться при вызове функции t8. */

let a8 = [[1, 2, 3], [3, 4, 9], [5, 6]];

function t8(a8) {
	for (let i = 0; i < a8.length; i++) {
		for (let j = 0; j < a8[i].length; j++) {
			a8_res = Math.max(a8_res, a8[i][j]);
		}
	}
	document.querySelector('.out-8').textContent = a8_res;
}

document.querySelector('.b-8').onclick = function () {
	t8(a8);
};


// Task 9 ============================================
/*  Дан массив a9 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает
его в ассоциативный массив вида a9_1={4: 4, 6: 6, 9: 9, hello : "hello"}.
Используйте цикл for. Результат сохраняется в переменную a9_res.
Используем for. Действия должны запускаться при вызове функции t9.*/

let a9 = [4, 6, 9, "hello"];

function t9(a9) {
	for (let i = 0; i < a9.length; i++) {
		a9_res[a9[i]] = a9[i];
	}
	for (const a9Key in a9_res) {
		if (a9_res.hasOwnProperty(a9Key)) {
			document.querySelector('.out-9').textContent += `${a9Key}:${a9_res[a9Key]} `;
		}
	}
}

document.querySelector('.b-9').onclick = function () {
	t9(a9);
};


// Task 10 ============================================
/*  Переберите массив a10 = [5, 7, 9, 11, 13, 15], c помощью цикла for in.
 Выведите на страницу. Результат сохраняется в переменную a10_res.
 Действия должны запускаться при вызове функции t10.

 */

let a10 = [5, 7, 9, 11, 13, 15];

function t10(a10) {
	for (const a10Key in a10) {
		if (a10.hasOwnProperty(a10Key)) {
			a10_res.push(a10[a10Key]);
		}
	}
	document.querySelector('.out-10').textContent = a10_res;
}

document.querySelector('.b-10').onclick = function () {
	t10(a10);
};


// Task 11 ============================================
/*  Переберите массив a11 = [5, 7, 9, 11, 13, 15], c помощью цикла for in.
 Выведите на страницу в виде ключ - значение.
 Разделение между ключем и значением  - дефис (без пробелов) между строками - <br>.
  Результат (строка) сохраняется в переменную a11_res. Действия должны запускаться при вызове функции t11.
 */

let a11 = [5, 7, 9, 11, 13, 15];

function t11(a11) {
	for (const a11Key in a11) {
		if (a11.hasOwnProperty(a11Key)) {
			a11_res += `${a11Key} - ${a11[a11Key]}<br>`;
		}
	}
	document.querySelector('.out-11').innerHTML = a11_res;
}

document.querySelector('.b-11').onclick = function () {
	t11(a11);
};


// Task 12 ============================================!
/*  Напишите функцию, которая выполняет: при нажатии кнопки div.u-12
с помощью getElementsByClassName, переберите циклом for in, допишите в
 каждый из div число 12 (без пробелов). Если это невозможно - напишите
 в комментарии. Действия должны запускаться при вызове функции t12.
 */


function t12() {
	const a12 = document.getElementsByClassName('u-12');
	for (const a12Key in a12) {
		if (a12.hasOwnProperty(a12Key)) {
			a12[a12Key].textContent += 12;
		}
	}
}


document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================!
/*  Напишите функцию, которая выполняет: при нажатии кнопки, получите div.u-13
с помощью querySelectorAll, переберите циклом for in, допишите в каждый
из div число 13 (без пробелов). Если это невозможно - напишите в комментарии.
 Действия должны запускаться при вызове функции t13
 */

function t13() {
	const a13 = document.querySelectorAll('.u-13');
	for (const a13Key in a13) {
		if (a13.hasOwnProperty(a13Key)) {
			a13[a13Key].textContent += 13;
		}
	}
}

document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================
/*  Дан массив a14 = [[1,2], [3,4], [5,6]], напишите функцию которая
 делает из него массив [1,2,3,4,5,6]. Используем for in.
    Действия должны запускаться при вызове функции t14.
    Результат операции запишите в a14_res.
 */

let a14 = [[1, 2], [3, 4], [5, 6]];

function t14(a14) {
	for (const a14Key in a14) {
		if (a14.hasOwnProperty(a14Key)) {
			for (const a14KeyKey in a14[a14Key]) {
				if (a14[a14Key].hasOwnProperty(a14KeyKey)) {
					a14_res.push(a14[a14Key][a14KeyKey]);
				}
			}
		}
	}
	console.log(a14_res);
}

document.querySelector('.b-14').onclick = function () {
	t14(a14);
};


// Task 15 ============================================!
/*  Дан массив a15 = [ [1,2,3], [3,4,9], [5,6]], напишите функцию которая
выводит самый большой индекс вложенных массивов. Используем for in.
    Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.
 */

let a15 = [[1, 2, 3], [3, 4, 9], [5, 6]];

function t15(a15) {
	for (const a15Key in a15) {
		let max = 0;
		if (a15.hasOwnProperty(a15Key)) {
			for (const a15ElementKey in a15[a15Key]) {
				if (a15[a15Key].hasOwnProperty(a15ElementKey)) {
					max = Math.max(max, a15[a15Key][a15ElementKey]);
				}
			}
		}
		a15_res.push(max);
	}
	console.log(a15_res);
}

document.querySelector('.b-15').onclick = function () {
	t15(a15);
};


// Task 16 ============================================
/*  Дан массив a16 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает
его в ассоциативный массив вида a16_res={4: 4, 6: 6, 9: 9, hello : "hello"}.
Используйте цикл for in.
    Действия должны запускаться при вызове функции t16. Результат операции запишите в a16_res.
 */

let a16 = [4, 6, 9, "hello"];

function t16(a16) {
	for (const a16Key in a16) {
		if (a16.hasOwnProperty(a16Key)) {
			a16_res[a16[a16Key]] = a16[a16Key];
		}
	}
	console.log(a16_res);
}

document.querySelector('.b-16').onclick = function () {
	t16(a16);
};

// Task 17 ============================================
/*  Переберите массив a17 = [5, 7, 9, 11, 13, 15], c помощью цикла for of.
 Выведите на страницу в формате елемент+пробел.
    Действия должны запускаться при вызове функции t17.
 */

let a17 = [5, 7, 9, 11, 13, 15];

function t17(a17) {
	for (const a17Element of a17) {
		document.querySelector('.out-17').textContent += `${a17Element} `;
	}
}

document.querySelector('.b-17').onclick = function () {
	t17(a17);
};

// Task 18 ============================================
/*  Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of.
    Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов).
    В конце строки - br. Результирующую строку присвойте a18_res;
    Действия должны запускаться при вызове функции t18.
 */

let a18 = [5, 7, 9, 11, 13, 15];

function t18(a18) {
	for (const a18Element of a18.entries()) {
		a18_res += `${a18Element[0]} - ${a18Element[1]}<br>`;
	}
	document.querySelector('.out-18').innerHTML += a18_res;
}

document.querySelector('.b-18').onclick = function () {
	t18(a18);
};

// Task 19 ============================================!!!
/*  Напишите функцию, которая выполняет: при нажатии кнопки div.u-19 с помощью
getElementsByClassName, переберите циклом for of, допишите в каждый из
 div цифры 19 (без пробелов). Если это невозможно - напишите в комментарии.
    Действия должны запускаться при вызове функции t19.
 */


function t19() {
	const u19 = document.getElementsByClassName('u-19');
	for (const u19Element of u19) {
		u19Element.textContent += 19;
	}
}

document.querySelector('.b-19').onclick = t19;

// Task 20 ============================================!!!
/* Дан массив a20 = [4, 6, 9, "hello"].
Напишите функцию, которая преобразовывает его в ассоциативный
массив вида a20_res ={4: 4, 6: 6, 9: 9, hello : "hello"}.
Используйте цикл for of.
Действия должны запускаться при вызове функции t20.
 */

let a20 = [4, 6, 9, "hello"];

function t20(a20) {
	for (const a20Element of a20) {
		a20_res[a20Element] = a20Element;
	}
	console.log(a20_res);
}

document.querySelector('.b-20').onclick = function () {
	t20(a20);
};
