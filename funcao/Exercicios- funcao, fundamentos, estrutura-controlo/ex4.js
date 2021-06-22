function restoDivisao(dividendo, divisor) {
  console.log("Resultado:" + Math.floor(dividendo / divisor));
  console.log(`Resto: ${dividendo % divisor}`);
}

restoDivisao(50, 4);
//-> resultado: 12 resto: 2
// 12 * 4 = 48  logo o resto é igual a 2
