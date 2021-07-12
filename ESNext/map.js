//* num objeto, a chave é uma string, no caso do map a chave pode ser uma função, um número, um objeto
//* Há uma maior flexibilidade ao usar o map

const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

//* para imprimir um dos valores acima inseridos não se deve fazer assim:
console.log(tecnologias.react);
// -> isto resulta em undefined

//* deve-se sim fazer assim:
console.log(tecnologias.get("react"));
// -> { framework: false }

const chavesVariados = new Map([
  [function () {}, "função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

chavesVariados.forEach((valor, chave) => {
  console.log(chave, valor);
  /*
    [Function (anonymous)] função
    {} Objeto
    123 Número
    */
});

//* usando a função has() ---- função que diz se um elemento está ou não contido dentro do Map
console.log(chavesVariados.has(123));
// -> true

//* pode-se eliminar elementos de um map atraves do delete()
chavesVariados.delete(123); //! a função delete retorna true ou false
console.log(chavesVariados.has(123));
// -> false

//* a função size() mostra o numero de elementos dentro de um Map
console.log(chavesVariados.size);
// -> 2 elementos no Map

//! IMPORTANTE A CHAVE NÃO ACEITA REPETIÇÃO, MAS OS VALORES ACEITAM
//! EXMPLO:
chavesVariados.set(123, "a");
chavesVariados.set(123, "b"); //! como nao aceita repetição o valor 'b' vai sobrepor o valor 'a'
chavesVariados.set(456, "b"); //! já os valores podem ser repetidos
console.log(chavesVariados);
/*
Map(4) {
  [Function (anonymous)] => 'função',
  {} => 'Objeto',
  123 => 'b',
  456 => 'b'
}
*/
