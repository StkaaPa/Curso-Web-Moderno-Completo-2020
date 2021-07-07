const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

// como o node tem cache, tudo o que eu mudar no contadorA vai aparecer no contadorB
contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);
// -> 3

contadorC.inc();
contadorC.inc();
//! o contadorC = 3, mas o contadorD = 1
//! porque foram criadas novas instancias apartir de uma funçao factory
console.log(contadorC.valor, contadorD.valor);
