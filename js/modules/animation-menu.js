export default function initScrollMenu() {
    const menu = document.querySelector('[data-menu="suave"]')
    const scrollHeight = menu.offsetHeight // valor do Scroll   


    function Scroll() {

        if (window.scrollY >= scrollHeight) {
            menu.classList.add('effect-active')
        } else {
            menu.classList.remove('effect-active')
        }


    }

    window.addEventListener('scroll', Scroll)
}