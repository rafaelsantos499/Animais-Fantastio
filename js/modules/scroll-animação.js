export default function initAnimacaoScroll() {
    const section = document.querySelectorAll('[data-anime="scroll"]')

    // para o scrool começar a adicionar a class 'ativo' com 60% da tela
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
        section.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade

            if (sectionTop < 0) {
                section.classList.add('ativo')
            } else if (section.classList.contains('ativo')) {
                // contains = se conter
                section.classList.remove('ativo')
            }
        })
    }

    if (section.length) {
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}
