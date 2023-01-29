function GerarTabuada() {
    let numero = Number(document.getElementById('numero').value)
    let texto = ''
    let tabuada = document.getElementById('tabuada')
    // Esvaziando a tabuada para inserir uma nova
    tabuada.innerHTML = ''


    // Informando elemento pai
    var elemento_pai = document.getElementsByTagName('select')[0];

    // Criar elemento
    var linha = '';

    for (c = 1; c <= 10; c++) {
        // Formatando o que será exibido em cada option
        texto = document.createTextNode(`${numero} x ${c} = ${numero * c} \n`);

        // Criando elemento option
        linha = document.createElement('option');

        // Anexar texto ao elemento
        linha.appendChild(texto);

        // Selecionando todos os elementos option
        var itens = document.getElementsByTagName('option');

        // Inserindo elementos com insertBefore()
        elemento_pai.insertBefore(linha, itens[-1]);
    }
    document.getElementById('text').style = 'display:none'

}