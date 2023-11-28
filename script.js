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
  }
  