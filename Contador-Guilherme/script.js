function Contagem() {
    let inicio = Number(document.querySelector('input#inicio').value)
    let fim = Number(document.querySelector('input#fim').value)
    let passo = Number(document.querySelector('input#passo').value)
    let resultado = document.getElementById('textRes')

    resultado.innerHTML = ''
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            resultado.innerHTML += i + ' '
        }
        resultado.innerHTML += '🏁' + ' '
    } else if (inicio > fim) {
        for (let i = inicio; i >= fim; i -= passo) {
            resultado.innerHTML += i + ' '
        }
        resultado.innerHTML += '🏁' + ' '
    } else if (inicio == fim) {
        alert('Os valores são iguais.')
    }



}