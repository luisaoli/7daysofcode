function somar(valor1, valor2){
  let soma = valor1 + valor2;
  return soma;
}

function subtrair(valor1, valor2){
  let subtracao = valor1 - valor2;
  return subtracao;
}

function dividir(valor1, valor2){
  let divisao = valor1 / valor2;
  return divisao;
}

function multiplicar(valor1, valor2){
  let multiplicacao = valor1 * valor2;
  return multiplicacao;
}

let operacao = "start"; //para entrar no while

while(operacao != "sair"){
  operacao = prompt("Qual operação você deseja realizar? Operações disponíveis: somar, subtrair, dividir e multiplicar. (Digite 'sair' para parar).");
  
  if (operacao == "sair") {
    break;
  }
  
  let valor1 = parseInt(prompt("Digite o primeiro valor da operação: "));
  let valor2 = parseInt(prompt("Digite o segundo valor da operação: "));
  
  switch(operacao){
    case 'somar':
      let resultado1 = somar(valor1, valor2);
      alert(`O resultado da soma é: ${resultado1}.`);
      break;
    case 'subtrair':
      let resultado2 = subtrair(valor1, valor2);
      alert(`O resultado da subtração é: ${resultado2}`);
      break;
    case 'dividir':
      let resultado3 = dividir(valor1, valor2);
      alert(`O resultado da divisão é: ${resultado3}`);
      break;
    case 'multiplicar':
      let resultado4 = multiplicar(valor1, valor2);
      alert(`O resultado da multiplicação é: ${resultado4}`);
      break;
    default:
      alert("Operacao desconhecida.");
      break;
  }
  
}