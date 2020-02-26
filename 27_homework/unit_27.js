const out1 = document.querySelector('.out-1'),
    out2 = document.querySelector('.out-2'),
    out3 = document.querySelector('.out-3'),
    out4 = document.querySelector('.out-4'),
    out5 = document.querySelector('.out-5'),
    out6 = document.querySelector('.out-6'),
    out7 = document.querySelector('.out-7'),
    out8 = document.querySelector('.out-8'),
    btn1 = document.querySelector('.b-1'),
    btn2 = document.querySelector('.b-2'),
    btn3 = document.querySelector('.b-3'),
    btn4 = document.querySelector('.b-4'),
    btn5 = document.querySelector('.b-5'),
    btn6 = document.querySelector('.b-6'),
    btn7 = document.querySelector('.b-7'),
    btn8 = document.querySelector('.b-8');

let sendGetRq = (params) => {
    return new Promise(resolve => {
        fetch(`http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=${params}`)
            .then(data => resolve(data.text()));
    });
};

let sendPostRq = (params) => {
    return new Promise(resolve => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `auth=5ADcB96BA48d3f80&action=${params}`
        })
        .then(data => resolve(data.text()));
    });
};

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let first = sendGetRq('1');
    let second = sendGetRq('2&name=Igor');

    Promise.all([first, second]).then(value => {
        out1.textContent = `${value[0]}! ${value[1]}`;
    });
}

// ваше событие здесь!!!
btn1.addEventListener('click', t1);

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    let first = sendGetRq('3&num1=11&num2=12');
    let second = sendGetRq('4&num1=23&num2=13');

    Promise.all([first, second]).then(value => {
        out2.textContent = `${value[0]} & ${value[1]}`;
    });
}

// ваше событие здесь!!!
btn2.addEventListener('click', t2);

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let first = sendGetRq('5');
    let second = sendGetRq('6&num1=23&num2=13');

    Promise.all([first, second]).then(value => {
        out3.textContent = `${value[0]} & ${value[1]}`;
    });
}

// ваше событие здесь!!!
btn3.addEventListener('click', t3);

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let first = sendGetRq('7');
    let second = sendGetRq('8&year=1989');

    Promise.all([first, second]).then(value => {
        out4.textContent = `${value[0]} & ${value[1]}`;
    });
}

// ваше событие здесь!!!
btn4.addEventListener('click', t4);

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let first = sendPostRq('1');
    let second = sendPostRq('2&name=Igor');

    Promise.all([first, second]).then(value => {
        out5.textContent = `${value[0]} & ${value[1]}`;
    });
}

// ваше событие здесь!!!
btn5.addEventListener('click', t5);
// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let first = sendPostRq('3&num1=323&num2=234');
    let second = sendPostRq('4&num1=322&num2=654');

    Promise.all([first, second]).then(value => {
        out6.textContent = `${value[0]} & ${value[1]}`;
    });
}

// ваше событие здесь!!!
btn6.addEventListener('click', t6);

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let first = sendPostRq('5');
    let second = sendPostRq('6&num1=234&num2=34');

    Promise.all([first, second]).then(value => {
        out7.textContent = `${value[0]} & ${value[1]}`;
    });
}

// ваше событие здесь!!!
btn7.addEventListener('click', t7);

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let first = sendPostRq('7');
    let second = sendPostRq('8&year=1989');

    Promise.all([first, second]).then(value => {
        out8.textContent = `${value[0]} & ${value[1]}`;
    });
}

// ваше событие здесь!!!
btn8.addEventListener('click', t8);