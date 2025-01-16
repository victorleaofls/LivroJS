function converterDuracao() {
// crio uma função para converter a duração do filme

    var inTitulo = document.getElementById("inTitulo");
    // variavel para guardar o valor do input titulo
    var inDuracao = document.getElementById("inDuracao");
    // variavel para guardar o valor do input duração
    var outTitulo = document.getElementById("outTitulo");
    // variavel para guardar o valor do output titulo
    var outResposta = document.getElementById("outResposta");
    // variavel para guardar o valor do output da duracao em horas
    var titulo = inTitulo.value;
    // variavel para guardar o valor recebido do input titulo
    var duracao = Number(inDuracao.value);
    // variavel para guardar o valor recebido do input duração e já transformado em Number
    var horas = Math.floor(duracao / 60);
    // variavel que divide a duração pela quantidade de minutos em uma hora e
    // arredonda para baixo para baixo para calcular a quantidade de horas
    var minutos = duracao % 60;
    // variavel que calcula o modulo da var duração
    // pela quantidade de minutos em uma hora
    // para obter a quantidade de minutos
    outTitulo.textContent = titulo;
    // atribui o titulo recebido no input no output de Titulo
    outResposta.textContent = horas + "hora(s) e " + minutos + "minuto(s).";
    // atribui calculado nas variaveis horas e minutos em forma de texto no output de resposta
    var btnConverter = document.getElementById("btnConverter");
    // variavel para referenciar o botao de converter identificado pelo seu id
    btnConverter.addEventListener("click", converterDuracao);
    // adiciona um vigia para o evento de click no botao de converter, que chama a função de conversão
}

converterDuracao();
// chama a função acima 

//2.9 b)