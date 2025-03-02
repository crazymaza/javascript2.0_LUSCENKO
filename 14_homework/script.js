// Outputs
const out1 = document.querySelector('.out1'),
  out2 = document.querySelector('.out2'),
  out3 = document.querySelector('.out3'),
  out4 = document.querySelector('.out4'),
  out5 = document.querySelector('.out5'),
  out6 = document.querySelector('.out6'),
  out7 = document.querySelector('.out7'),
  out8 = document.querySelector('.out8'),
  out9 = document.querySelector('.out9'),
  out10 = document.querySelector('.out10'),
  out11 = document.querySelector('.out11'),
  out12 = document.querySelector('.out12'),
  out13 = document.querySelector('.out13'),
  out14 = document.querySelector('.out14'),
  out15 = document.querySelector('.out15'),
  out16 = document.querySelector('.out16'),
  out17 = document.querySelector('.out17'),
  out18 = document.querySelector('.out18'),
  out19 = document.querySelector('.out19'),
  out20 = document.querySelector('.out20');

// Task 1.
// Выведите массив a1 на страницу.
a1 = {
  3: 'hello',
  'one': 'hi'
};
for (const key in a1) {
  out1.innerHTML += `${key} : ${a1[key]}<br>`;
}

// Task 2.
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.
a2 = {
  3: 'hello',
  'one': 'hi',
  'testt': 'vodoley',
  'ivan': 'ivanov'
};
for (const key in a2) {
  if (a2[key].length > 4) {
    out2.innerHTML += `${key} : ${a2[key]}<br>`;
  }
}

// Task 3.
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
a3 = {
  3: 'hello',
  'one': 'hi',
  'testt': 'vodoley',
  'ivan': 'ivanov'
};
for (const key in a3) {
  if (key.length > 4) {
    out3.innerHTML += `${key} : ${a3[key]}<br>`;
  }
}

// Task 4.
// Выведите на страницу элементы из масиива a4 у которых значение - число.
a4 = {
  3: 'hello',
  'one': 4,
  'testt': 'vodoley',
  'ivan': 6
};

for (const key in a4) {
  if (+a4[key]) {
    out4.innerHTML += `${key} : ${a4[key]}<br>`;
  }
}

// Task 5.
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.
a5 = {
  a: 7,
  z: 4,
  45: 12,
  f: 6
};
let count = 0;
for (const key in a5) {
  count += a5[key];
}
out5.innerHTML = count;

// Task 6.
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.
const a6 = {
  'name': 'Anna',
  'age': '28',
  'sex': 'F',
  'height': 169,
};
for (const key in a6) {
  out6.innerHTML += `${key} : ${a6[key]}<br>`;
}

// Task 7.
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. 
// При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. 
// Выводите массив на страницу.
const u7key = document.querySelector('.u7-key__input');
const u7value = document.querySelector('.u7-value__input');
const u7btn = document.querySelector('.u7__button');
const a7 = {};

u7btn.onclick = () => {
  out7.innerHTML = '';
  a7[u7key.value] = u7value.value;
  for (const key in a7) {
    out7.innerHTML += `${key} : ${a7[key]}<br>`;
  }
  u7key.value = '';
  u7value.value = '';
};

// Task 8.
// Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.
const u8btn = document.querySelector('.u8__button');
const u8key = document.querySelector('.u8-key__input');

u8btn.onclick = () => {
  out8.innerHTML += 'Before remove element:<br>';
  for (const key in a7) {
    out8.innerHTML += `${key} : ${a7[key]}<br>`;
  }
  out8.innerHTML += 'After remove element:<br>';
  for (const key in a7) {
    if (key == u8key.value) {
      delete a7.key;
      continue;
    }
    out8.innerHTML += `${key} : ${a7[key]}<br>`;
  }
};

// Task 9.
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.
const u9btn = document.querySelector('.u9__button');
const u9value = document.querySelector('.u9-delete-value__input');

u9btn.onclick = () => {
  out9.innerHTML += 'Before remove element:<br>';
  for (const key in a7) {
    out9.innerHTML += `${key} : ${a7[key]}<br>`;
  }
  out9.innerHTML += 'After remove element:<br>';
  for (const key in a7) {
    if (a7[key] == u9value.value) {
      delete a7.key;
      continue;
    }
    out9.innerHTML += `${key} : ${a7[key]}<br>`;
  }
};

// Task 10.
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.
const u10btn = document.querySelector('.u10__button');
const u10key = document.querySelector('.u10-has-key__input');

u10btn.onclick = () => {
  for (const key in a7) {
    if (key == u10key.value) {
      out10.textContent = true;
    } else {
      out10.textContent = false;
    }
  }
};

// Task 11.
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
// a11 = {
// 	"red" : ['Академгородок',...],
// 	"green" : 
// }
a11 = {
  'red': ['Чистые пруды', 'Лубянка', 'Комсомольская', 'Сокольники'],
  'green': ['Театральная', 'Тверская', 'Маяковская', 'Аэропорт']
};
for (const key in a11) {
  out11.innerHTML += `${key} : ${a11[key]}<br>`;
}

