let scoreUsuario = 0;
let scoreComputador = 0;
const scoreUsuario_span = document.getElementById('score-usuario');
const scoreComputador_span = document.getElementById('score-pc');
const pontuacaoUsuario = document.querySelector('.pontuacao-usuario');
const resultado = document.querySelector('.resultado > p');
const pedra = document.getElementById('pe');
const papel = document.getElementById('pa');
const tesoura = document.getElementById('t');
const popup = document.getElementById("popup");
const abrirBtn = document.getElementById("messagem");
const fecharBtn = document.getElementById("fecharBtn");

abrirBtn.onclick = () => {
  popup.style.display = "flex";
}

fecharBtn.onclick = () => {
  popup.style.display = "none";
}

window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
}

function getEscolhaPc() {
  const escolhas = ['pe','pa','t'];
  const numeros = Math.floor(Math.random()*3);
  return escolhas[numeros];
}

function converterTexto(nome) {
  if (nome == "pe") return "Pedra";
  if (nome == "pa") return "Papel";
  return "Tesoura";
} 

function ganhou(escolhaUsuario, pcEscolha){
  scoreUsuario++;
  scoreUsuario_span.innerText = scoreUsuario;
  scoreComputador_span.innerText = scoreComputador;
  resultado.style.color = "green";
  resultado.innerText = converterTexto(escolhaUsuario) + " ganha de " + converterTexto(pcEscolha) + ". Você ganhou!"
}

function perdeu(escolhaUsuario, pcEscolha){
  scoreComputador++;
  scoreComputador_span.innerText = scoreComputador;
  scoreUsuario_span.innerText = scoreUsuario;
  resultado.style.color = "red";
  resultado.innerText = converterTexto(escolhaUsuario) + " perde de " + converterTexto(pcEscolha) + ". Você perdeu!"
}

function empate(escolhaUsuario, pcEscolha){
  scoreComputador_span.innerText = scoreComputador;
  scoreUsuario_span.innerText = scoreUsuario;
  resultado.style.color = "yellow";
  resultado.innerText = converterTexto(escolhaUsuario) + " é igual a " + converterTexto(pcEscolha) + ". Empate!"
}


function game(escolhaUsuario){
  const pcEscolha = getEscolhaPc();
  switch(escolhaUsuario + pcEscolha) {
    case "pet":
    case "pape":
    case "tpa":
     ganhou(escolhaUsuario, pcEscolha);
     break;
   case "tpe":
   case "pepa":
   case "pat":
    perdeu(escolhaUsuario, pcEscolha);
    break;
  case "pepe":
  case "papa":
  case "tt":
    empate(escolhaUsuario, pcEscolha);
    break;
  }
}


function main() {
pedra.addEventListener('click', function() {
game('pe');
});

papel.addEventListener('click', function() {
game('pa');
});

tesoura.addEventListener('click', function() {
game('t');
});
}

main();
