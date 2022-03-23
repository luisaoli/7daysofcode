/*var cidade = prompt("Digite a sua cidade:");
var msg = `Você é de ${cidade}!`;
alert(msg);*/

var nome = prompt("Qual é o seu nome?");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual linguagem de programação você está estudando?");

var elementoMsg = document.getElementById("msg")
var msg = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!";
elementoMsg.innerHTML = msg;

var pergunta = prompt("Você gosta de estudar " + linguagem + "? Responda com número 1 para SIM e 2 para NÃO");

if (pergunta == "1") {
  var elementoRetorno = document.getElementById("retorno");
  var retorno = "Muito bom! Continue estudando e você terá muito sucesso."
  elementoRetorno.innerHTML = retorno;
} else {
  var elementoRetorno = document.getElementById("retorno");
  var retorno = "Ahh que pena... Já tentou aprender outras linguagems?";
  elementoRetorno.innerHTML = retorno;
}