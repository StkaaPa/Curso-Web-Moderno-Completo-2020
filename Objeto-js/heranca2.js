//TODO: Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = "0"; //! EVITAR FAZER ISTO

//* o avo tem como prototipo o Object.prototype
const avo = {
  attr1: "A",
};

//* o pai tem como protitpo o avo
const pai = {
  __proto__: avo,
  attr2: "B",
};

//* o filho tem como prototipo o pai
const filho = {
  __proto__: pai,
  attr3: "C",
};

console.log(filho.attr1);
// -> A
console.log(filho.attr0);
// -> 0
console.log(filho.attr2);
// -> B
console.log(filho.attr3);
// -> C

//TODO: EXEMPLO MAIS COMPLEXO

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, //! shadowing - uma variavel interna subescreve uma variavek externa
  //! ou seja a velMax na função é 200 mas no objeto é 324, o que prevalece é a velMax do Obejto (324)
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
    //! - se utilizar o this em vez de super, ele fica invocando recursivamente o mesmo metodo
    //! - mas o que eu quero é usar o metodo do prototipo e por isso uso o super
  },
};

//* estabelecer a relação de prototipos
Object.setPrototypeOf(ferrari, carro);
//! - ferrari tem carro como prototipo ( ferrari é filho de carro)
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
// -> { modelo: 'F40', velMax: 324 }
console.log(volvo)
// -> { modelo: 'V40', status: [Function: status] }


volvo.acelerarMais(100)
console.log(volvo.status())
// -> V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status())
// -> 300Km/h de 324Km/h