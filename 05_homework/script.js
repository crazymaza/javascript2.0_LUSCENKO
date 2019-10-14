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

    btn7.onclick = () => {
        div1.innerHTML = '<input type="text" class="inp5"><button class="btn8">Show value</button>';
        btn8.onclick = () => {
            alert(document.querySelector('.inp5').value);
        };
    };




// task 9 --------------------
    

// task 10 --------------------
    

// task 11 --------------------
    
    
// task 12 --------------------
    
    
// task 13 --------------------
    

// task 14 --------------------
    

// task 15 --------------------
    
    
// task 16 --------------------
    

// task 17 --------------------
   

// task 18 --------------------
  
// task 19 --------------------
   
// task 20 --------------------
   