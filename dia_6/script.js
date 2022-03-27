let adicionarAlimento = prompt("Deseja adicionar uma comida na sua lista de compras? Digite '1' para sim ou '2' para não.");
let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];

while (adicionarAlimento == "1") {
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
  } else {
    alert("Comando desconhecido, o programa será encerrado.");
    break;
  }
  adicionarAlimento = prompt("Deseja adicionar ou remover comidas na lista? Digite '1' para adicionar, '2' para remover e '3' para encerrar.");
  if (adicionarAlimento == "2") {
    alert(`Lista de compras:\n Frutas: ${listaFrutas}\n Laticínios: ${listaLaticinios}\n Congelados:  ${listaCongelados}\n Doces: ${listaDoces}`);
    let categoriaAlimento = prompt("Qual categoria você deseja alterar? (Categorias disponíveis: frutas, laticínios, congelados, doces)");
    let removerAlimento = prompt("Qual alimento você deseja remover?");
      if (categoriaAlimento == "frutas") {  
        let indexAlimento = listaFrutas.indexOf(removerAlimento);
        if (indexAlimento == "-1") {
          alert("Não foi possível encontrar o item dentro da lista!")
        } else {
          listaFrutas.splice(indexAlimento, 1);
          alert("Alimento removido, nova lista de frutas: " + listaFrutas);
        }
      } else if (categoriaAlimento == "laticínios") {
        let indexAlimento = listaLaticinios.indexOf(removerAlimento);
        if (indexAlimento == "-1") {
          alert("Não foi possível encontrar o item dentro da lista!");
        } else {
          listaLaticinios.splice(indexAlimento, 1);
          alert("Alimento removido, nova lista de Laticinios: " + listaLaticinios);
        }
      } else if (categoriaAlimento == "congelados") {
        let indexAlimento = listaCongelados.indexOf(removerAlimento);
        if (indexAlimento == "-1") {
          alert("Não foi possível encontrar o item dentro da lista");
        } else {
          listaCongelados.splice(indexAlimento, 1);
          alert("Alimento removido, nova lista de Congelados: " + listaCongelados);
        }
      } else if (categoriaAlimento == "doces") {
        let indexAlimento = listaDoces.indexOf(removerAlimento);
        if (indexAlimento == "-1") {
          alert("Não foi possível encontrar o item dentro da lista");
        } else {
          listaDoces.splice(indexAlimento, 1);
          alert("Alimento removido, nova lista de Doces: " + listaDoces);
        }
      } else {
        alert("Comando desconhecido.");
      }
    adicionarAlimento = prompt("Deseja adicionar mais alimentos a lista? Digite '1' para sim e '2' para não.");
  }
}

console.log("Lista de compras: ")
console.log("Frutas: " + listaFrutas);
console.log("Laticínios: " + listaLaticinios);
console.log("Congelados: " + listaCongelados);
console.log("Doces: " + listaDoces);