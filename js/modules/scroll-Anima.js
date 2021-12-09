import debounce from './debounce.js'

export default class ScrollAnima {
    constructor(section) {
        this.section = document.querySelectorAll(section)
        // para o scrool começar a adicionar a class 'ativo' com 60% da tela
        this.windowMetade = window.innerHeight * 0.6;

        this.checkDistance = debounce(this.checkDistance.bind(this), 200)
    }

    // Pega a distância de cada item em relação
    // ao topo do site
    getDistance() {
        this.distance = [...this.section].map((section) => {
            const offset = section.offsetTop
            return {
                element: section,
                offset: Math.floor(offset) - this.windowMetade,
            }
        })
    }

    // verifica a distância em cada pbjeto
    // em relação ao scroll do site
    checkDistance() {
        this.distance.forEach((item) => {
            if (window.pageYOffset > item.offset) {
                item.element.classList.add('ativo')
            } else if (item.element.classList.contains('ativo')) {
                // contains = se conter
                item.element.classList.remove('ativo')
            }
        })
    }

    init() {
        if (this.section.length) {
            this.getDistance()
            this.checkDistance()
            window.addEventListener('scroll', this.checkDistance)
        }
        return this
    }

    // Remove o event de scroll
    stop() {
        window.removeEventListener('scroll', this.checkDistance)
    }
}
