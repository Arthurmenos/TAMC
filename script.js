function calcularMedia() {
  const value1 = Number(document.querySelector('#PLAYER1').value);
  const value2 = Number(document.querySelector('#PLAYER2').value);
  const value3 = Number(document.querySelector('#PLAYER3').value);
  const value4 = Number(document.querySelector('#PLAYER4').value);
  const value5 = Number(document.querySelector('#PLAYER5').value);

  let textAVG = document.querySelector('p#avgmmr')
  var avg = Number(((value1 + value2 + value3 + value4 + value5) / 5).toFixed(0));

  textAVG.innerText = `MÉDIA DE MMR: ~${avg}`

  calcularMedianadiv()
  function calcularMedianadiv() {

  const mmrs = [10, 154, 308, 462, 616, 770, 924, 1078, 1232, 1386, 1540, 1694, 1850, 2010, 2170, 2320, 2470, 2620, 2785, 2930, 3080, 3234, 3388, 3542, 3696, 3850, 4004, 4158, 4312, 4466, 4620, 4820, 5020, 5220, 5420, 5680, 6500, 7000, 7500, 8000]

  let closest = mmrs.reduce(function(prev, curr) {
    return (Math.abs(curr - avg) < Math.abs(prev - avg) ? curr : prev);
  });

  let imgElement = document.querySelector('img#imgavg')
    imgElement.setAttribute('src', `imgs/${closest}.webp`);
  }

  let textdiv1 = document.querySelector('p#div1text')
  let textdiv2 = document.querySelector('p#div2text')


  if (value1 > 4466 || value2 > 4466 || value3 > 4466 || value4 > 4466 || value5 > 4466) {
    var check = true
  } else {
    var check = false
  }

  if (avg < 3500 && check == false) {
    textdiv1.innerText = "DIVISÃO 1 ✅"
    textdiv2.innerText = "DIVISÃO 2 ✅" 
  } else if (avg <= 6000) {
    textdiv1.innerText = "DIVISÃO 1 ✅"
    textdiv2.innerText = "DIVISÃO 2 ❌"
  } else {
    textdiv1.innerText = "DIVISÃO 1 ❌"
    textdiv2.innerText = "DIVISÃO 2 ❌"
  }
}

function medal1() {
  let value = document.querySelector('#PLAYER1').value;
  let imgElement = document.querySelector('img#imgp1')
  let textMMR = document.querySelector('p#player1MMR')
  let textAlert = document.querySelector("p#player1warning")

  imgElement.setAttribute('src', `imgs/${value}.webp`);
  textMMR.innerText = `MMR: ~${value}`

  if (value >= 4620) {
    textAlert.innerHTML = "🚫 DIV2"
    console.log(value)
  } else if (value <= 4466 && value >= 10) { 
    textAlert.innerHTML = "✅ DIV2"
    console.log(value)
  } else {
    textAlert.innerHTML = "❔ DIV2"
    console.log(value)
  }

  calcularMedia()
}

function medal2() {
  let value = document.querySelector('#PLAYER2').value;
  let imgElement = document.querySelector('img#imgp2')
  let textMMR = document.querySelector('p#player2MMR')
  let textAlert = document.querySelector("p#player2warning")

  imgElement.setAttribute('src', `imgs/${value}.webp`);
  textMMR.innerText = `MMR: ~${value}`

  if (value >= 4620) {
    textAlert.innerHTML = "🚫 DIV2"
    console.log(value)
  } else if (value <= 4466 && value >= 10) { 
    textAlert.innerHTML = "✅ DIV2"
    console.log(value)
  } else {
    textAlert.innerHTML = "❔ DIV2"
    console.log(value)
  }

  calcularMedia()
}

function medal3() {
  let value = document.querySelector('#PLAYER3').value;
  let imgElement = document.querySelector('img#imgp3')
  let textMMR = document.querySelector('p#player3MMR')
  let textAlert = document.querySelector("p#player3warning")

  imgElement.setAttribute('src', `imgs/${value}.webp`);
  textMMR.innerText = `MMR: ~${value}`

  if (value >= 4620) {
    textAlert.innerHTML = "🚫 DIV2"
    console.log(value)
  } else if (value <= 4466 && value >= 10) { 
    textAlert.innerHTML = "✅ DIV2"
    console.log(value)
  } else {
    textAlert.innerHTML = "❔ DIV2"
    console.log(value)
  }

  calcularMedia()
}

function medal4() {
  let value = document.querySelector('#PLAYER4').value;
  let imgElement = document.querySelector('img#imgp4')
  let textMMR = document.querySelector('p#player4MMR')
  let textAlert = document.querySelector("p#player4warning")

  imgElement.setAttribute('src', `imgs/${value}.webp`);
  textMMR.innerText = `MMR: ~${value}`

  if (value >= 4620) {
    textAlert.innerHTML = "🚫 DIV2"
    console.log(value)
  } else if (value <= 4466 && value >= 10) { 
    textAlert.innerHTML = "✅ DIV2"
    console.log(value)
  } else {
    textAlert.innerHTML = "❔ DIV2"
    console.log(value)
  }

  calcularMedia()
}

function medal5() {
  let value = document.querySelector('#PLAYER5').value;
  let imgElement = document.querySelector('img#imgp5')
  let textMMR = document.querySelector('p#player5MMR')
  let textAlert = document.querySelector("p#player5warning")

  imgElement.setAttribute('src', `imgs/${value}.webp`);
  textMMR.innerText = `MMR: ~${value}`

  if (value >= 4620) {
    textAlert.innerHTML = "🚫 DIV2"
    console.log(value)
  } else if (value <= 4466 && value >= 10) { 
    textAlert.innerHTML = "✅ DIV2"
    console.log(value)
  } else {
    textAlert.innerHTML = "❔ DIV2"
    console.log(value)
  }

  calcularMedia()
}

