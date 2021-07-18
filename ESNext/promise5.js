function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log("tempo");
      if (Math.random() < chanceErro) {
        //Math.random produz um numero entre 0 e 1
        //se colocarmos a chance de erro com 0,8 siginfica este if tem 80% de probabilidade de acontecer
        //se colocar 1 significa que há 100% de probabilidade de este if acontecer
        // se colocar 0, o numero random vai ser sempre maior que zero por isso retorna false
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
}

funcionarOuNao("Testando!", 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log("Quase Fim!!"))
  .catch((err) => console.log(`Erro Geral: ${err}`))
  .then(() => console.log("Fim!! "));
