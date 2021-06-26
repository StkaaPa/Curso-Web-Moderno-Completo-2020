const sequencia = {
  _valor: 1, //conveção ao ter o underline mostra que é uma variavel que só vai poder ser acessada internamente
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor, sequencia.valor);
// -> 1 2

//se mudarmos o valor para 100 por exemplo
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
//-> 1000 1001

sequencia.valor = 900;
// o valor 900 foi ignorado porque 900 < 1000, logo ignora o valor 900 e incrementa +1 +1 a 1000 e 1001
console.log(sequencia.valor, sequencia.valor);
//-> 1002 1003
