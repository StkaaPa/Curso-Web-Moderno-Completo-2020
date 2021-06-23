function aluno(codigo, nota1, nota2, nota3) {
  //criar um array vazio e em seguida fazer um push das notas introduzidas para array notas
  let notas = [];
  notas.push(nota1);
  notas.push(nota2);
  notas.push(nota3);
  notas.sort((a, b) => (a < b ? 1 : -1));

  // o peso para a maior nota seja 4 e para as duas restantes, 3
  //dividir por 10 para dar um numero entre 0 e 5 (pior e melhor nota respetivamente)
  let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;
  console.log(
    `Código Aluno: ${codigo}. 
    Notas: ${nota1}, ${nota2}, ${nota3}. 
    Media: ${media.toFixed(2)} valores, está ${
      media < 5 ? "Reprovado" : "Aprovado"
    }`
  );
}

//considerando notas de 0 a 20
aluno(120, 4.8, 7.9, 11);
/*
Código Aluno: 120. 
    Notas: 4.8, 7.9, 11. 
    Media: 8.21 valores, está Aprovado
*/
aluno(92, 2.8, 3.9, 5.0);
/*
Código Aluno: 92. 
    Notas: 2.8, 3.9, 5. 
    Media: 4.01 valores, está Reprovado
*/
aluno(112, 9.8, 12.9, 11.6);
/*
Código Aluno: 112. 
    Notas: 9.8, 12.9, 11.6. 
    Media: 11.58 valores, está Aprovado
 */
aluno(120, 15, 14, 18);
/*
Código Aluno: 120. 
    Notas: 15, 14, 18. 
    Media: 15.90 valores, está Aprovado
*/
