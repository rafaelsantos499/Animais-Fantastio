export default class ToolTip {
    constructor(tooltips) {
        this.tooltip = document.querySelectorAll(tooltips)

        //bind do objeto da classes aos callbacks

        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
    }

    // move a tooltip com base em seus estilos
    // de aordo com a posição do mouseleave
    onMouseMove(event) {
        // valores da onde o mouse esta na pagina
        this.toolTipBox.style.top = `${event.pageY + 20}px`

        if (event.pageX + 240 > window.innerWidth) {

            this.toolTipBox.style.left = `${event.pageX - 190}px`

        } else {
            this.toolTipBox.style.left = `${event.pageX + 20}px`
        }
    }

    //remove a toolTip e os esventos de mouseover e mouseleave

    onMouseLeave({ currentTarget }) {
        this.toolTipBox.remove()
        currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
        currentTarget.removeEventListener('mousemove', this.onMouseMove)
    }

    // cria a tooltop box e coloca no body
    criarTooltipBox(element) {
        const toolTipBox = document.createElement('div') // criar uma div
        const text = element.getAttribute('aria-label') // puxar o texto da aria label do HTML
        toolTipBox.classList.add('tootip') // criar uma class dentro da div
        toolTipBox.innerText = text
        document.body.appendChild(toolTipBox) // cria o elemento no final do BODY
        this.toolTipBox = toolTipBox
    }

    // cria a tooltio e adiciona os eventos 
    // de mouseove e maouse leave  ao target

    onMouseOver({ currentTarget }) {
        // cria a tolltipbox e coloca em uma propriedade

        this.criarTooltipBox(event.currentTarget)

        currentTarget.addEventListener('mouseleave', this.onMouseLeave)
        currentTarget.addEventListener('mousemove', this.onMouseMove)
    }

    // adiciona os eventos de mouseover a cada tooltip
    addToolTipsEvent() {
        this.tooltip.forEach((item) => {
            item.addEventListener('mouseover', this.onMouseOver)
        })
    }

    init() {

        if (this.tooltip.length) {
            this.addToolTipsEvent()
        }
        return this
    }
}
