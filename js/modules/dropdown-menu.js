import outsideClick from './outsideclick.js'

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus)
        this.activeClass = 'active'
        // define touchstart e click como argumento padrão de event
        if (events === undefined) this.events = ['touchstart', 'click']
        else this.events = events

        this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
    }

    // Ativa o dropdownMenus e adiciona os eventos
    // a função que observa o clque fora dele
    activeDropdownMenu(event) {
        event.preventDefault()
        const element = event.currentTarget
        element.classList.add(this.activeClass)
        outsideClick(element, this.events, () => {
            element.classList.remove('active')
        })
    }

    // Adiciona os eventos ao dropdownmenu
    addDropDownMenusEvents() {
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu)
            })
        })
    }

    init() {
        if (this.dropdownMenus.length) {
            this.addDropDownMenusEvents()
        }

        return this
    }
}
