

const hamburger = document.querySelector('.header--navMenu')
const menu = document.querySelector('.header--list')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
})

document.querySelectorAll('.header--list__item--category').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        menu.classList.remove('active')
    })
})