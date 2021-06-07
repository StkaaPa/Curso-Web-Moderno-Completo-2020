//vai imprimir que é uma função
console.log(typeof Object);
//aqui já imprime que é um objeto
console.log(typeof new Object());

const Cliente = function () {};
//vai ser imprimido o mesmo resultado que o de cima para os dois consoles
console.log(typeof Cliente);
console.log(typeof new Cliente());

class Produto {} //ES 2015 (ES6)
//aqui mais uma vez será imprimido o mesmo resultado
console.log(typeof Produto);
console.log(typeof new Produto());
