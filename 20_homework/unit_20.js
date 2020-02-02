// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
	document.querySelector('.out-1').textContent = event.key;
	document.querySelector('.i-1').value = '';
	return event.key;
}

// ваше событие здесь!!!
document.querySelector('.i-1').onkeyup = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
	document.querySelector('.out-2').textContent = e.code;
	document.querySelector('.i-2').value = '';
	return e.code;
}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeyup = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
	let isSymbol = false;
	if (e.keyCode > 57 && e.keyCode < 96) {
		isSymbol = true;
	}
	document.querySelector('.out-3').textContent = isSymbol.toString();
}

// ваше событие здесь!!!
document.querySelector('.i-3').onkeyup = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
	document.querySelector('.out-4').textContent =
		document.querySelector('.i-4').value.toLowerCase();
}

// ваше событие здесь!!!
document.querySelector('.i-4').onkeyup = t4;
// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
	document.querySelector('.out-5').textContent =
		document.querySelector('.i-5').value.toUpperCase();
}

// ваше событие здесь!!!
document.querySelector('.i-5').onkeyup = t5;
// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {
	let inputArray = document.querySelector('.i-6').value.split('');
	let filteredArray = inputArray.filter(item => isNaN(+item));
	document.querySelector('.out-6').textContent = filteredArray.join('').toLowerCase();
}

// ваше событие здесь!!!
document.querySelector('.i-6').onkeyup = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
	const a7 = [1, 4, 5, 'd', 'g', 'h', 'db', 'h', 'e', 6];
	document.querySelector('.out-7').textContent =
		a7[Math.floor(Math.random() * a7.length)];
}

// ваше событие здесь!!!
document.querySelector('.i-7').onkeyup = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {
	let inputArray = document.querySelector('.i-8').value.split('');
	for (let i = 0; i < inputArray.length; i++) {
		switch (inputArray[i]) {
			case 'i':
				inputArray[i] = '1';
				break;
			case 'o':
				inputArray[i] = '0';
				break;
			case 'l':
				inputArray[i] = '7';
				break;
		}
		document.querySelector('.out-8').textContent = inputArray.join('');
	}
}

// ваше событие здесь!!!
document.querySelector('.i-8').onkeyup = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let count = 0;

function t9(e) {
	if (e.key === 'ArrowDown') {
		count++;
	}
	document.querySelector('.out-9').textContent = count.toString();
}

// ваше событие здесь!!!
document.querySelector('.i-9').onkeydown = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
const img = document.querySelector('.div-10 img');
const div = document.querySelector('.div-10');
let imgH = 75;
let imgW = 75;

// let width = img.style.width;
function t10(e) {

	if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
		img.style.height = `${imgH}px`;
		div.style.height = `${imgH}px`;
	}
	if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
		img.style.width = `${imgW}px`;
		div.style.width = `${imgW}px`;
	}
	imgH++;
	imgW++;
}

// ваше событие здесь!!!
document.querySelector('.i-10').onkeydown = t10;
// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */
const buttonsArray = document.querySelectorAll('.button');
function t11(e) {
	for (const btn of buttonsArray) {
		if (e.getModifierState('CapsLock') &&
			btn.getAttribute('data-value') === 'CapsLock') {
			btn.classList.add('pressed');
		}
		if (e.code === 'Tab' &&
			btn.getAttribute('data-value') === 'Tab') {
			e.preventDefault();
		}
		if (e.code === btn.getAttribute('data-value') &&
			e.code !== 'CapsLock') {
			btn.classList.add('pressed');
		}
	}
}

function t111(e) {
	const buttonsArray = document.querySelectorAll('.button');
	for (const btn of buttonsArray) {
		if (!e.getModifierState('CapsLock') &&
			btn.getAttribute('data-value') === 'CapsLock') {
			btn.classList.remove('pressed');
		}
		if (e.code === btn.getAttribute('data-value') &&
			e.code !== 'CapsLock') {
			btn.classList.remove('pressed');
			// break;
		}
	}
}

// ваше событие здесь!!!
document.querySelector('.i-11').onkeydown = t11;
document.querySelector('.i-11').onkeyup = t111;

