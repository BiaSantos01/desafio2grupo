function encontrarViceCampeao() {
  const pontuacoesInput = document.getElementById("pontuacoes").value;
  const pontuacoes = pontuacoesInput.split(",").map(Number);

  if (pontuacoes.length !== 3) {
    alert("Digite exatamente três pontuações separadas por vírgula.");
    return;
  }
  const [a, b, c] = pontuacoes;
  const maxPontuacao = Math.max(a, b, c);
  const minPontuacao = Math.min(a, b, c);

  let viceCampeaoPontuacao;

  if (a !== maxPontuacao && a !== minPontuacao) {
    viceCampeaoPontuacao = a;
  } else if (b !== maxPontuacao && b !== minPontuacao) {
    viceCampeaoPontuacao = b;
  } else {
    viceCampeaoPontuacao = c;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `A pontuação do vice-campeão é: ${viceCampeaoPontuacao}`;
}