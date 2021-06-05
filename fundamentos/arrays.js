const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
//ao pesquisar pelo numero que esta na posicao 4, como não existe irá ser retornado undefined
console.log(valores[4]);

//adicionar o valor 10 à posicao 4 do array
valores[4] = 10;
console.log(valores[4]);

/*valores[10] = 5;
console.log(valores[10]);
este ultimo console log vai imprimir os primeiros 5 valores definidos anteriormente,
depois dis que existem 5 elementos vazios e por fim imprime o valor da posição 10 que neste
caso é 5

console.log(valores);*/

//esta funçaõ do array diz quantos elementos tem o array que neste caso são 11
console.log(valores.length);

//o push é usado para adicionar valores ao array
valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

//existem duas formas de eleminar valores
/* 1ª-atraves da função pop que elemina o ultimo valor do array e retorna esse valor no console.log
2ª - atraves da funçao delete que elimina qualquer valor que quiser, especificando a posiçao do valor
*/
console.log(valores.pop());
delete valores[0];
console.log(valores);

//verificar o tipo da variavel valores
console.log(typeof valores);
