function compras(trabalho1, trabalho2) {
    const compraGelado = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalh1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !compraGelado; //operador unario
  
    return { compraGelado, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));
// -> true, true, false, false

console.log(compras(true, false));
// -> true, false, true, fasle

console.log(compras(false, true));
// -> true, false, true, false

console.log(compras(false, false));
// -> false, false, false, true
