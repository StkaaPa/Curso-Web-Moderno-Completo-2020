function funcaoDaSorte(numero) {
  const min = 1;
  const max = 10;

  const numeroAletatorio = Math.floor(Math.random() * (max - min + 1) + min);
  /*
    if(numeroAletatorio === numero) { 
        return `Parabéns! O número sorteado foi o ${numeroAletatorio}.`
    } else {
        return `Que pena!! O numero sorteado foi ${numeroAletatorio}`
    } */

  //* também é possível fazer com o operador ternário
  return numeroAletatorio == numero
    ? `Parabéns! O número sorteado foi o ${numeroAletatorio}.`
    : `Que pena!! O numero sorteado foi o ${numeroAletatorio}`;
  return numeroAletatorio;
}

console.log(funcaoDaSorte(10));
