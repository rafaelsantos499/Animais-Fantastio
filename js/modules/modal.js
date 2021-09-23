export default function initModal() {

    const btnAbrir = document.querySelector('[data-modal="abrir"]')
    const btnFechar = document.querySelector('[data-modal="fechar"]')
    const containeModal = document.querySelector('[data-modal="container"]')

    if (btnAbrir && btnFechar && containeModal) {


        function toggleModal(event) {
            event.preventDefault();
            containeModal.classList.toggle('ativo');
        }


        function fecharTotal(event) {

            if (event.target === this) { // target  seleciona o elemento clicado
                containeModal.classList.remove('ativo')
            }
        }

        btnAbrir.addEventListener('click', toggleModal);
        btnFechar.addEventListener('click', toggleModal);
        containeModal.addEventListener('click', fecharTotal);

    }



}

