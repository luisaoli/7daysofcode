var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;

var boasVindas = alert("Bem vindo ao jogo de adivinhação!");
var chute = prompt("Qual número de 0 a 10 eu estou pensando?");

while (tentativa <= 2) {
  if (chute == numeroSecreto) {
    var ganhou = alert("Parabéns, você acertou! O número que pensei foi " + numeroSecreto + "!");
    tentativa = 4;
  } else if (tentativa <= 1) {
      var chute = prompt("Errou, tente novamente:")
      tentativa += 1;
  } else if (tentativa = 3) {
      var errou = alert("Você errou, o número que eu estava pensando era " + numeroSecreto + "!");
  }
}