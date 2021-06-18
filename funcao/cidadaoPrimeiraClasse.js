// Função em JS é First-Class Object (Citizens)
// High-Order Function

//declarar uma funcao de forma literal
//o retorno é opcional, mas se não retornar nada a função imprime UNDEFINED
function func1() {}

// Armazenar um função numa variavel
// atribuir a função anónima à constante func2
const func2 = function () {};

//Armazenar uma função num array
const array = [
  function (a, b) {
    return a + b;
  },
  func1,
  func2,
];
console.log(array[0](2, 3));

//atribuir uma função a um atributo de um objeto
const obj = {};
obj.falar = function () {
  return "Opa!!!";
};
console.log(obj.falar());

//Passar função como parametro para outra função
function run(func) {
  func();
}

run(function () {
  console.log("Executando....");
});

//uma função pode retornar/conter uma outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2,3)(4)
// -> (2 + 3) + 4 = 9
//outra forma de fazer seria
const cincoMais = soma(2,3)
cincoMais(4)