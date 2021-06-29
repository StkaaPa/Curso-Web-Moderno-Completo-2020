const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

//! o indice é sempre passado como segundo parametro
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1} ${nome}`);
  /*
    1 Agatha
    2 Aldo
    3 Daniel
    4 Raquel
    */
});

//* se não quiseremos imprimir o indice apenas passamos um parametro
aprovados.forEach((nome) => console.log(nome));
/*
Agatha
Aldo
Daniel
Raquel
*/

//* ARMAZENAR A FUNÇÃO NUMA VARIAVEL E PASSAR ESSA FUNÇÃO NO forEach()
const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
/*
Agatha
Aldo
Daniel
Raquel
*/
