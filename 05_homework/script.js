// task 1 --------------------
    const btn1 = document.querySelector('.btn1');

    btn1.onclick = () => {
        alert("Task #1");
    };

// task 2 --------------------
    const btn2 = document.querySelector('.btn2');

    btn2.onclick = () => {
        alert("Task #2");
    };

// task 3 --------------------
    const p1 = document.querySelector('.p1');

    p1.onclick = () => {
        alert("Task #3");
    };

// task 4 --------------------
    const btn3 = document.querySelector('.btn3');
    const inp1 = document.querySelector('.inp1');
    const sp1 = document.querySelector('.sp1');

    btn3.onclick = () => {
        if(inp1.checked) {
            sp1.innerHTML = "true";
        } else {
            sp1.innerHTML = "false";
        }
    };

// task 5 --------------------
    const btn4 = document.querySelector('.btn4');
    const inp2 = document.querySelector('.inp2');
    const sp2 = document.querySelector('.sp2');

    btn4.onclick = () => {
        if(inp2.checked) {
            sp2.innerHTML = inp2.value;
        } else {
            sp2.innerHTML = "false";
        }
    };

// task 6 --------------------
    const btn5 = document.querySelector('.btn5');
    const inp3 = document.querySelector('.inp3');

    btn5.onclick = () => {
        alert(inp3.value);
    };

// task 7 --------------------
    const btn6 = document.querySelector('.btn6');
    const inp4 = document.querySelector('.inp4');
    const sp3 = document.querySelector('.sp3');

    btn6.onclick = () => {
        if(inp4.value.length < 4) {
            console.warn("Пароль меньше 4 символов.");
        }
        sp3.innerHTML = inp4.value;
    };

// task 8 --------------------
    const btn7 = document.querySelector('.btn7');
    const div1 = document.querySelector('.div1');

    function aaa() {
        alert(document.querySelector('.inp5').value);
    }

    btn7.onclick = () => {
        div1.innerHTML = '<input type="text" class="inp5"><button class="btn8" onclick="aaa()">Show value</button>';
    };

// task 9 --------------------
    const btn8 = document.querySelector('.btn8');
    const inp6 = document.querySelector('.inp6');

    btn8.onclick = () => {
        if(inp6.checked) {
            alert(inp6.value);
        } else {
            alert(false);
        }
    };

// task 10 --------------------
    const btn9 = document.querySelector('.btn9');
    const inp7 = document.querySelector('.inp7');
    const div2 = document.querySelector('.div2');

    btn9.onclick = () => {
        div2.style.backgroundColor = inp7.value;
    };

// task 11 --------------------
    const btn10 = document.querySelector('.btn10');
    const inp8 = document.querySelector('.inp8');
    const inp9 = document.querySelector('.inp9');

    btn10.onclick = () => {
        inp9.value = inp8.value;
    };
    
// task 12 --------------------
    const btn11 = document.querySelector('.btn11');
    const inp10 = document.querySelector('.inp10');
    const sp4 = document.querySelector('.sp4');

    btn11.onclick = () => {
        sp4.innerHTML = inp10.value;
    };
    
// task 13 --------------------
    const btn12 = document.querySelector('.btn12');
    const inp11 = document.querySelector('.inp11');
    const sp5 = document.querySelector('.sp5');
    const sp6 = document.querySelector('.sp6');

    btn12.onclick = () => {
        sp5.innerHTML = inp11.value;
    };

    inp11.oninput = () => {
        sp6.innerHTML = inp11.value;
    };

// task 14 --------------------
    const btn13 = document.querySelector('.btn13');
    const sp7 = document.querySelector('.sp7');
    const ta1 = document.querySelector('#ta1');

    btn13.onclick = () => {
        sp7.innerHTML = ta1.value;
    };

// task 15 --------------------
    const btn14 = document.querySelector('.btn14');
    const sp8 = document.querySelector('.sp8');
    const ta2 = document.querySelector('#ta2');
    const inp12 = document.querySelector('.inp12');

    btn14.onclick = () => {
        ta2.value = inp12.value;
        sp8.innerHTML = ta2.value;
    };
    
// task 16 --------------------
    const btn15 = document.querySelector('.btn15');
    const sp9 = document.querySelector('.sp9');
    const sel1 = document.querySelector('#sel1');
    
    btn15.onclick = () => {
        sp9.innerHTML = sel1.value;
    };

// task 17 --------------------
   

// task 18 --------------------
  
// task 19 --------------------
   
// task 20 --------------------
   