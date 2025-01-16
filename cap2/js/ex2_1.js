// Objeto: Instancia de classe
// Método: Conjunto de instruções que executam uma tarefa
// Propriedade: Representa uma característica (atributo) de um objeto

// declara a função mostrarOla
function mostrarOla() {
    // obtém o conteúdo do campo (com id=) nome
    var nome = document.getElementById("nome").value;
    // exibe no parágrafo (resposta): "Olá " e o nome informado
    document.getElementById("resposta").textContent = "Olá " + nome;
}
// cria uma referência ao botão (com id=) mostrar
var mostrar = document.getElementById("mostrar");
// registra para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla);

// Nomenclaturas de variáveis:
// Entrada de dados: in***
// Botoes: btn***
// Saída de dados: out***


