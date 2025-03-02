//Output divs
const out1 = document.querySelector('.out-1'),
    out2 = document.querySelector('.out-2'),
    out3 = document.querySelector('.out-3'),
    out4 = document.querySelector('.out-4'),
    out5 = document.querySelector('.out-5'),
    out6 = document.querySelector('.out-6'),
    out7 = document.querySelector('.out-7'),
    out8 = document.querySelector('.out-8'),
    out9 = document.querySelector('.out-9'),
    out10 = document.querySelector('.out-10'),
    out6_1 = document.querySelector('.out-6-1'),
    out7_1 = document.querySelector('.out-7-1'),
    out8_1 = document.querySelector('.out-8-1'),
    out9_1 = document.querySelector('.out-9-1'),
    out10_1 = document.querySelector('.out-10-1'),
    out13 = document.querySelector('.out-13'),
    out14 = document.querySelector('.out-14'),
    out15 = document.querySelector('.out-15'),
    out16 = document.querySelector('.out-16'),
    out17 = document.querySelector('.out-17'),
    out18 = document.querySelector('.out-18'),
    out19 = document.querySelector('.out-19'),
    out20 = document.querySelector('.out-20');

//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            out1.innerHTML += '*';
        }
        out1.innerHTML += '_';
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
    for (let i = 1; i <= 3; i++) {
        out2.innerHTML += `${i}<br>`;
        for (let k = 0; k < 1; k++) {
            out2.innerHTML += '*_*_*_<br>';
        }
    }
}

document.querySelector('.b-2').onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 1; k++) {
            out3.innerHTML += '*_*_*_';
        }
        out3.innerHTML += '<br>';
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл  - числа на нечетных позициях  (от 10 до 0).</p>
let countK = 10,
    countI = 0;

function t4() {
    for (let i = 0; i < 22; i++) {
        for (let k = 0; k < 1; k++) {
            if (i % 2 === 0) {
                out4.innerHTML += `${countI++}_`;
            } else {
                out4.innerHTML += `${countK--}_`;
            }
        }
    }
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2 === 0) {
                out5.innerHTML += '1';
            } else {
                out5.innerHTML += '0';
            }
        }
        out5.innerHTML += '<br>';
    }
}

document.querySelector('.b-5').onclick = t5;

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k === 0 || k === 4) {
                out6.innerHTML += '1';
            } else if (k === 1 || k === 3) {
                out6.innerHTML += '0';
            } else {
                out6.innerHTML += 'x';
            }
        }
        out6.innerHTML += '<br>';
    }
}

document.querySelector('.b-6').onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
    for (let i = 0; i <= 4; i++) {
        for (let k = 0; k < i; k++) {
            out7.innerHTML += '*';
        }
        out7.innerHTML += '<br>';
    }
}

document.querySelector('.b-7').onclick = t7;

//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
    for (let i = 5; i >= 1; i--) {
        for (let k = i; k > 0; k--) {
            out8.innerHTML += '*';
        }
        out8.innerHTML += '<br>';
    }
}

document.querySelector('.b-8').onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            out9.innerHTML += `${k} `;
        }
        out9.innerHTML += '<br>';
    }
}

document.querySelector('.b-9').onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. 
//    Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    let number = 1;
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k <= 9; k++) {
            if (number < 10) {
                out10.innerHTML += `0${number} `;
            } else {
                out10.innerHTML += `${number} `;
            }
            number++;
        }
        out10.innerHTML += '<br>';
    }
}

document.querySelector('.b-10').onclick = t10;

// Task 6.1
// С помощью вложенных циклов и символа * нарисуйте:

//        *****
//      *****
//     *****
function t6_1() {
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            out6_1.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';
        } else if (i === 1) {
            out6_1.innerHTML += '&nbsp;&nbsp;';
        }
        for (let k = 0; k < 5; k++) {
            out6_1.innerHTML += '*';
        }
        out6_1.innerHTML += '<br>';
    }
}

document.querySelector('.b-6-1').onclick = t6_1;

// Task 7.1
// С помощью вложенных циклов и символа * нарисуйте:
// *
// **
// ***
// **
// *
function t7_1() {
    let starCount = 0;
    for (let i = 0; i <= 5; i++) {
        for (let k = 0; k < starCount; k++) {
            out7_1.innerHTML += '*';
        }
        if (i < 3) {
            starCount++;
        } else {
            starCount--;
        }
        out7_1.innerHTML += '<br>';
    }
}

document.querySelector('.b-7-1').onclick = t7_1;

// Task 8.1
// С помощью вложенных циклов и символа * нарисуйте:
// ******
// *    *
// *    *
// *    *
// ******
function t8_1() {
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 6; k++) {
            if (i != 0 && i != 4) {
                if (k != 0 && k != 5) {
                    out8_1.innerHTML += '&nbsp;&nbsp;';
                } else {
                    out8_1.innerHTML += '*';
                }
            } else {
                out8_1.innerHTML += '*';
            }
        }
        out8_1.innerHTML += '<br>';
    }
}

document.querySelector('.b-8-1').onclick = t8_1;

