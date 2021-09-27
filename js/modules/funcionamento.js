export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number) // puxar o que esta dentro do dataset / split trasformando ne um array depois da vírgula
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)


    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();  // puxar o dia
    const horarioAgora = dataAgora.getHours();


    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])


    if (semanaAberto && horarioAberto) //se os dois for true 
    {
        funcionamento.classList.add('aberto')
    }

}





