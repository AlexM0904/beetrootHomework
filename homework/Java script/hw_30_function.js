/*alert(`
                Пользователь ввел:
                    меньше нуля: ${negative} цифр;
                    равные нулю: ${zero} цифр;
                    больше нуля: ${positive} цифр;
                из них было четных чисел ${even} и не четных ${odd} цифр;
                `);*/

//================= Task 1

/*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.*/

/*let n = 0;

function returnNumber(a, b) {

    if (a<b) {
        n = -1;
    }
    else if (a===b) {
        n = 0;
    }
    else {
        n = 1;
    }
    return n;
}

let z  = returnNumber(Number(prompt ('Enter first Number!')),
Number(prompt ('Enter second Number!')));

alert = (`$(n)`);
console.log (n);*/


//================== Task 3 =========================

/*Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.*/

/*function returnNumber(a, b, c) {
    return a + b + c;
}

const z = returnNumber(prompt ('Enter first Number!'), prompt ('Enter second Number!'), prompt ('Enter third Number!'));

alert (z);

//================== Task 4 =========================

/*Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.*/

/*let a = 1;
let b = 1;
let s

function square(a, b) {
    if (a > 1 && b > 1) {
        s = a * b;
    }

    else if ( a>1 ) {
        s = a ** 2;
    }

    else {
        alert ('Площадь фигуры не может быть вычислена');
    }

    return s;
}

s = square (Number(prompt ('Enter first side of figure in cm!')), Number(prompt('second side of figure in cm!')));

alert (`Площадь фигуры равна ${s} см`);
console.log (`Площадь фигуры равна ${s} см`);*/

/*========== Task 5: Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.*/

/*let d;
let p;

function perfectNumber(p) {
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}
    if (p % d == 0 && p == math.sum(d)) {
        alert (`Это число ${p} совершенное!`);
    } else  {
        alert (`Это число ${p} несовершенное!`);
    }

    return (p);
};

p = perfectNumber (Number (prompt ('Enter the Number!')));

console.log (p);*/



let n=parseInt(prompt("Введите натуральное число"));
let sum = n-1;
let temp = n;

for(let i = 2; n>1; ){
    if(!(n%i)){
        sum-=i;
        n=n/i;
    } else i++;
}

if(!sum)
    alert("Число: " +temp +" является совершенным");
else
    alert("Число: " +temp +" не является совершенным");

/* Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.*/

/*let positiveNumberCount = 0, negativeNumberCount = 0, zeroNumberCount = 0, evenNumbers = 0, oddNumbers = 0;
            let N = prompt('Введите часы,минуты, секунды через пробел: ');
            let strings = N.split(' ');*/
