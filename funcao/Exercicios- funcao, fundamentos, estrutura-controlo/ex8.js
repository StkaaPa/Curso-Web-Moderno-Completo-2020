let stringPontos = "10, 20, 20, 8, 25, 3, 0, 30, 1";

function avaliarPontos(stringPontos) {
  let pontuacoes = stringPontos.split(", ");
  let jogoRecorde = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontuacoes[0];
  let menorPontuacao = pontuacoes[0];

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
      maiorPontuacao = pontuacoes[i];
      jogoRecorde++;
    } else if (pontuacoes[i] < menorPontuacao) {
      menorPontuacao = pontuacoes[i];
      piorJogo = i + 1;
    }
  }
  return [jogoRecorde, piorJogo];
}

console.log(avaliarPontos(stringPontos));
// -> [2, 7]
/*
Sendo que 2 é o numero de vezes que o recorde foi batido
e 7 significa que o pior resultado foi feito ao 7 jogo
*/