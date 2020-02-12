const xhttp = new XMLHttpRequest();
const key = 'auth=5ADcB96BA48d3f80';
const address = 'http://getpost.itgid.info/index2.php';
let params = '';

/**
 * Отправляем запрос типа GET.
 * @param param параметры запроса.
 * @param outputClass элемент куда выводится ответ.
 */
function sendGetRq(param, outputClass) {
	xhttp.open('GET', `${address}${param}${key}`, true);
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			document.querySelector(`${outputClass}`).textContent = this.responseText;
		}
	};
}

/**
 * Отправляем запрос типа POST.
 * @param param параметры запроса.
 * @param outputClass элемент куда выводится ответ.
 */
function sendPostRq(param, outputClass) {
	xhttp.open('POST', `${address}`, true);
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhttp.send(`${key}${param}`);
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			document.querySelector(`${outputClass}`).textContent = this.responseText;
		}
	};
}

// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t1() {
	sendGetRq('?action=1&', '.out-1');
}

// ваше событие здесь!!!
document.querySelector('.b-1').addEventListener('click', t1);
// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. 
В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице.
Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат.
Запускаться функция должна по нажатию b-2. */

function t2() {
	params = '?action=2&name=Igor&';
	sendGetRq(params, '.out-2');
}

// ваше событие здесь!!!
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
	params = '?action=3&num1=3&num2=5&';
	sendGetRq(params, '.out-3');
}

// ваше событие здесь!!!
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет случайное число в заданном диапазоне.
Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
	params = '?action=4&num1=2&num2=4&';
	sendGetRq(params, '.out-4');
}

// ваше событие здесь!!!
document.querySelector('.b-4').addEventListener('click', t4);
// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
    В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату.
    Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат.
    Запускаться функция должна по нажатию b-5. */

function t5() {
	sendGetRq('?action=5&', '.out-5');
}

// ваше событие здесь!!!
document.querySelector('.b-5').addEventListener('click', t5);
// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
	params = '?action=6&num1=14&num2=34&';
	sendGetRq(params, '.out-6');
}

// ваше событие здесь!!!
document.querySelector('.b-6').addEventListener('click', t6);

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
 В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение.
  Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

let img = document.createElement('img');
img.style.height = '100px';
img.style.width = '100px';

function t7() {
	xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7', true);
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			img.setAttribute('src', this.responseText);
			document.querySelector('.out-7').appendChild(img);
		}
	};
}

// ваше событие здесь!!!
document.querySelector('.b-7').addEventListener('click', t7);
// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения.
Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
	params = '?action=8&year=1989&';
	sendGetRq(params, '.out-8');
}

// ваше событие здесь!!!
document.querySelector('.b-8').addEventListener('click', t8);

// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1.
Если все сделано верно, сервер возвратит дату или месяц или год.
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат.
Запускаться функция должна по нажатию b-9. */

function t9() {
	params = '?action=9&m=1&d=1&y=1&';
	sendGetRq(params, '.out-9');
}

// ваше событие здесь!!!
document.querySelector('.b-9').addEventListener('click', t9);

// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello.
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    sendPostRq('&action=1','.out-10');
}

document.querySelector('.b-10').addEventListener('click', t10);

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
 В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице.
  Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате).
  Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    params = '&action=2&name=Igor';
    sendPostRq(params,'.out-11');
}

// ваше событие здесь!!!
document.querySelector('.b-11').addEventListener('click', t11);
// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
 В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа.
 Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате).
  Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    params = '&action=3&num1=34&num2=42';
    sendPostRq(params,'.out-12');
}

// ваше событие здесь!!!
document.querySelector('.b-12').addEventListener('click', t12);
// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет случайное число в заданном диапазоне.
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат.
Запускаться функция должна по нажатию b-13.*/

function t13() {
    params = '&action=4&num1=34&num2=42';
    sendPostRq(params,'.out-13');
}

// ваше событие здесь!!!
document.querySelector('.b-13').addEventListener('click', t13);
// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату.
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат.
Запускаться функция должна по нажатию b-14.*/

function t14() {
    sendPostRq('&action=5','.out-14');
}

// ваше событие здесь!!!
document.querySelector('.b-14').addEventListener('click', t14);
// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    params = '&action=6&num1=35&num2=345';
    sendPostRq(params,'.out-15');
}

// ваше событие здесь!!!
document.querySelector('.b-15').addEventListener('click', t15);
// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение.
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат.
Запускаться функция должна по нажатию b-16. */

function t16() {
	xhttp.open('POST', 'http://getpost.itgid.info/index2.php', true);
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhttp.send('auth=5ADcB96BA48d3f80&action=7');
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			img.setAttribute('src', this.responseText);
			document.querySelector('.out-16').appendChild(img);
		}
	};
}

// ваше событие здесь!!!
document.querySelector('.b-16').addEventListener('click', t16);
// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения.
Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    params = '&action=8&year=1989';
    sendPostRq(params,'.out-17');
}

// ваше событие здесь!!!
document.querySelector('.b-17').addEventListener('click', t17);

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1.
 Если все сделано верно, сервер возвратит дату или месяц или год.
  Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат.
  Запускаться функция должна по нажатию b-18. */

function t18() {
    params = '&action=9&m=1&d=1&y=1';
    sendPostRq(params,'.out-18');
}

// ваше событие здесь!!!
document.querySelector('.b-18').addEventListener('click', t18);
