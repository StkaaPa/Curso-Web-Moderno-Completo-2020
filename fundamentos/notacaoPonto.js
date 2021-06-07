//usa-se o ponto final para acessar uma funcao definido dentro do objeto Math.ceil
console.log(Math.ceil(6.1));

const obj1 = {};
//aqui igual, utiliza-se o ponto final para criar o atributo name no objeto obj1
obj1.name = "Bola";
/*
outra maneira de fazer isso é:
obj1["name"] = "Bola2";
*/
console.log(obj1.name);

function Obj(nome) {
  //ao usar vai tornar o atributo nome público
  //funciona como um scoop global
  this.nome = nome;
  this.exec = function () {
    console.log("Exec....");
  };
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
