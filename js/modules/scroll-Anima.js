export default class ScrollAnima {
    constructor(section) {
        this.section = document.querySelectorAll(section)
        this.windowMetade = window.innerHeight * 0.6;

        this.animaScroll = this.animaScroll.bind(this)
    }
    // para o scrool começar a adicionar a class 'ativo' com 60% da tela

    animaScroll() {
        this.section.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - this.windowMetade

            if (sectionTop < 0) {
                section.classList.add('ativo')
            } else if (section.classList.contains('ativo')) {
                // contains = se conter
                section.classList.remove('ativo')
            }
        })
    }

    init() {
        this.animaScroll()
        window.addEventListener('scroll', this.animaScroll)
    }
}
