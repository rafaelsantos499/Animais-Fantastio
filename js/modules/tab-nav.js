export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')




    // verificar se realmente tem os elementos no HTML 

    if (tabMenu.length && tabContent.length) {


        // adicionar class 'ativo' na section

        tabContent[0].classList.add('ativo')


        //Adicionar e remover class 'ativo'

        function activeTab(index) {

            tabContent.forEach((evento) => {
                evento.classList.remove('ativo')
            })
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao)
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index)
            })
        })
    }
}
