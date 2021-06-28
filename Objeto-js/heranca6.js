function aula(nome, videoId) {
  this.nome = nome;
  this.videoId = videoId;
}

const aula1 = new aula("Bem vindo", 123);
const aula2 = new aula("Bem vindo", 456);
console.log(aula1, aula2);
/*
-> aula { nome: 'Bem vindo', videoId: 123 }
-> aula { nome: 'Bem vindo', videoId: 456 }
*/

//TODO: simulando o new
//* '...' - operador que faz a concatenação dos parametros num array
function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}
const aula3 = novo(aula, "Bem vindo", 123);
const aula4 = novo(aula, "Até breve", 456);
console.log(aula3, aula4);
/*
-> aula { nome: 'Bem vindo', videoId: 123 }
-> aula { nome: 'Até breve', videoId: 456 }
*/
