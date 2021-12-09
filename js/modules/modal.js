export default class Modal {
    constructor(btnAbrir, btnFechar, containeModal) {
        this.btnAbrir = document.querySelector(btnAbrir)
        this.btnFechar = document.querySelector(btnFechar)
        this.containeModal = document.querySelector(containeModal)

        // bind this ao callback para
        // fazer refêrencia ao objeto
        // da classe

        this.eventToggleModal = this.eventToggleModal.bind(this)
        this.fecharTotal = this.fecharTotal.bind(this)
    }

    // abre e fecha modal

    toggleModal() {
        this.containeModal.classList.toggle('ativo');
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal()
    }

    // fecha o modal ao clicar fora
    fecharTotal(event) {
        if (event.target === this.containeModal) { // target  seleciona o elemento clicado
            this.toggleModal()
        }
    }

    // adiciona os eventos aos elementos do modal

    addModalEvent() {
        this.btnAbrir.addEventListener('click', this.eventToggleModal);
        this.btnFechar.addEventListener('click', this.eventToggleModal);
        this.containeModal.addEventListener('click', this.fecharTotal);
    }

    init() {
        if (this.btnAbrir && this.btnFechar && this.containeModal) {
            this.addModalEvent()
        }
        return this
    }
}
