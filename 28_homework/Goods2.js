class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }

    draw(elem) {
        let div = this.sale === true ? `<div>
                <img class="img-12-min" src="img/${this.image}.png">
                <p class="name">${this.name}</p>
                <p class="sale">Распродажа</p>
                <p class="price">Стоимость: ${this.amount}</p>
            </div>` :
            `<div>
                <img class="img-12-min" src="img/${this.image}.png">
                <p class="name">${this.name}</p>
                <p class="price">Стоимость: ${this.amount}</p>
            </div>`;

        document.querySelector(elem).innerHTML += div;
    }
}

let goods3 = new Goods2('Sunny', '123', '2', '23423', true);
goods3.draw('.out-6');