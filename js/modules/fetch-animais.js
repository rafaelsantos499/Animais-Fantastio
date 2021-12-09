import AnimaNumeros from './anima-numeros.js'

export default function fetchAnimais(url, target) {
    // cria a div contendo informações
    // com total de animais

    function createAnimal(animal) {
        const div = document.createElement('div')
        div.classList.add('numero-animal')

        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
        return div
    }

    // Preecher cada animal no Dom
    const numeroGrid = document.querySelector(target)
    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal)
        numeroGrid.appendChild(divAnimal)
    }
    // Anima os numeros de cada animal
    function animalAnimaisNumero() {
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo')
        animaNumeros.init()
    }

    // Puxa os animais atrvés de um arquivo json
    // e cria cada animal utilizando createAnimal
    async function criarAnimal() {
        try {
            const animaisResponse = await fetch(url)

            const animaisJSON = await animaisResponse.json()

            animaisJSON.forEach((animal) => preencherAnimais(animal))
            animalAnimaisNumero()
        } catch (erro) {
            console.log(erro)
        }
    }

    return criarAnimal()
}
