export default class TabNav {
    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu)
        this.tabContent = document.querySelectorAll(content)
        this.activeClass = 'ativo'
    }

    // ativa a tap de acordo com index da mesma

    activeTab(index) {
        this.tabContent.forEach((evento) => {
            evento.classList.remove(this.activeClass)
        })
        const direcao = this.tabContent[index].dataset.anime;
        this.tabContent[index].classList.add(this.activeClass, direcao)
    }
    // adiciona os eventos nas tabs

    addTabNavEvent() {
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => this.activeTab(index))
        })
    }

    init() {
        if (this.tabMenu.length && this.tabContent.length) {
            // ativar o primeiro iten
            this.addTabNavEvent(0)
            this.addTabNavEvent()
        }
        return this
    }
}
