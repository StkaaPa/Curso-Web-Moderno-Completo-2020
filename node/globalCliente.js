//* para que o global.js coloque algo no scoop global, é necessário importar
require("./global");

//! não é necessario colocar global.MinhaApp.saudacao()
console.log(MinhaApp.saudacao());

//! um grave problema é que podemos mudar valores do scoop global
MinhaApp.nome = "Eita!!";
//! aqui deixou de ser 'Sistema Legal' e passou a ser 'Eita!'
console.log(MinhaApp.nome);
//* uma maneira de contrariar isso é utlizar a funcao freeze
//* como no ficheiro global.js colocamos a função freeze, os valores já nao podem ser mudados
//* ou seja no console.log acima em vez de aparecer Eita! volta a aparecer Sistema Legal!!
