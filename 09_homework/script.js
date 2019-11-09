// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {
    let str1 = " ";
    let var1 = 0;
    while (var1 <= 100) {
        str1 += `${var1} `;
        var1++;
    }
    return str1;
}

console.log(func_1());

// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(a, b) {
    let var2 = a;
    let str2 = " ";
    if (a > b) {
        return ("Первое значение больше второго.");
    }
    while (var2 <= b) {
        str2 += `${var2} `;
        var2++;
    }
    return str2;
}

console.log(func_2(5, 7));

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {
    let var3 = a;
    let str3 = " ";
    if (a < b) {
        return ("Первое значение меньше второго.");
    }
    while (var3 >= b) {
        str3 += `${var3} `;
        var3--;
    }
    return str3;
}

console.log(func_3(7, 5));

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {
    let var4 = b;
    let str4 = " ";
    if (a > b) {
        return ("Первое значение больше второго. Поменяйте.");
    }
    while (var4 >= a) {
        str4 += `${var4} `;
        var4 -= c;
    }
    return str4;
}

console.log(func_4(1, 5, 2));

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {
    let var5 = 0;
    let var6 = 0;

    while (var5 <= 20) {
        var6 += var5;
        var5++;
    }
    return var6;
}

console.log(func_5());

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
    if (a < b) {
        let var7 = 0;
        while (a <= b) {
            var7 += a;
            a++;
        }
        return var7;
    }
    return false;
}

console.log(func_6(0, 20));
console.log(func_6(200, 20));

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {
    if (!a) {
        return 'Параметр не может быть равен нулю.';
    }
    if (a < b) {
        let var7 = 1;

        while (a <= b) {
            var7 *= a;
            a++;
        }
        return var7;
    }
    return false;
}

console.log(func_7(1, 20));
console.log(func_7(0, 20));
console.log(func_7(200, 20));

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза.
// Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {
    let var8 = 333;
    let var9 = 0;

    while (var8 <= 1000000) {
        var8 *= 2;
        var9++;
    }
    return var9;
}

console.log(func_8());

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {
    let str5 = '';

    if (a < b) {
        while (a <= b) {
            if (a % 2 === 0) {
                str5 += 0;
            } else {
                str5 += a;
            }
            a++;
        }
    } else if (a > b) {
        while (a >= b) {
            if (a % 2 === 0) {
                str5 += 0;
            } else {
                str5 += a;
            }
            a--;
        }
    }
    return str5;
}

console.log(func_9(1, 5));
console.log(func_9(6, 2));


// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {
    let var10 = 0;
    let str6 = '';

    while (var10 < 6) {
        if (var10 % 2 === 0) {
            str6 += '**\n';
        } else {
            str6 += '*\n';
        }
        var10++;
    }
    return str6;
}

console.log(func_10());

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {
    let str7 = '';
    let var11 = 1;
    let var12 = 10;

    while (var11 <= 10) {
        str7 += `${var12--} ${var11++} `;
    }
    return str7;
}

console.log(func_11());

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {
    let a = 0;
    do {
        console.log('do while work');
    } while (a < 0);

    let b = 0;
    while (b < 0) {
        console.log('while work');
    }
}

func_12();

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {
    let str8 = '';
    let var13 = 100;

    do {
        str8 += `${var13--} `;
        if (var13 % 10 === 0) {
            str8 += '\n';
        }
    } while (var13 >= 0);
    return str8;
}

console.log(func_13());

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, 
// когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.
// Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14() {
    let var14 = 5;
    let var15 = 0;

    do {
        var14 *= var14 * 0.3;
        var15++;
    } while (var14 < 132);
    return var15;
}

console.log(func_14());

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.
// Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, 
// которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).
// Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {
    let var16 = 1.1;
    let var17 = 0;

    do {
        var16 += 0.3;
        var17++;
    } while (var16 <= 568);
    return var17;
}

console.log(func_15());

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 
// и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.
const var18 = document.querySelectorAll('.task-16');

function func_16() {
    let var19 = 0;

    do {
        var19++;
    } while (var19 < var18.length);
    if (var19 % 2 === 0) {
        return var19;
    } else {
        return false;
    }
}

console.log(func_16());

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, 
// во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {
    let var20 = 0;

    do {
        var18[var20++].textContent = var20;
    } while (var20 < var18.length);
}

func_17();

// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите 
// в первый p.task-18 - число равное количеству параграфов p.task - 18,
// во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

const var21 = document.querySelectorAll('.task-18');

function func_18() {
    let var22 = var21.length;
    let var23 = 0;
    do {
        var21[var23++].textContent = var22--;
    } while (var23 < var21.length);
}

func_18();

// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {
    let var24 = -1;
    let var25 = '';
    do {
        var25 += `${var24 += 2}`;
        if (var24 < 19) {
            var25 += '*';
        }
    } while (var24 < 19);
    return var25;
}

console.log(func_19());

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {
    let var26 = 1;
    let var27 = '';
    let var28 = 1;

    do {
        if (var26 === var28) {
            var27 += '1 ';
            var28 += 5;
        } else {
            var27 += '* ';
        }
        if (var26 % 4 === 0) {
            var27 += '\n';
        }
        var26++;
    } while (var26 <= 16);
    return var27;
}
console.log(func_20());