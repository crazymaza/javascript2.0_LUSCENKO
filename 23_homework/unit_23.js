const btn1 = document.querySelector('.b-1'),
	btn2 = document.querySelector('.b-2'),
	btn3 = document.querySelector('.b-3'),
	btn4 = document.querySelector('.b-4'),
	btn5 = document.querySelector('.b-5'),
	btn6 = document.querySelector('.b-6'),
	btn7 = document.querySelector('.b-7'),
	btn8 = document.querySelector('.b-8'),
	btn10 = document.querySelector('.b-10'),
	out3 = document.querySelector('.out-3'),
	out4 = document.querySelector('.out-4')
out10 = document.querySelector('.out-10');

// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
	localStorage.setItem('5', '11');
}

// ваше событие здесь!!!
btn1.onclick = t1;
// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

function t2() {
	const a2 = [7, 6, 5];
	localStorage.setItem('a2', JSON.stringify(a2));
}

// ваше событие здесь!!!
btn2.onclick = t2;

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
	const b = JSON.parse(localStorage.getItem('a2'));
	for (const bElement of b) {
		out3.innerHTML += `a2 ${bElement}<br>`;
	}
}

// ваше событие здесь!!!
btn3.onclick = t3;

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

function t4() {
	const a4 = {hello: 'world', hi: 'mahai'};
	localStorage.setItem('a4', JSON.stringify(a4));
}

// ваше событие здесь!!!
btn4.onclick = t4;
// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a4. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
	const a4Local = JSON.parse(localStorage.getItem('a4'));
	for (const a4LocalKey in a4Local) {
		out4.innerHTML += `${a4LocalKey} ${a4Local[a4LocalKey]}<br>`;
	}
}

// ваше событие здесь!!!
btn5.onclick = t5;
// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
	localStorage.clear();
}

// ваше событие здесь!!!
btn6.onclick = t6;

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let inpArr = [];

function t7() {
	inpArr.push(document.querySelector('.i-7').value);
	localStorage.setItem('a7', JSON.stringify(inpArr));
}

// ваше событие здесь!!!
btn7.onclick = t7;
// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
	inpArr = JSON.parse(localStorage.getItem('a7'));
	inpArr.pop();
	localStorage.setItem('a7', JSON.stringify(inpArr));
}

// ваше событие здесь!!!
btn8.onclick = t8;

// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

function t9(e) {
	localStorage.setItem('bg', (JSON.stringify(e.target.getAttribute('value'))));
	const fieldset = document.querySelector('fieldset');
	fieldset.style.backgroundColor = JSON.parse(localStorage.getItem('bg'));
}

// ваше событие здесь!!!
document.querySelector('fieldset').onchange = t9;
// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
	'apple': 3,
	'grape': 2
}

function t10() {
	localStorage.setItem('card', JSON.stringify(card));
	t12();
}

btn10.onclick = t10;
// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество.
 Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11() {
	const ls = JSON.parse(localStorage.getItem('card'));
	const table = document.createElement('table');

	for (const lsKey in ls) {
		let tr = document.createElement('tr');
		table.appendChild(tr);
		for (let i = 0; i < 2; i++) {
			let td = document.createElement('td');
			if (i % 2 === 0) {
				td.classList.add('nameContainer');
				td.textContent = lsKey;
			} else {
				td.classList.add('countContainer');
				td.innerHTML = `<p class="count">${ls[lsKey]}</p>`;
			}
			tr.appendChild(td);
		}
	}
	out10.appendChild(table);
	t13();
}

// btn10.onclick = t11;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара.
 При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {
	t11();
	const countContainer = document.querySelectorAll('.countContainer');
	for (const countElement of countContainer) {
		let plus = document.createElement('button');
		let minus = document.createElement('button');
		plus.textContent = '+';
		plus.classList.add('plus');
		minus.textContent = '-';
		minus.classList.add('minus');
		countElement.appendChild(plus);
		countElement.appendChild(minus);
	}
	const countArr = document.querySelectorAll('.count'); //Элементы количества товара.
	const nameArr = document.querySelectorAll('.nameContainer'); //Элементы названия товара.

	addProduct(countArr, nameArr);
	removeProduct(countArr, nameArr);
	getTheAmount(countArr);
}

//Функция увеличивает количество продукта на странице, в объекте и в LS.
function addProduct(countArr, nameArr) {
	const plusArr = document.querySelectorAll('.plus');
	plusArr.forEach(plusBtn => plusBtn.addEventListener('click', function () {
		for (let i = 0; i < plusArr.length; i++) {
			if (plusArr[i] === this) {
				countArr[i].textContent = +countArr[i].textContent + 1;
				card[nameArr[i].textContent] += 1;
				localStorage.setItem('card', JSON.stringify(card));
			}
		}
		getTheAmount(countArr);
	}));
}

//Функция уменьшает количество продукта на странице, в объекте и LS.
function removeProduct(countArr, nameArr) {
	const minusArr = document.querySelectorAll('.minus');
	minusArr.forEach(minusBtn => minusBtn.addEventListener('click', function () {
		for (let i = 0; i < minusArr.length; i++) {
			if (minusArr[i] === this) {
				if (+countArr[i].textContent > 0) {
					countArr[i].textContent = +countArr[i].textContent - 1;
					card[nameArr[i].textContent] -= 1;
					localStorage.setItem('card', JSON.stringify(card));
				}
			}
		}
		getTheAmount(countArr);
	}));
}

//Функция счетает общее количество продуктов на странице.
function getTheAmount(countArr) {
	const sum = document.querySelector('.sum');
	let a = 0;
	for (const countArrElement of countArr) {
		a += +countArrElement.textContent;
	}
	sum.textContent = String(a);
}

// ваше событие здесь!!!
// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {
	const tfoot = document.createElement('tfoot');
	let footTr = document.createElement('tr');
	tfoot.appendChild(footTr);
	for (let i = 0; i < 2; i++) {
		let td = document.createElement('td');
		if (i % 2 === 0) {
			td.textContent = 'Sum:';
		} else {
			td.classList.add('sum');
		}
		footTr.appendChild(td);
	}
	document.querySelector('table').appendChild(tfoot);
}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Добавьте функцию t14, которая при загрузке страницы проверяет наличие card
в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t14() {
	localStorage.getItem('card');
}

// ваше событие здесь!!!