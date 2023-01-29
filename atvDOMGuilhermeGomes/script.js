function Verifica() {
    // Armazenando valores que serão utilizados
    let resultado = document.querySelector('#divRes');
    let imagem = document.querySelector('#imgRes');
    let resultadoText = document.querySelector('#textRes');
    // Relacionado ao input do anoNascimento
    const date = new Date;
    // Obtendo ano atual apartir do Date;
    const anoAtual = date.getFullYear();
    let anoNascimento = document.querySelector('#inputIdade').value;
    let idade = anoAtual - anoNascimento;

    // Relacionado ao radioGen
    let masc = document.querySelector('#masc');
    let fem = document.querySelector('#fem');

    // Inserindo as condições
    if (masc.checked) {
        resultadoText.innerHTML = `Detectado homem com ${idade} anos`;
        if (idade > 0 && idade <= 13) {
            resultado.style.backgroundImage = "url('./imgs/menino.jpg')";
            // Para cada imagem altero um pouco o tamanho da div pra que ela se adapte ao tamanho da imagem.
            // (Mas só faço isso pelo fato de ser apenas um atividade pra não precisar ficar recortando as imagens)
            resultado.style.height = '32vh';
            resultado.style.backgroundSize = 'contain'

        } else if (idade > 13 && idade <= 18) {
            resultado.style.backgroundImage = "url('./imgs/adolescenteMasc.webp')";
            resultado.style.height = '30vh';
            resultado.style.backgroundSize = 'contain'

        } else if (idade > 18 && idade <= 50) {
            resultado.style.backgroundImage = "url('./imgs/adultoMasc.jpeg')";
            resultado.style.height = '30vh';
            resultado.style.backgroundSize = 'contain'

        } else if (idade > 50) {
            resultado.style.backgroundImage = "url('./imgs/idosoMasc.jpeg')";
            resultado.style.height = '27.5vh';
            resultado.style.backgroundSize = 'contain'

        }

    } else if (fem.checked) {
        resultadoText.innerHTML = `Detectado mulher com ${idade} anos`;
        if (idade > 0 && idade <= 15) {
            resultado.style.backgroundImage = "url('./imgs/menina.jpg')";
            resultado.style.height = '27vh';
            resultado.style.backgroundSize = 'contain'
        } else if (idade > 13 && idade <= 18) {
            resultado.style.backgroundImage = "url('./imgs/adolescenteFem.webp')";
            resultado.style.height = '30vh';
            resultado.style.backgroundSize = 'contain'

        } else if (idade > 18 && idade <= 50) {
            resultado.style.backgroundImage = "url('./imgs/adultoFem.webp')";
            resultado.style.height = '30vh';
            resultado.style.backgroundSize = 'contain'

        }
        else if (idade > 50) {
            resultado.style.backgroundImage = "url('./imgs/idosoFem.jpg')";
            resultado.style.height = '31vh';
            resultado.style.width = '24vw';
            resultado.style.backgroundSize = 'contain'

        }
    }
}