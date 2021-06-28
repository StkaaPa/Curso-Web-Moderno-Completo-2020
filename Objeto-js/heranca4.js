function MeuObjeto() {}
console.log(MeuObjeto.prototype);
// -> {}

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
//* dois objetos diferentes criados apartir da mesma funcao construtora, os prototipos desses objetos apontam para o mesmo objeto
console.log(obj1.__proto__ === obj2.__proto__);
// -> true
console.log(MeuObjeto.prototype === obj1.__proto__);
// -> true
/*
!- quando se cria um objeto apartir de uma função construtora
!- usando o "new", o protótipo desse objeto, neste caso obj1
!- aponta automaticamente para função.prototype, que neste caso é
!- MeuObjeto.prototype
*/

MeuObjeto.prototype.nome = "Anónimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};

obj1.falar();
// -> Bom dia! Meu nome é Anónimo!
obj2.nome = "Rafael";
obj2.falar();
// -> Bom dia! Meu nome é Rafael!

const obj3 = {};
//*  basicamente estou a mudar o __proto__ de obj3 de Objetc.prototype para MeuObjetc.prototype
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "obj3";
obj3.falar();
// -> Bom dia! Meu nome é obj3!

//TODO: RESUMO DE TUDO:
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
// -> true
console.log(MeuObjeto.__proto__ === Function.prototype);
// -> true
console.log(Function.prototype.__proto__ === Object.prototype);
// -> true
console.log(Object.prototype.__proto__ === null);
// -> true
