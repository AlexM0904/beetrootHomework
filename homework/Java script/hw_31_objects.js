/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;

Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/
let merc =
{
    "autoBrend": "Mercedes",
    "model": "EQA 250 AMG",
    "year of issue": "10.2021",
    "PS": "220PS",
    "gears": "automatic",
    "fuel": "elektro",
    "averageSpeed": "150km/h"
};

console.log(merc);
console.log(merc["year of issue"]);
console.log(Object.keys(merc));

for(let key in merc) {
    console.log(`${key} - ${merc[key]}`)
}



/*function carInformation (list)
    for let key in car {
        return(list)
    }*/



/*console.log(car.autoBrend);
console.log(car);
console.log(car["year of issue"]);
//delete car["year of issue"]; удаление свойств
console.log(car["PS"]);

for (let key in obj) {
    newObj[key] = obj[key];
}
*/

