const ferrari = {
  nome: "F40",
  velMax: 324,
};

const volvo = {
  nome: "V40",
  velMax: 200,
};

// apartir de __proto__ consigo acessar o prototipo deste objeto que é ferrari
// ou seja se tentar procurar um atributo em ferrari que não exista ele vai procurar esse mesmo atributo no prototipo (objeto pai de ferrari)
console.log(ferrari.__proto__);
// -> [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype);
// -> true
console.log(volvo.__proto__ === Object.prototype);
// -> true
console.log(Object.prototype.__proto__ === null);
// -> true

//* A FORMA PARA ACESSAR O ATRIBUTO DENTRO DO OBJETO É "__proto__"
//! prototype está presente apenas dentro de funções
/**
* ! - se no primeiro console.log fizer:
* ! - console.log(ferrari.prototype)
* ! - o resultado é undefined
*/

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
// -> function function
console.log(Object.prototype, MeuObjeto.prototype);
// -> [Object: null prototype] {} MeuObjeto {}
