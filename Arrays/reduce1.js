//! reduce - é um acumulador para a nova interação
/*
! por exemplo somar os numero de um array
! [1,2,3,4,5], o reduce vai fazer 1 + 2, depois faz 3 + 3, depois 6 + 4, depois faz 10 + 5
*/

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

//* este console.log o que faz é imprimir um array com todas as notas dos alunos
console.log(alunos.map((a) => a.nota));
// -> [7.3, 9.2, 9.8, 8.7]

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    /*
     * este console.log() o que vai fazer é:
     * o primeiro valor a ser imprimido é 7.3 (acumulador) 9.2(atual)
     * depois o segundo valor a ser imprimido vai ser 7.3 + 9.2 = 16.5(acumulador) 9.8(atual)
     * depois imprimi 16.5 + 9.8 = 26.3(acumulador) 8.7(atual)
     */
    console.log(acumulador, atual);
    /*
    7.3 9.2
    16.5 9.8
    26.3 8.7
    */
    return acumulador + atual;
    //! ao colocar um valor inicial, neste caso 10
    //! o primeiro valor a ser imprimido é 10(acumulador) 7.3(atual)
    //! o restante processo é igual ao que está explicado acima
  }); //,10);
//* este console.log() vai imprimir o ultimo resultado ou seja 26.3 + 8.7 = 35
console.log(resultado);
// -> 35
