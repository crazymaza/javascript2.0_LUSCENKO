// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
	document.querySelector('.out-1').textContent = 'touch';
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('touchstart', t1);
// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let count = 0;

function t2() {
	document.querySelector('.out-2').textContent = String(count++);
}

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('touchstart', t2);

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
	let blockNumber = this.classList.contains('div-3_1') ? 1 : 2;
	document.querySelector('.out-3').textContent = blockNumber.toString();
}

// ваше событие здесь!!!
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
	document.querySelector('.out-4').textContent =
		document.querySelector('.div-4').textContent;
}

// ваше событие здесь!!!
document.querySelector('.b-4').addEventListener('click',
	document.querySelector('.div-4').ontouchstart = t4);
// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
	document.querySelector('.div-4').ontouchstart = null;
}

// ваше событие здесь!!!
document.querySelector('.b-5').addEventListener('click', t5);
// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
	document.querySelector('.out-6').textContent = 'touchend';
}

// ваше событие здесь!!!
document.querySelector('.div-4').ontouchend = t6;

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
	document.querySelector('.div-7').style.backgroundColor = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').addEventListener('touchstart', t7);
// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
	document.querySelector('.div-8').style.backgroundColor =
		a8[Math.floor(Math.random() * a8.length - 1)];
}

// ваше событие здесь!!!
document.querySelector('.div-8').addEventListener('touchstart', t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(e) {
	document.querySelector('.out-9').textContent = e.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener('touchstart', t9);

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let w = 75;

function t10() {
	document.querySelector('.div-10').style.width = `${w++}px`;
}

// ваше событие здесь!!!
document.querySelector('.div-10').addEventListener('touchmove', t10);
// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
	document.querySelector('.out-11').textContent =
		`radiusX ${e.changedTouches[0].radiusX}, radiusY ${e.changedTouches[0].radiusY}`;
}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener('touchend', t11);
// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/
//Определяем переменные
const a = [
	{'Skull': '1.png'},
	{'Pumpkin': '2.png'},
	{'Spider': '3.png'},
	{'Poison': '4.png'},
	{'Hot Bone': '5.png'},
	{'Dead Hand': '6.png'},
];
const div12Wrapper = document.querySelector('.div-12-wrapper');
const div12Max = document.querySelector('.div-12-max');
const imgText = document.querySelector('.img-12-text');
let maxImg = document.createElement('img');
let count12 = 1;

function addImages(imgArr) {
	//Добавляем мини картинки на страницу.
	for (const aElement of imgArr) {
		for (const aElementKey in aElement) {
			if (aElement.hasOwnProperty(aElementKey)) {
				let img = document.createElement('img');
				img.setAttribute('src', `img/${aElement[aElementKey]}`);
				img.setAttribute('data-value', aElementKey);
				img.classList.add('img-12-min');
				div12Wrapper.append(img);
				if (img.getAttribute('src').endsWith(aElement.Skull)) {
					img.classList.add('active-img');
					imgText.textContent = aElementKey;
				}
			}
		}
	}

	//Добавляем большую картинку на страницу.
	maxImg.setAttribute('src', `img/${a[0].Skull}`);
	maxImg.classList.add('img-12-max');
	div12Max.append(maxImg);
}

addImages(a);

const imgMin = document.querySelectorAll('.img-12-min');

function t12(e) {
	const target = e.target;
	nextImg(target, a);
	prevImg(target, a);
	changeActive(a);
	clickAndChoseImg(target, a);
}

//При нажатии на кнопку NEXT перелистывается мини-картинка на следующую.
//Меняется большая картинка.
function nextImg(target, imgArr) {
	if (count12 <= imgArr.length && target.className.includes('next')) {
		count12++;
		if (count12 > imgArr.length) {
			count12 = 1;
		}
		maxImg.setAttribute('src', `img/${count12}.png`);
	}
}

//При нажатии на кнопку PREV перелистывается мини-картинка на предыдущую.
//Меняется большая картинка.
function prevImg(target, imgArr) {
	if (count12 <= imgArr.length && target.className.includes('prev')) {
		count12--;
		if (count12 === 0) {
			count12 = imgArr.length;
		}
		maxImg.setAttribute('src', `img/${count12}.png`);
	}
}

//Добавляется класс на активную картинку, с неактивной убирается.
function changeActive(imgArr) {
	for (const aElement of imgArr) {
		for (const aElementKey in aElement) {
			if (aElement.hasOwnProperty(aElementKey)) {
				if (maxImg.getAttribute('src').endsWith(aElement[aElementKey])) {
					for (const imgMinElement of imgMin) {
						if (imgMinElement.getAttribute('src').endsWith(aElement[aElementKey])) {
							imgMinElement.classList.add('active-img');
							imgText.textContent = aElementKey;
						} else {
							imgMinElement.classList.remove('active-img');
						}
					}
				}
			}
		}
	}
}

//Все вышеперечисленные действия только при клике на картинку.
function clickAndChoseImg(target, imgArr) {
	if (target.matches('IMG')) {
		for (const imgMinElement of imgMin) {
			if (imgMinElement.classList.contains('active-img') &&
				imgMinElement !== target) {
				imgMinElement.classList.remove('active-img');
				target.classList.add('active-img');
				// count12 = imgArr[0].indexOf(target.getAttribute('src')
				// 	.replace(/img\//, '')) + 1;
				// maxImg.setAttribute('src', `img/${imgArr[0][count12]}.png`);
				for (const imgArrElement of imgArr) {
					for (const elementKey in imgArrElement) {

					}
				}
			}
		}
	}
}

// ваше событие здесь!!!
document.querySelector('.next').addEventListener('click', t12);
document.querySelector('.prev').addEventListener('click', t12);
document.querySelector('.div-12-wrapper').addEventListener('touchstart', t12);