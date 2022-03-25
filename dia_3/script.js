var nome = prompt("Olá, qual é o seu nome?");

var nomeImpresso = document.getElementById("nome");
nomeImpresso.innerHTML = "Olá, " + nome + "!";

function areaDesejada() {
  var areaSelecionada = obtemAreaSelecionada();
  if (areaSelecionada == "front-end") {
    let area = document.getElementById("linguagem");
    let opcoesArea = "";
    opcoesArea = 
      "<label for='area-selecionada'><b>Quais destas tecnologias você pretende aprender?</b></label><br><input type='radio' name='area-front-end' value='react'>React<br><input type='radio' name='area-front-end' value='vue'>Vue<br><button type='submit' onclick='areaEspecializacao()'>Enviar</button>";
    area.innerHTML = opcoesArea;
  } else {
    let area = document.getElementById("linguagem");
    let opcoesArea = "";
    opcoesArea = 
      "<label for='area-selecionada'><b>Quais destas tecnologias você pretende aprender?</b></label><br><input type='radio' name='area-back-end' value='c#'>C#<br><input type='radio' name='area-back-end' value='Java'>Java<br><button type='submit' onclick='areaEspecializacao()'>Enviar</button>";
    area.innerHTML = opcoesArea;
  }
}

function obtemAreaSelecionada() {
  var radioArea = document.getElementsByName("area-escolhida");

  for (var i = 0; i < radioArea.length; i++) {
    if (radioArea[i].checked == true) {
      return radioArea[i].value;
    }
  }
}

function areaEspecializacao() {
  var especializacao = document.getElementById("especializacao");
  var opcoesEspecializacao = "";
  opcoesEspecializacao = "<label for='especializacao'><b>Em qual área deseja continuar se especializando?</b></label><br><input type='radio' name='area-especializacao' value='area-escolhida'>Seguir na área escolhida (front-end ou back-end)<br><input type='radio' name='area-especializacao' value='fullstack'>Serei fullstack!<br><button type='submit' onclick='especializacaoEscolhida()'>Enviar</button>";
  especializacao.innerHTML = opcoesEspecializacao;
}

function especializacaoEscolhida() {
  var especializacaoEscolhida = obtemEspecializacaoSelecionada();
  var msgEspecializacao = document.getElementById("msgEspecializacao")
      
  if (especializacaoEscolhida == "area-escolhida") {
    var msgFrontBack = "<b>Boa sorte, você terá diversas oportunidades de atuação no mercado de trabalho!</b>";
    msgEspecializacao.innerHTML = msgFrontBack;
  } else {
    var msgFullStack = "<b>Boa sorte! Com muito estudo você chegará lá e terá muitas oportunidades de atuação no mercado de trabalho!</b>";
    msgEspecializacao.innerHTML = msgFullStack;
  }

  listaTecnologias();
}

function obtemEspecializacaoSelecionada() {
  var radioEspecializacao = document.getElementsByName("area-especializacao");

  for (var i = 0; i < radioEspecializacao.length; i++) {
    if (radioEspecializacao[i].checked == true) {
      return radioEspecializacao[i].value;
    }
  }
}

function listaTecnologias() {
  let perguntaMaisTecnologias = prompt("Existe outras tecnologias que você deseja se especializar? Digite 'sim' em caso positivo.");
  while (perguntaMaisTecnologias == "sim") {
    var novaTecnologia = prompt("Qual?")
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    perguntaMaisTecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' em caso positivo.");   
  }
  finalizar();
}

/*
function adicionarTecnologia() {
  let perguntaMaisTecnologias = prompt("Tem mais tecnologias que deseja se especializar? Digite 'sim' em caso positivo.");
  while (perguntaMaisTecnologias == "sim") {
    perguntaMaisTecnologias = prompt("Tem mais tecnologias que deseja se especializar? Digite 'sim' em caso positivo.");
  }
  finalizar();
}
*/

function finalizar() {
  var elementoFinalizar = document.getElementById("finalizacao");
  var msgFinal = "<b>Muito bem, separe um tempo para estudos e se dedique, assim terá sucesso!<br>Obrigada por jogar comigo! Até a próxima :)</b>";
  elementoFinalizar.innerHTML = msgFinal;
}