import outsideClick from './outsideclick.js'

export default function initdropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    function handleClick(event) {
        event.preventDefault()
        this.classList.add('active')
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active')
        })
    }

    dropdownMenus.forEach((menu) => {
        // criar dois evento usando Array e fazendo um forEach

        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick)
        })
    })
}
