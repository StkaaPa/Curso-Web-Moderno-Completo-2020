//* ao colocar (...nomes), significa que vou poder passar quantos nomes eu quiser
module.exports = function (...nomes) {
  return nomes.map((nome) => `Boa Semana ${nome}!`);
};
