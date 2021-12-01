export default function initToolTip() {
    const tooltip = document.querySelectorAll('[data-tooltip]')

    const onMouseMove = {
        handleEvent(event) {
            // valores da onde o mouse esta na pagina
            this.toolTipBox.style.top = `${event.pageY + 20}px`
            this.toolTipBox.style.left = `${event.pageX + 20}px`
        },
    }

    const onMouseLeave = {
        handleEvent() {
            this.toolTipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        },
    }

    function criarTooltipBox(element) {
        const toolTipBox = document.createElement('div') // criar uma div
        const text = element.getAttribute('aria-label') // puxar o texto da aria label do HTML
        toolTipBox.classList.add('tootip') // criar uma class dentro da div
        toolTipBox.innerText = text
        document.body.appendChild(toolTipBox) // cria o elemento no final do BODY
        return toolTipBox
    }

    function onMouseOver() {
        // ao passar o mouse
        // retorno da função criarTooltipBox
        const toolTipBox = criarTooltipBox(this)

        onMouseMove.toolTipBox = toolTipBox
        onMouseLeave.toolTipBox = toolTipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave)
        this.addEventListener('mousemove', onMouseMove)
    }

    tooltip.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })
}
