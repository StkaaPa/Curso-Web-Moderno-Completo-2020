const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

//TODO: IMRPIMIR A MULHER CHINESA COM MENOR SALARIO

const china = (f) => f.pais === "China";
const mulheres = (f) => f.genero === "F";
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

//* fazer uma requisição deste url e no final vou ter o conteudo do url no meu código
axios.get(url).then((response) => {
  const funcionarios = response.data;
  //console.log(funcionarios);

  const resultado = funcionarios
    .filter(china)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(resultado);
});
