let options = {
    threshold: [1]
}; //время, когда сработает анимация (здесь - 1, когда покажется весь элемент, можно 0.5 ставить)
let observer = new IntersectionObserver(onEntry, options); //  создаём обсервер и передаём в него функции
let elements = $('.element-animation'); //создали переменную, которая задаст каласс для всех элементов анимирования, для всех элементов с классом .element-animation будет работать данный скрипт
elements.each((i, el) => {
    observer.observe(el);
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
};

//модальное окно по таймеру
var modal = new bootstrap.Modal(document.getElementById('Modal1'), options);

$(function () {
    setTimeout(function () {
        modal.show();//функция, которая сработает по таймеру
    }, 30 * 1000); //время срабатывания
});

//модальное окно по клику
var modal1 = new bootstrap.Modal(document.getElementById('ModalLabel'), options);

$(document).ready(function(){
    $('#butOrder').click(function(){//элемент, на который кликать мышью
        modal1.show();//функция, которая сработает по клику
    });
});