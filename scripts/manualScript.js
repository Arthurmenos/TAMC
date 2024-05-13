import { ranks } from "./mmrs.js"
import { mmrTypes } from "./mmrs.js"

const playersMMRs = document.querySelectorAll(`.playersmmr`)
const MMRs = document.querySelectorAll(".rankingSelect");

function getPlayerRankText(object, value) {
  for(let text in ranks) {
    if(ranks[text] == value && ranks.hasOwnProperty(text)) {
      return text;
    }
  }
}

// Cria um looping que passa por todos os selection, e com base no valor de cada um, chama as funções de changeImage e calculateAverage
for (let i = 0; i <= MMRs.length; i++) {
  let playerMMR = MMRs[i]
  playerMMR.addEventListener('change', () => {
    let value = document.querySelector(`#player${i}select`).value;
    changeImage(i, value), calculateAverage();
  });
}

// Muda a imagem do rank do player com base no MMR selecionado 
function changeImage (i, value){
  let imgElement = document.getElementById(`imgplayer${i}`)
  let textMMR = document.getElementById(`player${i}MMR`)
  let textRank = document.getElementById(`player${i}rank`)

  // Condicional para caso o MMR do player seja maior que 5680, que seja mantido como 5680 para a imagem
  if (value >= 5680) {
    var imgValue = 5680
  } else if (value < 5680) {
    var imgValue = value
  }

  // Altera a imagem, e o mmr do player
  imgElement.setAttribute('src', `imgs/${imgValue}.webp`);
  textMMR.innerText = `~${value} MMR`
  textRank.textContent = `${getPlayerRankText(ranks, value)}`
}

// Calcula a média de MMR geral dentre os 5 jogadores
function calculateAverage() {
  let textAVG = document.querySelector('p#avgmmr')
  let soma = 0
  let MMRvalue = []

  MMRs.forEach((element) => {
    let value = Number(element.value);
    soma += value;
    MMRvalue.push(value);
  });

  let average = (soma / MMRs.length).toFixed(0);
  textAVG.innerText = `~${average} MMR`
  
  // Chama a função que altera a imagem do container de média de MMR
  verifyAverageImage(average);
}

function verifyAverageImage(average) { 
 // Faz com que, caso o número da média não seja exato à um ranking, ele seja alterado para o mais próximo
  let closest = mmrTypes.reduce(function(prev, curr) {
    return (Math.abs(curr - average) < Math.abs(prev - average) ? curr : prev);
  });

  // Altera a imagem
  let imgElement = document.querySelector('img#imgavg')
  imgElement.setAttribute('src', `imgs/${closest}.webp`); 

  // Altera o texto do rank
  let averageText = document.getElementById('avgRankText')
  averageText.textContent = `${getPlayerRankText(ranks, closest)}`
}

