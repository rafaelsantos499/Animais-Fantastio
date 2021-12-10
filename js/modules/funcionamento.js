export default class Funcionamento {
    constructor(funcionamento, activeClass) {
        this.funcionamento = document.querySelector(funcionamento)
        this.activeClass = activeClass
    }

    dadosFuncionamentos() {
        // puxar o que esta dentro do dataset / split trasformando ne um array depois da vírgula
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
    }

    dadosAgora() {
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay(); // puxar o dia
        this.horarioAgora = this.dataAgora.getHours();
    }

    estaAberto() {
        const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1
        const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
            && this.horarioAgora < this.horarioSemana[1])

        return semanaAberto && horarioAberto
    }

    ativaAberto() {
        if (this.estaAberto()) this.funcionamento.classList.add(this.activeClass)
    }

    init() {
        if (this.funcionamento) {
            this.dadosFuncionamentos()
            this.dadosAgora()
            this.ativaAberto()
        }
    }
}
