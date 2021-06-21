let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

//escrita de funcao muito utilizada apenas quando há uma linha
//muito utilizada em funções especificas
dobro = (a) => 2 * a;

console.log(dobro(Math.PI));

let ola = function () {
  return "Olá!!!!";
};

ola = () => "Olá!!!";
ola = _ => 'Olá!!!' //possui um param

console.log(ola())
