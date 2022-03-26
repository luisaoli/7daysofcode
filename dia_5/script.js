let adicionarAlimento = prompt("Deseja adicionar uma comida na sua lista de compras? Digite 'sim' ou 'não'.");
let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];

while (adicionarAlimento == "sim") {
  let comida = prompt("Qual comida você deseja inserir?");
  let categoria = prompt("Qual é a categoria deste alimento? (Categorias disponíveis: frutas, laticínios, congelados, doces).");
  if (categoria == "frutas") {
    listaFrutas.push(comida);
  } else if (categoria == "laticínios") {
    listaLaticinios.push(comida);
  } else if (categoria == "congelados") {
    listaCongelados.push(comida);
  } else if (categoria == "doces") {
    listaDoces.push(comida);    
  }
  adicionarAlimento = prompt("Deseja adicionar mais comidas a lista? Digite 'sim' ou 'não'.");
}

console.log("Lista de compras:")
console.log("Frutas: " + listaFrutas);
console.log("Laticínios: " + listaLaticinios);
console.log("Congelados: " + listaCongelados);
console.log("Doces: " + listaDoces);