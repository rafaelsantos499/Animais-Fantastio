export default function initScroolSuave() {
    const linkInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]'); // buscar todos href que começa com #

    function scrollTosection(event) {
        event.preventDefault();
        // puxar o href em forma de ID
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)

        // suavizar o scrool
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
    linkInternos.forEach((link) => {
        link.addEventListener('click', scrollTosection);
    })
}