// Task 9.1
// С помощью вложенных циклов и символа который вводит пользователь нарисуйте:
// ******
// *    *
// *    *
// *    *
// ******
function t9_1() {
    const inpValue = document.querySelector('.inp1').value;
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 6; k++) {
            if (i != 0 && i != 4) {
                if (k != 0 && k != 5) {
                    out9_1.innerHTML += '&nbsp;&nbsp;';
                } else {
                    out9_1.innerHTML += inpValue;
                }
            } else {
                out9_1.innerHTML += inpValue;
            }
        }
        out9_1.innerHTML += '<br>';
    }
}

document.querySelector('.b-9-1').onclick = t9_1;

// Task 10.1
// С помощью вложенных циклов вывените таблицу умножения на 6 и 7.
function t10_1() {
    for (let i = 6; i <= 7; i++) {
        for (let k = 1; k <= 10; k++) {
            out10_1.innerHTML += `${i} * ${k} = ${i * k} |`;
        }
        out10_1.innerHTML += '<br>';
    }
}

document.querySelector('.b-10-1').onclick = t10_1;

// Task 13
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
function t13() {
    for (let i = 5; i > 0; i--) {
        for (let k = i; k > 0; k--) {
            out13.innerHTML += `${k} `;
        }
        out13.innerHTML += '<br>';
    }
}

document.querySelector('.b-13').onclick = t13;

// Task 14
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1
function t14() {
    for (let i = 1; i < 6; i++) {
        for (let k = i; k > 0; k--) {
            if (i < 5) {
                for (let t = 5; t > k; t--) {
                    out14.innerHTML += '&nbsp;&nbsp;&nbsp;';
                }
                for (let j = k; j > 0; j--) {
                    out14.innerHTML += `${j} `;
                }
                break;
            }
            out14.innerHTML += `${k} `;
        }
        out14.innerHTML += '<br>';
    }
}

document.querySelector('.b-14').onclick = t14;

// Task 15
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1
function t15() {
    for (let i = 1; i < 6; i++) {
        for (let k = i; k > 0; k--) {
            if (i < 5) {
                for (let t = 5; t > k; t--) {
                    out15.innerHTML += 'X ';
                }
                for (let j = k; j > 0; j--) {
                    out15.innerHTML += `${j} `;
                }
                break;
            }
            out15.innerHTML += `${k} `;
        }
        out15.innerHTML += '<br>';
    }
}

document.querySelector('.b-15').onclick = t15;

// Task 16
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 2 2
// 3 3 3
// 4 4 4 4 
// 5 5 5 5 5
function t16() {
    for (let i = 1; i < 6; i++) {
        for (let k = 0; k < i; k++) {
            out16.innerHTML += `${i} `;
        }
        out16.innerHTML += '<br>';
    }
}

document.querySelector('.b-16').onclick = t16;

// Task 17
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5
// 4 4
// 3 3 3
// 2 2 2 2 
// 1 1 1 1 1
function t17() {
    for (let i = 1; i < 6; i++) {
        for (let k = 0; k < i; k++) {
            out17.innerHTML += `${6 - i} `;
        }
        out17.innerHTML += '<br>';
    }
}

document.querySelector('.b-17').onclick = t17;

// Task 18
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
// 5
// X X 
// 3 3 3
// X X X X 
// 1 1 1 1 1
function t18() {
    for (let i = 1; i < 6; i++) {
        for (let k = 0; k < i; k++) {
            if (i % 2 === 0) {
                out18.innerHTML += `X `;
            } else {
                out18.innerHTML += `${6 - i} `;
            }
        }
        out18.innerHTML += '<br>';
    }
}

document.querySelector('.b-18').onclick = t18;

// Task 19
// С помощью вложенных циклов и символа * нарисуйте:
//   *****
//  *******
// *********
function t19() {
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 10; k++) {
            if ((i === 0 && k === 0) ||
                (i === 0 && k === 1) ||
                (i === 0 && k === 8) ||
                (i === 0 && k === 9) ||
                (i === 1 && k === 0) ||
                (i === 1 && k === 9)) {
                out19.innerHTML += '&nbsp;&nbsp;';
            } else {
                out19.innerHTML += '*';
            }
        }
        out19.innerHTML += '<br>';
    }
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// С помощью вложенных циклов и символа * нарисуйте:
//   *****
//  *******
// *********
function t20() {
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 6; k++) {
            if ((i === 0 && k === 0) ||
                (i === 0 && k === 1) ||
                (i === 0 && k === 4) ||
                (i === 0 && k === 5) ||
                (i === 1 && k === 0) ||
                (i === 1 && k === 5) ||
                (i === 3 && k === 0) ||
                (i === 3 && k === 5) ||
                (i === 4 && k === 0) ||
                (i === 4 && k === 1) ||
                (i === 4 && k === 4) ||
                (i === 4 && k === 5)) {
                out20.innerHTML += '&nbsp;&nbsp;';
            } else {
                out20.innerHTML += '*';
            }
        }
        out20.innerHTML += '<br>';
    }
}

document.querySelector('.b-20').onclick = t20;