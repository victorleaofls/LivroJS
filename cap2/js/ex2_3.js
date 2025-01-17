function calculaPromocao() {

    var inVeiculo = document.getElementById("inVeiculo");
    // variavel para guardar o valor do input veículo
    var inPreco = document.getElementById("inPreco");
    // variavel para guardar o valor do input preco

    var outVeiculo = document.getElementById("outVeiculo");
    // variavel para guardar o valor do output veiculo
    var outEntrada = document.getElementById("outEntrada");
    // variavel para guardar o valor do output entrada
    var outParcela = document.getElementById("outParcela");
    // variavel para guardar o valor do output parcela

    var veiculo = inVeiculo.value;
    // variavel para guardar o valor obtido no input veiculo
    var preco = Number(inPreco.value);
    // variavel para guardar o valor obtido no input preco ja transformado em tipo number

    var entrada = preco * 0.50;
    // variavel para guardar o calculo da entrada
    var parcela = (preco * 0.45) / 12;
    // variavel para guardar o calculo do valor da parcela

    outVeiculo.textContent = "Promoção: " + veiculo;
    // exibir o conteudo de texto da variavel outVeiculo + variavel veiculo
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    // exibir o conteudo de texto da variavel outEntrada + variavel do valor de entrada com apenas duas casas decimais
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
    // exibir o conteudo de texto da variavel outParcela + variavel do valor de parcela com apenas duas casas decimais
}

var btnPromocao = document.getElementById("btnPromocao");
// variavel para localizar o botao de calculo da promocao
    btnPromocao.addEventListener("click", calculaPromocao);
// adiciona um ouvinte de evento para checar o click no botao, para assim rodar a funcao calculaPromocao

//calculaPromocao();

