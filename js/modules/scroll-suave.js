export default function initScroolSuave() {

    const linkInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]'); // buscar todos href que começa com #

    function scrollTosection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');  // puxar o href em forma de ID
        const section = document.querySelector(href);

        // suavizar o scrool
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'

        })
    }



    linkInternos.forEach((link) => {
        link.addEventListener('click', scrollTosection);
    })


}
