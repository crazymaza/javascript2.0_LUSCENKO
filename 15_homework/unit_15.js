let a2_res,
	a8_res = [],
	a9_res = [],
	a10_res = {},
	a11_res = [],
	a12_res = [],
	a15_res = [],
	a16_res = {},
	a18_res = {},
	s20_res,
	s21_res;

// Task 1 ============================================
/* Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.  */

function t1() {
	let a1 = new Set();
	a1.add(13);
	a1.add(16);
	a1.add('hello');
	console.log(a1);
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль.Результат присвойте переменной a2_res. Действия запускаются при вызове функции t2. */
let a2 = new Set();

function t2(elem) {
	a2.add(elem);
	document.querySelector('.i-2').value = '';
	console.log(a2);
}

document.querySelector('.b-2').onclick = function () {
	t2(document.querySelector('.i-2').value);
};

// Task 3 ============================================
/* Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку(alert). */

function t3(elem) {
	if (document.querySelector('.i-3').value.trim() === '') {
		alert('No text in input');
	} else if (a2.has(elem)) {
		a2.delete(elem);
		document.querySelector('.i-3').value = '';
	} else {
		alert('Element not found.');
	}
}

document.querySelector('.b-3').onclick = function () {
	t3(document.querySelector('.i-3').value);
};


// Task 4 ============================================
/*  Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4. 
 */

function t4(elem) {
	return a2.has(elem);
}

document.querySelector('.b-4').onclick = function () {
	let res = t4(document.querySelector('.i-4').value);
	console.log(res);
};


// Task 5 ============================================
/*  Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции.
 Действия должны запускаться при вызове функции t5. */

function t5() {
	return document.querySelector('.out-5').textContent = a2.size;
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/* Есть массив  a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу количество уникальных элементов в массиве a6. Решение должно использовать set.
Действия должны запускаться при вызове функции t6. */

let a6 = [3, 4, 3, 2, 4, 56, 1, 23];

function t6(a6) {
	const set6 = new Set(a6).size;
	return document.querySelector('.out-6').textContent = set6;
}

document.querySelector('.b-6').onclick = function () {
	t6(a6);
};


// Task 7 ============================================
/*  Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и преобразуем ее в массив (arr.split('')). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива и Set. Функция должна возвращать true или false. Запуск - по нажатию кнопки b-7. */

function t7(login, pass) {
	let passLength = pass.split('').length;
	let setLength = new Set(pass).size;
	return passLength === setLength;
}

document.querySelector('.b-7').onclick = function () {
	let login = document.querySelector('.login').value;
	let pass = document.querySelector('.pass').value;
	let res = t7(login, pass);
	console.log(res);
};

// Task 8 ============================================
/* Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8. */
let a8 = new Set();
a8.add(1);
a8.add(2);
a8.add(3);
a8.add(4);

function t8(a8) {
	for (const a8Element of a8) {
		if (a8Element % 2 === 0) {
			a8_res.push(a8Element);
		}
	}
	return document.querySelector('.out-8').textContent = a8_res;
}

document.querySelector('.b-8').onclick = function () {
	t8(a8);
};


// Task 9 ============================================
/*  Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, что порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.*/

let a9 = new Set();
a9.add(1);
a9.add(2);
a9.add(3);
a9.add(4);

function t9(a9) {
	for (const a9Element of a9) {
		a9_res.push(a9Element);
	}
	return document.querySelector('.out-9').textContent = a9_res.reverse();
}

document.querySelector('.b-9').onclick = function () {
	t9(a9);
};

// Task 10 ============================================
/*  Сложная задача!!! Самая сложная задача за урок. Если ее решите - то массивов вы больше не испугаетесь. Задачу Можно пропустить. Создайте массив элементов a10. Посчитайте, сколько раз встречается каждый из элементов в массиве. Результат присвойте массиву a10_res.
Логика решения: создайте на основе массива - набор. Потом запустите перебор набора и внутри цикла перебора запустите еще один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик. После прохода внутреннего цикла добавляете в a20_res запись в виде элемент набора - счетчик.
a10_res = {
    "3" : 5,
    "1" : 1,
}
 */

let a10 = [5, 7, 9, 11, 13, 15, 5, 7, 5, 2, 3, 7, 13];

function t10(a10) {
	const a10Set = new Set(a10);
	for (const a10Element of a10Set) {
		let count = 0;
		for (let i = 0; i < a10.length; i++) {
			if (a10Element === a10[i]) {
				count++;
			}
		}
		a10_res[a10Element] = count;
	}

	console.log(a10_res);
}

document.querySelector('.b-10').onclick = function () {
	t10(a10);
};


// Task 11 ============================================
/*  Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 запускает функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происхдит если такого значения в массиве нет. После каждой операции выводите a11_res на страницу.
 */


function t11(a11) {
	if (a11_res.length === 0) {
		a11_res.push(a11);
	} else {
		let count = 0;
		for (let i = 0; i < a11_res.length; i++) {
			if (a11_res[i] === a11) {
				count++;
			}
		}
		if (count === 0) {
			a11_res.push(a11);
			count = 0;
		}
	}
	document.querySelector('.out-11').textContent = a11_res;
	document.querySelector('.i-11').value = '';
}

document.querySelector('.b-11').onclick = function () {
	t11(document.querySelector('.i-11').value);

};


// Task 12 ============================================!
/*  Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12.
 */

let a12 = new Set();
a12.add(1);
a12.add(3);
a12.add(2);

function t12(a12) {
	for (const a12Re of a12) {
		a12_res.push(a12Re);
	}
	document.querySelector('.out-12').textContent = a12_res;
}

document.querySelector('.b-12').onclick = () => t12(a12);

// Task 13 ============================================!
/*  
    Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр.
    Действия должны запускаться при вызове функции t13.
 */

let set13 = new Set();
set13.add(1);
set13.add(2);
set13.add(3);
let elem13 = document.querySelector('.out-13');

function t13(set13, elem13) {
	for (const set13Elem of set13) {
		elem13.textContent += `${set13Elem}, `;
	}
}

document.querySelector('.b-13').onclick = () => {
	t13(set13, elem13);
};


// Task 14 ============================================
/*  
    Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Третий параметр - разделитель. 
        Действия должны запускаться при вызове функции t14.
        Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов).
 */

let set14 = new Set();
set14.add(1);
set14.add(2);
set14.add(3);
let elem14 = document.querySelector('.out-14');
let sep14 = '-';

function t14(a14, elem, sep) {
	let count = 0;
	for (const a14Element of a14) {
		if (count < a14.size - 1) {
			elem.textContent += ` ${a14Element} ${sep} `;
			count++;
		} else {
			elem.textContent += `${a14Element}`;
		}
	}
}

document.querySelector('.b-14').onclick = () => {
	t14(set14, elem14, sep14);
};

// Task 15 ============================================!
/*  
Дан массив a15. Добавьте вложенные в него массивы  в набор. Изучите результат. Результирующий набор выведите на страницу. Добавление сделайте через цикл. 
    Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.
 */

let a15 = [
	[1, 0],
	[1, 0],
	[2, 0]
];
let a15set = new Set();

function t15(a15) {
	for (let i = 0; i < a15.length; i++) {
		for (let j = 0; j < a15[i].length; j++) {
			a15set.add(a15[i][j]);
		}
	}
	for (const a15setElem of a15set) {
		document.querySelector('.out-15').textContent += `${a15setElem},`;
	}
}

document.querySelector('.b-15').onclick = function () {
	t15(a15);
};


// Task 16 ============================================
/* 
Дан массив a16 = [
    { Ivan: 1 },
    { Ivan: 1 },
    { Ivan: 2 },
    { Serg: 0 }
]. Добавьте вложенные в него массивы  в набор. Изучите результат. Результирующий набор  выведите в консоль. Добавление сделайте через цикл. 
    Действия должны запускаться при вызове функции t15. 
    Результат операции запишите в a16_res.
 */

let a16 = [
	{Ivan: 1},
	{Ivan: 1},
	{Ivan: 2},
	{Serg: 0}
];
let a16set = new Set();

function t16(a16) {
	for (let i = 0; i < a16.length; i++) {
		a16set.add(a16[i]);
	}
	for (const a16setElem of a16set) {
		console.log(a16setElem);
	}
}

document.querySelector('.b-16').onclick = function () {
	t16(a16);
};

// Task 17 ============================================
/*  Дана строка u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат.
    Действия должны запускаться при вызове функции t17.
 */


function t17() {
	let u17 = 'Primer';
	console.log(new Set(u17));
}

document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================
/*  
    Очень сложное! Можно пропустить без последствий!
    Напишите функцию, которая принимает строку и считает сколько раз встречается та либо инная буква.
    Результат в виде ассоциативного массива присваивает в переменуню a18_res.
    Данную функцию можно использовать для анализа текста.
    Действия должны запускаться п ри вызове функции t18.
 */

let a18 = 'Hello',
	a18_1 = [5, 7, 9, 11, 13, 15],
	resultString = '',
	count = 0;

//Задача из JS файла.
function t18(a18) {
	let a18String = a18.split('');
	let string = new Set(a18.split(''));

	for (const string1 of string) {
		let count = 0;
		for (let i = 0; i < a18String.length; i++) {
			if (a18String[i] === string1) {
				count++;
				a18_res[a18String[i]] = count;
			}
		}
		count = 0;
	}
	console.log(a18_res);
}


//Задача из HTML файла.
function t18_1(a18) {
	for (const a18Element of a18) {
		resultString += `${count++} - ${a18Element}\n`;
	}
	console.log(resultString);
}

document.querySelector('.b-18').onclick = function () {
	t18(a18);
	t18_1(a18_1);
};

// Task 19 ============================================!!!
/*  Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора.
    Действия должны запускаться при вызове функции t19.
 */

let a19 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function t19() {
	count = 0;
	for (const a19key of a19) {
		if (count % 2 === 0) {
			document.querySelector('.out-19').textContent += `${a19key} `;
		}
		count++;
	}
}

document.querySelector('.b-19').onclick = () => {
	t19(a19);
};

// Task 20 ============================================!!!
/* Создайте функцию, которая принимает массив и четные по индексу элементы
   добавляет в набор s20_res в нечетные в набор s21_res. Выводите данные наборы в консоль.
 */

function t20(a20) {
	let arr20_res = [];
	let arr21_res = [];
	for (let i = 0; i < a20.length; i++) {
		if (a20[i] % 2 === 0) {
			arr20_res.push(a20[i]);
		} else {
			arr21_res.push(a20[i]);
		}
	}
	console.log(arr20_res);
	console.log(arr21_res);
}

document.querySelector('.b-20').onclick = function () {
	let arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	t20(arr20);
};