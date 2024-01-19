function calcularMedia() {
    const valores = [];
    const selects = document.querySelectorAll('.rankingSelect');
    
    selects.forEach(select => {
      const valorSelecionado = parseInt(select.value);
      valores.push(isNaN(valorSelecionado) ? 0 : valorSelecionado);
    });
  
    const media = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
  
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Média: ${media.toFixed(2)}`;
    medal()
  }

function medal1() {
  let p = document.querySelector('#PLAYER1').value;
  let imgp = document.querySelector('img#imgp1')

  if (p < 10) {
    imgp.setAttribute('src', 'imgs/unranked.webp');
  } else if (p < 154) {
    imgp.setAttribute('src', 'imgs/herald1.webp');
  } else if (p < 308) {
    imgp.setAttribute('src', 'imgs/herald2.webp');
  } else if (p < 462) {
    imgp.setAttribute('src', 'imgs/herald3.webp');
  } else if (p < 616) {
    imgp.setAttribute('src', 'imgs/herald4.webp');
  } else if (p < 770) {
    imgp.setAttribute('src', 'imgs/herald5.webp');
  } else if (p < 924) {
    imgp.setAttribute('src', 'imgs/guardian1.webp');
  } else if (p < 1078) {
    imgp.setAttribute('src', 'imgs/guardian2.webp');
  } else if (p < 1232) {
    imgp.setAttribute('src', 'imgs/guardian3.webp');
  } else if (p < 1386) {
    imgp.setAttribute('src', 'imgs/guardian4.webp');
  } else if (p < 1540) {
    imgp.setAttribute('src', 'imgs/guardian5.webp');
  } else if (p < 1694) {
    imgp.setAttribute('src', 'imgs/cruzader1.webp');
  } else if (p < 1850) {
    imgp.setAttribute('src', 'imgs/cruzader2.webp');
  } else if (p < 2010) {
    imgp.setAttribute('src', 'imgs/cruzader3.webp');
  } else if (p < 2170) {
    imgp.setAttribute('src', 'imgs/cruzader4.webp');
  } else if (p < 2320) {
    imgp.setAttribute('src', 'imgs/cruzader5.webp');
  } else if (p < 2470) {
    imgp.setAttribute('src', 'imgs/archon1.webp');
  } else if (p < 2620) {
    imgp.setAttribute('src', 'imgs/archon2.webp');
  } else if (p < 2785) {
    imgp.setAttribute('src', 'imgs/archon3.webp');
  } else if (p < 2930) {
    imgp.setAttribute('src', 'imgs/archon4.webp');
  } else if (p < 3080) {
    imgp.setAttribute('src', 'imgs/archon5.webp');
  } else if (p < 3234) {
    imgp.setAttribute('src', 'imgs/legend1.webp');
  } else if (p < 3388) {
    imgp.setAttribute('src', 'imgs/legend2.webp');
  } else if (p < 3542) {
    imgp.setAttribute('src', 'imgs/legend3.webp');
  } else if (p < 3696) {
    imgp.setAttribute('src', 'imgs/legend4.webp');
  } else if (p < 3850) {
    imgp.setAttribute('src', 'imgs/legend5.webp');
  } else if (p < 4004) {
    imgp.setAttribute('src', 'imgs/ancient1.webp');
  } else if (p < 4158) {
    imgp.setAttribute('src', 'imgs/ancient2.webp');
  } else if (p < 4312) {
    imgp.setAttribute('src', 'imgs/ancient3.webp');
  } else if (p < 4466) {
    imgp.setAttribute('src', 'imgs/ancient4.webp');
  } else if (p < 4620) {
    imgp.setAttribute('src', 'imgs/ancient5.webp');
  } else if (p < 4820) {
    imgp.setAttribute('src', 'imgs/divine1.webp');
  } else if (p < 5020) {
    imgp.setAttribute('src', 'imgs/divine2.webp');
  } else if (p < 5220) {
    imgp.setAttribute('src', 'imgs/divine3.webp');
  } else if (p < 5420) {
    imgp.setAttribute('src', 'imgs/divine4.webp');
  } else if (p < 5680) {
    imgp.setAttribute('src', 'imgs/divine5.webp');
  } else if (p >= 5680){
    imgp.setAttribute('src', 'imgs/immortal.webp');
  }


  let p2 = document.querySelector('#PLAYER2').value;
  let imgp2 = document.querySelector('imgp2')

  let p3 = document.querySelector('#PLAYER3').value;
  let imgp3 = document.querySelector('imgp3')

  let p4 = document.querySelector('#PLAYER4').value;
  let imgp4 = document.querySelector('imgp4')

  let p5 = document.querySelector('#PLAYER5').value;
  let imgp5 = document.querySelector('imgp5')

  calcularMedia()
}

function medal2() {
  let p = document.querySelector('#PLAYER2').value;
  let imgp = document.querySelector('img#imgp2')

  if (p < 10) {
    imgp.setAttribute('src', 'imgs/unranked.webp');
  } else if (p < 154) {
    imgp.setAttribute('src', 'imgs/herald1.webp');
  } else if (p < 308) {
    imgp.setAttribute('src', 'imgs/herald2.webp');
  } else if (p < 462) {
    imgp.setAttribute('src', 'imgs/herald3.webp');
  } else if (p < 616) {
    imgp.setAttribute('src', 'imgs/herald4.webp');
  } else if (p < 770) {
    imgp.setAttribute('src', 'imgs/herald5.webp');
  } else if (p < 924) {
    imgp.setAttribute('src', 'imgs/guardian1.webp');
  } else if (p < 1078) {
    imgp.setAttribute('src', 'imgs/guardian2.webp');
  } else if (p < 1232) {
    imgp.setAttribute('src', 'imgs/guardian3.webp');
  } else if (p < 1386) {
    imgp.setAttribute('src', 'imgs/guardian4.webp');
  } else if (p < 1540) {
    imgp.setAttribute('src', 'imgs/guardian5.webp');
  } else if (p < 1694) {
    imgp.setAttribute('src', 'imgs/cruzader1.webp');
  } else if (p < 1850) {
    imgp.setAttribute('src', 'imgs/cruzader2.webp');
  } else if (p < 2010) {
    imgp.setAttribute('src', 'imgs/cruzader3.webp');
  } else if (p < 2170) {
    imgp.setAttribute('src', 'imgs/cruzader4.webp');
  } else if (p < 2320) {
    imgp.setAttribute('src', 'imgs/cruzader5.webp');
  } else if (p < 2470) {
    imgp.setAttribute('src', 'imgs/archon1.webp');
  } else if (p < 2620) {
    imgp.setAttribute('src', 'imgs/archon2.webp');
  } else if (p < 2785) {
    imgp.setAttribute('src', 'imgs/archon3.webp');
  } else if (p < 2930) {
    imgp.setAttribute('src', 'imgs/archon4.webp');
  } else if (p < 3080) {
    imgp.setAttribute('src', 'imgs/archon5.webp');
  } else if (p < 3234) {
    imgp.setAttribute('src', 'imgs/legend1.webp');
  } else if (p < 3388) {
    imgp.setAttribute('src', 'imgs/legend2.webp');
  } else if (p < 3542) {
    imgp.setAttribute('src', 'imgs/legend3.webp');
  } else if (p < 3696) {
    imgp.setAttribute('src', 'imgs/legend4.webp');
  } else if (p < 3850) {
    imgp.setAttribute('src', 'imgs/legend5.webp');
  } else if (p < 4004) {
    imgp.setAttribute('src', 'imgs/ancient1.webp');
  } else if (p < 4158) {
    imgp.setAttribute('src', 'imgs/ancient2.webp');
  } else if (p < 4312) {
    imgp.setAttribute('src', 'imgs/ancient3.webp');
  } else if (p < 4466) {
    imgp.setAttribute('src', 'imgs/ancient4.webp');
  } else if (p < 4620) {
    imgp.setAttribute('src', 'imgs/ancient5.webp');
  } else if (p < 4820) {
    imgp.setAttribute('src', 'imgs/divine1.webp');
  } else if (p < 5020) {
    imgp.setAttribute('src', 'imgs/divine2.webp');
  } else if (p < 5220) {
    imgp.setAttribute('src', 'imgs/divine3.webp');
  } else if (p < 5420) {
    imgp.setAttribute('src', 'imgs/divine4.webp');
  } else if (p < 5680) {
    imgp.setAttribute('src', 'imgs/divine5.webp');
  } else if (p >= 5680){
    imgp.setAttribute('src', 'imgs/immortal.webp');
  }


  let p2 = document.querySelector('#PLAYER2').value;
  let imgp2 = document.querySelector('imgp2')

  let p3 = document.querySelector('#PLAYER3').value;
  let imgp3 = document.querySelector('imgp3')

  let p4 = document.querySelector('#PLAYER4').value;
  let imgp4 = document.querySelector('imgp4')

  let p5 = document.querySelector('#PLAYER5').value;
  let imgp5 = document.querySelector('imgp5')

  calcularMedia()
}

function medal3() {
  let p = document.querySelector('#PLAYER3').value;
  let imgp = document.querySelector('img#imgp3')

  if (p < 10) {
    imgp.setAttribute('src', 'imgs/unranked.webp');
  } else if (p < 154) {
    imgp.setAttribute('src', 'imgs/herald1.webp');
  } else if (p < 308) {
    imgp.setAttribute('src', 'imgs/herald2.webp');
  } else if (p < 462) {
    imgp.setAttribute('src', 'imgs/herald3.webp');
  } else if (p < 616) {
    imgp.setAttribute('src', 'imgs/herald4.webp');
  } else if (p < 770) {
    imgp.setAttribute('src', 'imgs/herald5.webp');
  } else if (p < 924) {
    imgp.setAttribute('src', 'imgs/guardian1.webp');
  } else if (p < 1078) {
    imgp.setAttribute('src', 'imgs/guardian2.webp');
  } else if (p < 1232) {
    imgp.setAttribute('src', 'imgs/guardian3.webp');
  } else if (p < 1386) {
    imgp.setAttribute('src', 'imgs/guardian4.webp');
  } else if (p < 1540) {
    imgp.setAttribute('src', 'imgs/guardian5.webp');
  } else if (p < 1694) {
    imgp.setAttribute('src', 'imgs/cruzader1.webp');
  } else if (p < 1850) {
    imgp.setAttribute('src', 'imgs/cruzader2.webp');
  } else if (p < 2010) {
    imgp.setAttribute('src', 'imgs/cruzader3.webp');
  } else if (p < 2170) {
    imgp.setAttribute('src', 'imgs/cruzader4.webp');
  } else if (p < 2320) {
    imgp.setAttribute('src', 'imgs/cruzader5.webp');
  } else if (p < 2470) {
    imgp.setAttribute('src', 'imgs/archon1.webp');
  } else if (p < 2620) {
    imgp.setAttribute('src', 'imgs/archon2.webp');
  } else if (p < 2785) {
    imgp.setAttribute('src', 'imgs/archon3.webp');
  } else if (p < 2930) {
    imgp.setAttribute('src', 'imgs/archon4.webp');
  } else if (p < 3080) {
    imgp.setAttribute('src', 'imgs/archon5.webp');
  } else if (p < 3234) {
    imgp.setAttribute('src', 'imgs/legend1.webp');
  } else if (p < 3388) {
    imgp.setAttribute('src', 'imgs/legend2.webp');
  } else if (p < 3542) {
    imgp.setAttribute('src', 'imgs/legend3.webp');
  } else if (p < 3696) {
    imgp.setAttribute('src', 'imgs/legend4.webp');
  } else if (p < 3850) {
    imgp.setAttribute('src', 'imgs/legend5.webp');
  } else if (p < 4004) {
    imgp.setAttribute('src', 'imgs/ancient1.webp');
  } else if (p < 4158) {
    imgp.setAttribute('src', 'imgs/ancient2.webp');
  } else if (p < 4312) {
    imgp.setAttribute('src', 'imgs/ancient3.webp');
  } else if (p < 4466) {
    imgp.setAttribute('src', 'imgs/ancient4.webp');
  } else if (p < 4620) {
    imgp.setAttribute('src', 'imgs/ancient5.webp');
  } else if (p < 4820) {
    imgp.setAttribute('src', 'imgs/divine1.webp');
  } else if (p < 5020) {
    imgp.setAttribute('src', 'imgs/divine2.webp');
  } else if (p < 5220) {
    imgp.setAttribute('src', 'imgs/divine3.webp');
  } else if (p < 5420) {
    imgp.setAttribute('src', 'imgs/divine4.webp');
  } else if (p < 5680) {
    imgp.setAttribute('src', 'imgs/divine5.webp');
  } else if (p >= 5680){
    imgp.setAttribute('src', 'imgs/immortal.webp');
  }


  let p2 = document.querySelector('#PLAYER2').value;
  let imgp2 = document.querySelector('imgp2')

  let p3 = document.querySelector('#PLAYER3').value;
  let imgp3 = document.querySelector('imgp3')

  let p4 = document.querySelector('#PLAYER4').value;
  let imgp4 = document.querySelector('imgp4')

  let p5 = document.querySelector('#PLAYER5').value;
  let imgp5 = document.querySelector('imgp5')

  calcularMedia()
}

function medal4() {
  let p = document.querySelector('#PLAYER4').value;
  let imgp = document.querySelector('img#imgp4')

  if (p < 10) {
    imgp.setAttribute('src', 'imgs/unranked.webp');
  } else if (p < 154) {
    imgp.setAttribute('src', 'imgs/herald1.webp');
  } else if (p < 308) {
    imgp.setAttribute('src', 'imgs/herald2.webp');
  } else if (p < 462) {
    imgp.setAttribute('src', 'imgs/herald3.webp');
  } else if (p < 616) {
    imgp.setAttribute('src', 'imgs/herald4.webp');
  } else if (p < 770) {
    imgp.setAttribute('src', 'imgs/herald5.webp');
  } else if (p < 924) {
    imgp.setAttribute('src', 'imgs/guardian1.webp');
  } else if (p < 1078) {
    imgp.setAttribute('src', 'imgs/guardian2.webp');
  } else if (p < 1232) {
    imgp.setAttribute('src', 'imgs/guardian3.webp');
  } else if (p < 1386) {
    imgp.setAttribute('src', 'imgs/guardian4.webp');
  } else if (p < 1540) {
    imgp.setAttribute('src', 'imgs/guardian5.webp');
  } else if (p < 1694) {
    imgp.setAttribute('src', 'imgs/cruzader1.webp');
  } else if (p < 1850) {
    imgp.setAttribute('src', 'imgs/cruzader2.webp');
  } else if (p < 2010) {
    imgp.setAttribute('src', 'imgs/cruzader3.webp');
  } else if (p < 2170) {
    imgp.setAttribute('src', 'imgs/cruzader4.webp');
  } else if (p < 2320) {
    imgp.setAttribute('src', 'imgs/cruzader5.webp');
  } else if (p < 2470) {
    imgp.setAttribute('src', 'imgs/archon1.webp');
  } else if (p < 2620) {
    imgp.setAttribute('src', 'imgs/archon2.webp');
  } else if (p < 2785) {
    imgp.setAttribute('src', 'imgs/archon3.webp');
  } else if (p < 2930) {
    imgp.setAttribute('src', 'imgs/archon4.webp');
  } else if (p < 3080) {
    imgp.setAttribute('src', 'imgs/archon5.webp');
  } else if (p < 3234) {
    imgp.setAttribute('src', 'imgs/legend1.webp');
  } else if (p < 3388) {
    imgp.setAttribute('src', 'imgs/legend2.webp');
  } else if (p < 3542) {
    imgp.setAttribute('src', 'imgs/legend3.webp');
  } else if (p < 3696) {
    imgp.setAttribute('src', 'imgs/legend4.webp');
  } else if (p < 3850) {
    imgp.setAttribute('src', 'imgs/legend5.webp');
  } else if (p < 4004) {
    imgp.setAttribute('src', 'imgs/ancient1.webp');
  } else if (p < 4158) {
    imgp.setAttribute('src', 'imgs/ancient2.webp');
  } else if (p < 4312) {
    imgp.setAttribute('src', 'imgs/ancient3.webp');
  } else if (p < 4466) {
    imgp.setAttribute('src', 'imgs/ancient4.webp');
  } else if (p < 4620) {
    imgp.setAttribute('src', 'imgs/ancient5.webp');
  } else if (p < 4820) {
    imgp.setAttribute('src', 'imgs/divine1.webp');
  } else if (p < 5020) {
    imgp.setAttribute('src', 'imgs/divine2.webp');
  } else if (p < 5220) {
    imgp.setAttribute('src', 'imgs/divine3.webp');
  } else if (p < 5420) {
    imgp.setAttribute('src', 'imgs/divine4.webp');
  } else if (p < 5680) {
    imgp.setAttribute('src', 'imgs/divine5.webp');
  } else if (p >= 5680){
    imgp.setAttribute('src', 'imgs/immortal.webp');
  }


  let p2 = document.querySelector('#PLAYER2').value;
  let imgp2 = document.querySelector('imgp2')

  let p3 = document.querySelector('#PLAYER3').value;
  let imgp3 = document.querySelector('imgp3')

  let p4 = document.querySelector('#PLAYER4').value;
  let imgp4 = document.querySelector('imgp4')

  let p5 = document.querySelector('#PLAYER5').value;
  let imgp5 = document.querySelector('imgp5')

  calcularMedia()
}

function medal5() {
  let p = document.querySelector('#PLAYER5').value;
  let imgp = document.querySelector('img#imgp5')

  if (p < 10) {
    imgp.setAttribute('src', 'imgs/unranked.webp');
  } else if (p < 154) {
    imgp.setAttribute('src', 'imgs/herald1.webp');
  } else if (p < 308) {
    imgp.setAttribute('src', 'imgs/herald2.webp');
  } else if (p < 462) {
    imgp.setAttribute('src', 'imgs/herald3.webp');
  } else if (p < 616) {
    imgp.setAttribute('src', 'imgs/herald4.webp');
  } else if (p < 770) {
    imgp.setAttribute('src', 'imgs/herald5.webp');
  } else if (p < 924) {
    imgp.setAttribute('src', 'imgs/guardian1.webp');
  } else if (p < 1078) {
    imgp.setAttribute('src', 'imgs/guardian2.webp');
  } else if (p < 1232) {
    imgp.setAttribute('src', 'imgs/guardian3.webp');
  } else if (p < 1386) {
    imgp.setAttribute('src', 'imgs/guardian4.webp');
  } else if (p < 1540) {
    imgp.setAttribute('src', 'imgs/guardian5.webp');
  } else if (p < 1694) {
    imgp.setAttribute('src', 'imgs/cruzader1.webp');
  } else if (p < 1850) {
    imgp.setAttribute('src', 'imgs/cruzader2.webp');
  } else if (p < 2010) {
    imgp.setAttribute('src', 'imgs/cruzader3.webp');
  } else if (p < 2170) {
    imgp.setAttribute('src', 'imgs/cruzader4.webp');
  } else if (p < 2320) {
    imgp.setAttribute('src', 'imgs/cruzader5.webp');
  } else if (p < 2470) {
    imgp.setAttribute('src', 'imgs/archon1.webp');
  } else if (p < 2620) {
    imgp.setAttribute('src', 'imgs/archon2.webp');
  } else if (p < 2785) {
    imgp.setAttribute('src', 'imgs/archon3.webp');
  } else if (p < 2930) {
    imgp.setAttribute('src', 'imgs/archon4.webp');
  } else if (p < 3080) {
    imgp.setAttribute('src', 'imgs/archon5.webp');
  } else if (p < 3234) {
    imgp.setAttribute('src', 'imgs/legend1.webp');
  } else if (p < 3388) {
    imgp.setAttribute('src', 'imgs/legend2.webp');
  } else if (p < 3542) {
    imgp.setAttribute('src', 'imgs/legend3.webp');
  } else if (p < 3696) {
    imgp.setAttribute('src', 'imgs/legend4.webp');
  } else if (p < 3850) {
    imgp.setAttribute('src', 'imgs/legend5.webp');
  } else if (p < 4004) {
    imgp.setAttribute('src', 'imgs/ancient1.webp');
  } else if (p < 4158) {
    imgp.setAttribute('src', 'imgs/ancient2.webp');
  } else if (p < 4312) {
    imgp.setAttribute('src', 'imgs/ancient3.webp');
  } else if (p < 4466) {
    imgp.setAttribute('src', 'imgs/ancient4.webp');
  } else if (p < 4620) {
    imgp.setAttribute('src', 'imgs/ancient5.webp');
  } else if (p < 4820) {
    imgp.setAttribute('src', 'imgs/divine1.webp');
  } else if (p < 5020) {
    imgp.setAttribute('src', 'imgs/divine2.webp');
  } else if (p < 5220) {
    imgp.setAttribute('src', 'imgs/divine3.webp');
  } else if (p < 5420) {
    imgp.setAttribute('src', 'imgs/divine4.webp');
  } else if (p < 5680) {
    imgp.setAttribute('src', 'imgs/divine5.webp');
  } else if (p >= 5680){
    imgp.setAttribute('src', 'imgs/immortal.webp');
  }


  let p2 = document.querySelector('#PLAYER2').value;
  let imgp2 = document.querySelector('imgp2')

  let p3 = document.querySelector('#PLAYER3').value;
  let imgp3 = document.querySelector('imgp3')

  let p4 = document.querySelector('#PLAYER4').value;
  let imgp4 = document.querySelector('imgp4')

  let p5 = document.querySelector('#PLAYER5').value;
  let imgp5 = document.querySelector('imgp5')

  calcularMedia()
}

