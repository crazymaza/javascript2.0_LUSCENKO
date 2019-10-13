// task 1 --------------------
    let a = 4;
    if(a === 4) {
        console.log("It's true!");
    }

// task 2 --------------------
    let b = 8;
    let c = 10;

    if(b > c) {
        console.log("b is greater than c");
    } else {
        console.log("c is greater than b");
    }

// task 3 --------------------
    let b1 = 8;
    let c1 = 10;

    if(b1 > c1) {
        console.log("b1 is greater than c1");
    } else if (b1 === c1) {
        console.log("b1 equal c1");
    } else {
        console.log("c1 is greater than b1");
    }

// task 4 --------------------
    const inp1 = document.querySelector('.input1');
    const inp2 = document.querySelector('.input2');
    const btn1 = document.querySelector('.button1');
    const res1 = document.querySelector('.result1');

    btn1.onclick = () => {
        if(inp1.value > inp2.value) {
            res1.innerHTML = inp1.value + " is greater than " + inp2.value;
        } else if(inp1.value < inp2.value) {
            res1.innerHTML = inp1.value + " is less then " + inp2.value;
        } else {
            res1.innerHTML = inp1.value + " equal " + inp2.value;
        }
    };

// task 5 --------------------
    const inp3 = document.querySelector('.input3');
    const btn2 = document.querySelector('.button2');
    const res2 = document.querySelector('.result2');

    btn2.onclick = () => {
        if(+inp3.value < 2000) {
            res2.innerHTML = 2019 - +inp3.value;
        } else {
            console.log(2019 - +inp3.value);
        }
    };

// task 6 --------------------
    const inp4 = document.querySelector('.input4');
    const res3 = document.querySelector('.result3');

    inp4.onchange = () => {
        if(+inp4.value >= 1 && +inp4.value <= 32) {
            res3.innerHTML = "Такая квартира есть!";
        } else {
            res3.innerHTML = "Такой квартиры здесь нет.";
        }
    };

// task 7 --------------------
    const inp5 = document.querySelector('.input5');
    const btn3 = document.querySelector('.button3');
    const res4 = document.querySelector('.result4');

    btn3.onclick = () => {
        if(+inp5.value > 0) {
            res4.innerHTML = "Number is greater than zero";
        } else {
            res4.innerHTML = "Number is less than zero";
        }
    };

// task 8 --------------------
    const inp6 = document.querySelector('.input6');
    const btn4 = document.querySelector('.button5');
    const res5 = document.querySelector('.result5');

    btn4.onclick = () => {
        if(+inp6.value % 2 === 0) {
            res5.innerHTML = "Even number";
        } else {
            res5.innerHTML = "Odd number";
        }
    };

// task 9 --------------------
    const inp7 = document.querySelector('.input7');
    const inp8 = document.querySelector('.input8');
    const btn6 = document.querySelector('.button6');
    const res6 = document.querySelector('.result6');

    btn6.onclick = () => {
        if(+inp7.value != "" && +inp8.value != "") {
            res6.innerHTML = Math.pow(+inp7.value, +inp8.value);
        } else {
            res6.innerHTML = "Один из импутов не заполнен.";
        }
    };

// task 10 --------------------
    const inp9 = document.querySelector('.input9');
    const btn7 = document.querySelector('.button7');

    btn7.onclick = () => {
        if(inp9.value === " ") {
            alert("Need to write something.");
        } else {
            alert("Hello, " + inp9.value);
        }
    };

// task 11 --------------------
    const inp10 = document.querySelector('.input10');
    const btn8 = document.querySelector('.button8');
   
    btn8.onclick = () => {
        if(inp10.value.trim() === "") {
            alert("Need to write something.");
        } else {
            alert("Hello, " + inp10.value);
        }
    };
    
// task 12 --------------------
    const inp11 = document.querySelector('.input11');

    inp11.onchange = () => {
        switch(+inp11.value) {
            case 1:
                console.log("One");
                break;
            case 2:
                console.log("Two");
                break;
            case 3:
                console.log("Three");
                break;
        }
    };
    
// task 13 --------------------
    const inp12 = document.querySelector('.input12');
    const res9 = document.querySelector('.result9');

    inp12.onchange = () => {
        if (inp12.value >= 1 && inp12.value <= 5) {
            res9.innerHTML = "Этот дом стоит на улице 1.";
        } else if (inp12.value >= 6 && inp12.value <= 11) {
            res9.innerHTML = "Этот дом стоит на улице 2.";
        } else if (inp12.value >= 11 && inp12.value <= 20) {
            res9.innerHTML = "Этот дом стоит на улице 3.";
        } else {
            res9.innerHTML = "В этом городе нет таких домов.";
        }
    };

