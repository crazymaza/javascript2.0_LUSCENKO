// task 1 --------------------
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// task 2 --------------------

const sp1 = document.querySelector('.sp1');

for (let i = 1; i <= 10; i++) {
    sp1.innerHTML += i + ' ';
}

// task 3 --------------------

const sp2 = document.querySelector('.sp2');

for (let i = 10; i >= 1; i--) {
    sp2.innerHTML += i + ' ';
}

// task 4 --------------------

const sp3 = document.querySelector('.sp3');

for (let i = 0; i <= 10; i += 2) {
    sp3.innerHTML += i + ' ';
}

// task 5 --------------------

const sp4 = document.querySelector('.sp4');

for (let i = 21; i >= 0; i -= 3) {
    sp4.innerHTML += i + ' ';
}

// task 6 --------------------

const sp5 = document.querySelector('.sp5');
const starString = '******';

for (let i = 0; i != starString.length; i++) {
    sp5.innerHTML += starString + '<br>';
}

// task 7 --------------------

const sp6 = document.querySelector('.sp6');
const inp1 = document.querySelector('.inp1');
const btn1 = document.querySelector('.btn1');

btn1.onclick = () => {
    sp6.innerHTML = ' ';
    for (let i = +inp1.value; i >= 0; i--) {
        sp6.innerHTML += i + ' ';
    }
};

// task 8 --------------------

const sp7 = document.querySelector('.sp7');
const inp2 = document.querySelector('.inp2');
const inp3 = document.querySelector('.inp3');
const btn2 = document.querySelector('.btn2');

btn2.onclick = () => {
    sp7.innerHTML = ' ';
    for (let i = +inp2.value; i <= +inp3.value; i++) {
        sp7.innerHTML += i + ' ';
    }
};

// task 9 --------------------

const sp8 = document.querySelector('.sp8');
const inp4 = document.querySelector('.inp4');
const inp5 = document.querySelector('.inp5');
const btn3 = document.querySelector('.btn3');

btn3.onclick = () => {
    sp8.innerHTML = ' ';
    if (+inp4.value > +inp5.value) {
        alert('Error! The first number is greater than the second.');
    } else {
        for (let i = +inp4.value; i <= +inp5.value; i++) {
            sp8.innerHTML += i + ' ';
        }
    }
};

// task 10 --------------------

const sp9 = document.querySelector('.sp9');

for(let i = 1901; i <= 1950; i++) {
    if(i % 2 === 0) {
        sp9.innerHTML += i + ' ';
    }
}

// task 11 --------------------

const sp10 = document.querySelector('.sp10');
const divOne = document.querySelectorAll('.one');

sp10.innerHTML = 'A div with class "one" is ' + divOne.length + ' per page.';

// task 12 --------------------


// task 13 --------------------


// task 14 --------------------


// task 15 --------------------


// task 16 --------------------


// task 17 --------------------


// task 18 --------------------

// task 19 --------------------

// task 20 --------------------