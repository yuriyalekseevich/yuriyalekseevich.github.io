"use strict"

var a = prompt("Выберите тип сайта: 1 - сайт-визика, 2 - корпоративный, 3- интернет магазин", "");
while (a == undefined || a == null || a == '' || a > 3 || a < 1) {
    alert("Ввведите число от 1 до 3");
    var a = prompt("Выберите тип сайта: 1 - сайт-визика, 2 - корпоративный, 3- интернет магазин", "");
}

var b = prompt("Выберите дизайн: 1 - шаблонный дизайн, 2 - уникальный дизайн, 3 - WOW дизайн", "");
while (b == undefined || b == null || b == '' || b > 3 || b < 1) {
    alert("Ввведите число от 1 до 3");
    var b = prompt("Выберите дизайн: 1 - шаблонный дизайн, 2 - уникальный дизайн, 3 - WOW дизайн", "");
}

var c = prompt("Нужен адаптивный сайт? 1- Да, 2 - Нет, 3 - Ещё не знаю", "");
while (c == undefined || c == null || c == '' || c > 3 || c < 1) {
    alert("Ввведите число от 1 до 3");
    var c = prompt("Нужен адаптивный сайт? 1- Да, 2 - Нет, 3 - Ещё не знаю", "");
}

var d = prompt("Сроки выполнения работы: 1 - Срочно, 2 - Не срочно", "");
while (d == undefined || d == null || d == '' || d > 2 || d < 1) {
    alert("Ввведите число 1 или 2");
    var d = prompt("Сроки выполнения работы: 1 - Срочно, 2 - Не срочно", "");
}

if (a == 1) {
    var a = 5000;
} else if (a == 2) {
    var a = 10000;
} else if (a == 3) {
    var a = 15000;
}

if (b == 1) {
    var b = 5000;
} else if (b == 2) {
    var b = 10000;
} else if (b == 3) {
    var b = 15000;
}

if (c == 1) {
    var c = 5000;
} else if (c == 2) {
    var c = 10000;
} else if (c == 3) {
    var c = 5000;
}

if (d == 1) {
    var d = 10000;
} else if (d == 2) {
    var d = 1000;
} 

alert("Примерная стоимость Вашего сайта составит -  " + (a + b + c + d) + " рублей.");