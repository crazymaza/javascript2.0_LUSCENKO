// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    // Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
    draw(elem) {
        let div = `<div>
                <img class="img-12-min" src="img/${this.image}.png">
                <p class="name">${this.name}</p>
                <p class="price">Стоимость: ${this.amount}</p>
            </div>`;
        document.querySelector(elem).innerHTML += div;
    }
}

let goods = new Goods('Any', 'Any');
console.log(goods);
let goods2 = new Goods('AnyBany', '2000', '1', '123');
goods2.draw('.out-4');