// Task 12.
// Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки.
const btn12 = document.querySelector('.btn12');
const select12 = document.querySelector('.u12-branch');

btn12.onclick = () => {
  for (const key in a11) {
    if (key == select12.value) {
      out12.innerHTML = a11[key];
    }
  }
};

// Task 13.
// Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. 
// Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!
const btn13 = document.querySelector('.u13-reverse');
btn13.onclick = () => {
  for (const key in a11) {
    if (key == select12.value) {
      out13.innerHTML = a11[key].reverse();
    }
  }
};

// Task 14.
// Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.
const btn14 = document.querySelector('.btn14');
const select14 = document.querySelector('.u14-find-station');
btn14.onclick = () => {
  for (const key in a11) {
    for (let i = 0; i < a11[key].length; i++) {
      if (a11[key][i] == select14.value) {
        out14.innerHTML = key;
      }
    }
  }
};

// Task 15.
// Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то по нажатию на кнопку
//  будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0).
const btn15 = document.querySelector('.btn15');
const select15_1 = document.querySelector('.u15-first');
const select15_2 = document.querySelector('.u15-second');

btn15.onclick = () => {
  if (select15_1.value == select15_2.value) {
    out15.innerHTML = `Это одна и та же станция.`;
    return;
  }
  for (const key in a11) {
    for (let i = 0; i < a11[key].length; i++) {
      if (a11[key][i] == select15_1.value) {
        for (let k = 0; k < a11[key].length; k++) {
          if (a11[key][k] == select15_2.value) {
            if (Math.abs(i - k) == 1) {
              out15.innerHTML = `Это соседние станции.`;
              return;
            }
            out15.innerHTML = `Между станциями ещё ${Math.abs(i - k) - 1} станции.`;
            return;
          }
        }
      } else {
        out15.innerHTML = 'Stations on different lines.';
      }
    }
  }
};

// Task 16.
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. 
// Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option 
// с названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. 
// Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.
const radio16 = document.querySelectorAll('.u16-radio');
for (let i = 0; i < radio16.length; i++) {
  radio16[i].onchange = () => {
    out16.innerHTML = '';
    for (const key in a11) {
      if (key === radio16[i].value) {
        for (let k = 0; k < a11[key].length; k++) {
          let elem = document.createElement('option');
          elem.textContent = a11[key][k];
          out16.appendChild(elem);
        }
      }
    }
  };
}

// Task 17.
// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.
// a17 = {
// 	"red" : [ ['Академгородок', 0] ,...],
// 	"green" : 
// }
const a17 = {
  'red': [
    ['Саларьево', 0],
    ['Бульвар Рокосовского', 0],
    ['Чистые пруды', 1],
    ['Лубянка', 1],
  ],
  'green': [
    ['Речной вокзал', 0],
    ['Красногвардейская', 0],
    ['Театральная', 1],
    ['Тверская', 1],
  ]
};

for (const key in a17) {
  out17.innerHTML += `${key}<br>`;
  for (let i = 0; i < a17[key].length; i++) {
    out17.innerHTML += `${a17[key][i]} <br>`;
  }
  out17.innerHTML += '<br>';
}

// Task 18.
// Выведите на страницу только станции с переходами из массива a17.
for (const key in a17) {
  for (let i = 0; i < a17[key].length; i++) {
    if (a17[key][i][1] === 1) {
      out18.innerHTML += `${a17[key][i][0]}<br>`;
    }
  }
}

// Task 19.
// Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий название столицы, количество населения, площадь. 
// Выведите его на страницу.
const country = {
  'Kazakhstan': {
    'capital': 'Nursultan',
    'population': 18000000,
    'area': 2725000,
  },
  'Abkhazia': {
    'capital': 'Sukhum',
    'population': 243206,
    'area': 8665,
  },
  'Azerbaijan': {
    'capital': 'Baku',
    'population': 9898000,
    'area': 86600,
  },
  'Armenia': {
    'capital': 'Yerevan',
    'population': 2986100,
    'area': 29743,
  },
  'Bahrain': {
    'capital': 'Manama',
    'population': 1343000,
    'area': 766,
  },
  'Butane': {
    'capital': 'Thimphu',
    'population': 750125,
    'area': 38394,
  },
  'Jordan': {
    'capital': 'Amman',
    'population': 9856034,
    'area': 92300,
  }
};

for (const key in country) {
  out19.innerHTML += `<b>${key}</b><br>`;
  for (const yey in country[key]) {
    out19.innerHTML += `- ${yey}: `;
    out19.innerHTML += `${country[key][yey]}<br>`;
  }
}

// Task 20.
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация подтягивалась на страницу.
const u20select = document.querySelector('.u20-select');

u20select.onchange = () => {
  out20.innerHTML = '';
  for (const key in country) {
    if (u20select.value === key) {
      out20.innerHTML += `<b>${key}</b><br>`;
      for (const yey in country[key]) {
        out20.innerHTML += `- ${yey}: `;
        out20.innerHTML += `${country[key][yey]}<br>`;
      }
      break;
    }
  }
};