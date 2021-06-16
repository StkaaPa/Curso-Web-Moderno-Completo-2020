function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com " + nota);
  }
}

//imprime a msg com a nota
soBoaNoticia(8.1);
//aqui como a nota é menor não imprime nada
soBoaNoticia(6.0);

function seForVerdadeiroEuFalo(valor) {
  if (valor) {
    console.log("É verdade... " + valor);
  }
}

//todos estes 6 exemplos da funcao dão falso, logo não vai imprimir nada
seForVerdadeiroEuFalo();
seForVerdadeiroEuFalo(null);
seForVerdadeiroEuFalo(undefined);
seForVerdadeiroEuFalo(NaN);
seForVerdadeiroEuFalo("");
seForVerdadeiroEuFalo(0); //unico numero que é falso
//tudo para baixo é verdadeiro, ou seja, são todos os possiveis tipos de valores que são verdadeiros
seForVerdadeiroEuFalo(-1);
seForVerdadeiroEuFalo(" ");
seForVerdadeiroEuFalo("?");
seForVerdadeiroEuFalo([]);
seForVerdadeiroEuFalo([1, 2]);
seForVerdadeiroEuFalo({});
