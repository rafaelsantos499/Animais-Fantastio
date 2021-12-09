export default class ScroolSuave {
    constructor(links, options) {
        this.linkInternos = document.querySelectorAll(links); // buscar todos href que começa com #
        if (options === undefined) {
            this.options = { behavior: 'smooth', block: 'start' }
        } else {
            this.options = options
        }

        this.scrollTosection = this.scrollTosection.bind(this)
    }

    scrollTosection(event) {
        event.preventDefault();
        // puxar o href em forma de ID
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        // suavizar o scrool
        section.scrollIntoView(this.options)
    }

    addLinkEvent() {
        this.linkInternos.forEach((link) => {
            link.addEventListener('click', this.scrollTosection);
        })
    }

    init() {
        if (this.linkInternos.length) {
            this.addLinkEvent()
        }
        return this
    }
}
