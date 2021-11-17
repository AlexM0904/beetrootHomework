/* 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
============================================================================================= */

 class Product {
    constructor(name, quantity, status) {
        this.name = name;
        this.quantity = quantity;
        this.status = status ?? false;
    }
}

let listBuy = [
    new Product ('Brad', 1, true),
    new Product ('Potato', 5, false),
    new Product ('Carrot', 1, true),
    new Product ('Meat', 1, false),
    new Product ('Chocolate', 1, true),
    new Product ('Fish', 1, false),
    new Product ('Eggs', 1, false),
];

listBuy.sort((a, b) => a.status - b.status);
//listBuy.reverse()
//console.log(listBuy)

 function showList(listBuy) {
    for (let i = 0; i < listBuy.length; i++){
        if (listBuy[i].status === false){
            console.log(listBuy[i])
        } else if (listBuy[i].status === true){
            console.log(listBuy[i])
        }
    }
}
//console.log(listBuy)
//showList(listBuy);

function addFood() {
    let newProduct = new Product();
    newProduct.name = prompt('Input a product name: ');
    let productExists = false;
    for ( let i = 0; i < listBuy.length; i++ ) {
        if ( listBuy[i].name === newProduct.name ){
            listBuy[i].quantity = listBuy[i].quantity + 1;
            listBuy[i].status = true;
            productExists = true;
        }
    }
    if (!productExists){
        newProduct.quantity = 1;
        console.log('New Product', newProduct);
        listBuy.push(newProduct);
    }
    listBuy.sort((a, b) => a.status - b.status);
    console.log(listBuy)
}
addFood()


/* 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке. */

/* let priceList = [
    {
        name: 'Bread',
        quantity: 1,
        price: 1.50
    },
    {
        name: 'Meat',
        quantity: "1kg",
        price: 7.50
    },
    {
        name: 'Fish',
        quantity: 1,
        price: 10.00
    },
    {
        name: 'Vine',
        quantity: 1,
        price: 2.50
    },
    {
        name: 'Butter',
        quantity: 1,
        price: 1.60
    },
    {
        name: 'Nuts',
        quantity: 1,
        price: 2.50
    },
    {
        name: 'Potato',
        quantity: 1,
        price: 1.30
    },
    {
        name: 'Milk',
        quantity: 1,
        price: 1.20
    }
];

let sum = 0;


   priceList.forEach(function(obj){
    sum += obj.price;
});


console.log('Было куплено продуктов на общую сумму',sum.toFixed(2),'€');
console.log(priceList[4].price); */