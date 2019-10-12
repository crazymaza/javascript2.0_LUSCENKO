// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

    let a = 7;
    let b = 9;
    console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.

    let c = 7;
    let d = 9;
    document.querySelector('.division').innerHTML = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.

    let e = 3;
    let f = 5;
    document.querySelector('.sum').innerHTML = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.

    let e1 = '3';
    let f1 = 5;
    document.querySelector('.concat').innerHTML = e1 + f1;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.

    let e2 = 3; 
    let f2 = 0;
    document.getElementById('division').innerHTML = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. 
// Выведите на страницу результат сложения двух переменных.

    let e3 = 3;
    let f3 = 'Hello';
    document.getElementById('concat').innerHTML = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. 
// Выведите на страницу результат умножения двух переменных.

    let e4 = 3; 
    let f4 = 'Hello';
    document.getElementById('mult').innerHTML = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, 
// которая выводит в консоль то, что пользователь ввел в input.

    let inp1 = document.querySelector('.textInput1');
    let btn1 = document.querySelector('.button1');
    btn1.onclick = function() {
        console.log(inp1.value);
    };

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, 
// которая выводит на страницу, что пользователь ввел в input. 
// Добавьте очистку input после нажатия кнопки.

    let inp2 = document.querySelector('.textInput2');
    let btn2 = document.querySelector('.button2');
    let res1 = document.querySelector('.result1');
    btn2.onclick = function() {
        res1.innerHTML = inp2.value;
    };

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, 
// которая выводит на страницу число, которое ввел пользователь умноженное на 10.

    let inp3 = document.querySelector('.textInput3');
    let btn3 = document.querySelector('.button3');
    let res2span1 = document.querySelector('.res2span1');
    let res2span2 = document.querySelector('.res2span2');
    btn3.onclick = function() {
        res2span1.innerHTML = inp3.value;
        res2span2.innerHTML = inp3.value * 10;
    };

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция,
//  которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.

    let inp4 = document.querySelector('.textInput4');
    let btn4 = document.querySelector('.button4');
    let res3span1 = document.querySelector('.res3span1');
    let res3span2 = document.querySelector('.res3span2');
    btn4.onclick = function() {
        res3span1.innerHTML = inp4.value;
        res3span2.innerHTML = inp4.value + 10;
    };

// Task 12.
// Создайте два input и кнопку. В первый input пользователь вводит имя,
//  во второе фамилию. При нажатии кнопки выполняется функция, 
//  которая выводит в консоль строку 'Hello имя фамилия', 
//  где имя - имя пользователя и фамилия - введенная фамилия.

    let inp5 = document.querySelector('.textInput5');
    let inp6 = document.querySelector('.textInput6');
    let btn5 = document.querySelector('.button5');
    btn5.onclick = function() {
        console.log('Hello ' + inp5.value + " " + inp6.value);
    };

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. 
// При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.

    let inp7 = document.querySelector('.textInput7');
    let inp8 = document.querySelector('.textInput8');
    let btn6 = document.querySelector('.button6');
    let res4 = document.querySelector('.result4');
    btn6.onclick = function() {
        res4.innerHTML = (+inp7.value) + (+inp8.value);
    };

// Task 14.
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

    let inp9 = document.querySelector('.textInput9');
    inp9.value = 'Hello';

// Task 15.
// Создайте input и получите его в переменную y.
//  В js выполните следующее присвоение: y.style.border = '2px solid red' .
//   Изучите результат операции.

    let y = document.querySelector('.textInput10');
    y.style.border = '2px solid red';

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. 
// Выведите на страницу сумму данных чисел.

    let inp11 = document.querySelector('.textInput11');
    let inp12 = document.querySelector('.textInput12');
    let res5 = document.querySelector('.result5');
    inp11.onchange = function() {
        res5.innerHTML =  (+inp11.value) + (+inp12.value);
    };
    inp12.onchange = function() {
        res5.innerHTML =  (+inp11.value) + (+inp12.value);
    };

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. 
// Создайте функцию, которая запускается по нажатию на кнопку. 
// Получите значение из input в переменную t. 
// А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. 
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . 
// Изучите вывод.

    let inp13 = document.querySelector('.textInput13');
    let btn7 = document.querySelector('.button7');
    btn7.onclick = function() {
        let t = inp13.value;
        console.log(parseInt(t));
    };

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. 
// Создайте функцию, которая запускается по нажатию на кнопку. 
// Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), 
// и результат операции выведите в консоль. Прочитайте за эту операцию. 
// Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

    let inp14 = document.querySelector('.textInput14');
    let btn8 = document.querySelector('.button8');
    btn8.onclick = function() {
        let t = inp14.value;
        console.log(parseFloat(t));
    };

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа.
//  Выведите на страницу сумму данных чисел. Мы это делали! Зачем? 
//  Затем, что нужно понимать как влияет перевод в число с помощью + и
//   parseInt на отрицательные числа!!!

    let inp15 = document.querySelector('.textInput15');
    let inp16 = document.querySelector('.textInput16');
    let res6 = document.querySelector('.result6');
    inp15.onchange = function() {
        res6.innerHTML =  (+inp15.value) + (+inp16.value);
    };
    inp16.onchange = function() {
        res6.innerHTML =  parseInt(inp15.value) + parseInt(inp16.value);
    };

// Task 20.
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий.
//  И кнопку. По нажатию кнопки выведите на страницу предложение 
//  'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' 
//  куда поставьте соответствующие данные из inputов.

    let inp17 = document.querySelector('.textInput17'),
        inp18 = document.querySelector('.textInput18'),
        inp19 = document.querySelector('.textInput19'),
        inp20 = document.querySelector('.textInput20'),
        res7 = document.querySelector('.result7'),
        btn9 = document.querySelector('.button9');
    btn9.onclick = function() {
        res7.innerHTML = 'Уважаемый ' + inp17.value + " "  + inp18.value + 
            ' ваш возраст ' + inp19.value + ', по професси вы ' + inp20.value; 
    };