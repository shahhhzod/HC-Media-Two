// самовызывающаяся функция для меню
!function () {

    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    // при клике на кнопку меня переключаем состояние меню
    toggleButton.addEventListener('click', () => navbarLinks.classList.toggle('active'))

}()