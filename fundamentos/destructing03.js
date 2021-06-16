function rand({ min = 0, max = 1000 } = {})  {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
//vai gerar um numero random entre 50 e 40 cada vez que é executado
console.log(rand(obj));
//vai gerar um numero random entre 955 e 1000 porque como só defimi o min: 955 o valor padrao do max é 1000
console.log(rand({ min: 955 }));
//vai gerar um numero random entre 0 e 1000 porque são os valores padrao
console.log(rand({}));
//nao vai imprimir nada
console.log(rand())
