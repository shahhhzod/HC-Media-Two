// самовызывающаяся функция для меню
!function () {

    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    // при клике на кнопку меня переключаем состояние меню
    toggleButton.addEventListener('click', () => navbarLinks.classList.toggle('active'))

}()

// Loader JS HC - Media 

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});