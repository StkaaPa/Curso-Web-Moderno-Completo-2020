function real(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
}
const preco = 29.99;
const precoParcela = 11;
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
//! se não colocar real, precoParcela vai imprimir 11
//! ao colocar real, precoParcela vai imprimir R$11.00
// -> 1x de 29.99 ou 3x de 11 ---- sem real
// -> 1x de R$29.99 ou 3x de R$11.00 ---- com real
