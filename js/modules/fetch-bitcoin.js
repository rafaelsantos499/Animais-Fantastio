export default function initFetchBitCoin() {
    fetch('https://www.blockchain.com/ticker')
        .then((r) => r.json())
        .then((bitcoin) => {
            document.querySelector('.btc-preco').innerText = (1000 / bitcoin.BRL.sell).toFixed(4)
        }).catch((erro) => console.log(Error(erro)))
}