// task 14 --------------------
    const inp13 = document.querySelector('.input13');
    const res10 = document.querySelector('.result10');

    inp13.onchange = () => {
        if(inp13.value >= 0 && inp14.value <= 25) {
            res10.innerHTML = "не обнаруживается.";
        } else if(inp13.value >= 26 && inp14.value <= 50) {
            res10.innerHTML = "снижение числа лимфоцитов.";
        } else if(inp13.value >= 51 && inp14.value <= 100) {
            res10.innerHTML = "вялость, рвота.";
        } else if(inp13.value >= 101 && inp14.value <= 150) {
            res10.innerHTML = "смертность 5%.";
        } else if(inp13.value >= 151 && inp14.value <= 350) {
            res10.innerHTML = "смертность 50% за 30 суток.";
        } else if(inp13.value >= 351 && inp14.value <= 600) {
            res10.innerHTML = "90% смертность за 2 недели.";
        } else if(inp13.value > 600) {
            res10.innerHTML = "смертность 100%.";
        } 
    };

// task 15 --------------------
    const x = 1;
    const y = 0;

    console.log(x && y);
    console.log(x || y);
    
// task 16 --------------------
    const inp14 = document.querySelector('.input14');
    const res11 = document.querySelector('.result11');

    inp14.onchange = () => {
        if(inp14.value >= 0 && inp14.value <= 499) {
            res11.innerHTML = "Налог: 2525 тенге";
        } else if(inp14.value >= 500 && inp14.value <= 1199) {
            res11.innerHTML = "Налог: 5050 тенге";
        } else if(inp14.value >= 1200 && inp14.value <= 1599) {
            res11.innerHTML = "Налог: 8275 тенге";
        } else if(inp14.value >= 1600 && inp14.value <= 1899) {
            res11.innerHTML = "Налог: 9675 тенге";
        } else if(inp14.value >= 1900 && inp14.value <= 1999) {
            res11.innerHTML = "Налог: 11075тенге";
        } else if(inp14.value > 2000) {
            res11.innerHTML = "Налог: 15000 тенге";
        } 
    };

// task 17 --------------------
    const inp15 = document.querySelector('.input15');
    const inp16 = document.querySelector('.input16');
    const btn9 = document.querySelector('.button9');
    const res12 = document.querySelector('.result12');

    btn9.onclick = () => {
        if (inp16.value === "euro") {
            res12.innerHTML = inp15.value * 0.91;
        } else if (inp16.value === "rub") {
            res12.innerHTML = inp15.value * 64.20;
        } else if (inp16.value === "uah") {
            res12.innerHTML = inp15.value * 24.63;
        }
    };

// task 18 --------------------
    const inp17 = document.querySelector('.input17');
    const inp18 = document.querySelector('.input18');
    const btn10 = document.querySelector('.button10');
    const res13 = document.querySelector('.result13');

    btn10.onclick = () => {
        switch(inp18.value) {
            case "euro":
                res13.innerHTML = inp17.value * 0.91;
                break;
            case "rub":
                res13.innerHTML = inp17.value * 64.20;
                break;
            case "uah":
                res13.innerHTML = inp17.value * 24.63;
                break;
        }
    };
// task 19 --------------------
    const inp19 = document.querySelector('.input19');
    const inp20 = document.querySelector('.input20');
    const inp21 = document.querySelector('.input21');
    const btn11 = document.querySelector('.button11');
    const res14 = document.querySelector('.result14');

    btn11.onclick = () => {
        if (inp20.value === "+") {
            res14.innerHTML = (+inp19.value) + (+inp21.value);
        } else if (inp20.value === "-") {
            res14.innerHTML = (+inp19.value) - (+inp21.value);
        } else if (inp20.value === "*") {
            res14.innerHTML = (+inp19.value) * (+inp21.value);
        }else if (inp20.value === "/") {
            res14.innerHTML = (+inp19.value) / (+inp21.value);
        }
    };
// task 20 --------------------
    const inp22 = document.querySelector('.input22');
    const inp23 = document.querySelector('.input23');
    const inp24 = document.querySelector('.input24');
    const btn12 = document.querySelector('.button12');
    const res15 = document.querySelector('.result15');

    btn12.onclick = () => {
        switch(inp23.value) {
            case "+":
                res15.innerHTML = (+inp22.value) + (+inp24.value);
                break;
            case "-":
                res15.innerHTML = (+inp22.value) - (+inp24.value);
                break;
            case "*":
                res15.innerHTML = (+inp22.value) * (+inp24.value);
                break;
            case "/":
                res15.innerHTML = (+inp22.value) / (+inp24.value);
                break;
        }
    };