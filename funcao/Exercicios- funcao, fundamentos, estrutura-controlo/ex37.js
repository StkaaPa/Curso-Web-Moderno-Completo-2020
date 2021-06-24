function porgressaoAritmetrica(n, a1, r) {
  for (let i = 0; i < n; i++) {
      // no lugar, na formula é n-1 mas aqui coloca-se o i porque o i começa em zero, e como n-1 para elemento é 0, colac-se o i
    console.log(a1 + i * r);
  }
  //já aqui o i é substituido por n-1 porque o i apenas é acessado dentro do ciclo for
  console.log("Soma: " + (n * (a1 + (a1 + ((n-1) * r)))) / 2);
}

function progressaoGeometrica(n, a1, r) {
  for (let i = 0; i < n; i++) {
    console.log(a1 * r ** i);
  }
  console.log("Soma: " + (a1 * (1 - r ** n)) / (1 - r));
}

progressaoGeometrica(5, 5, 2);
porgressaoAritmetrica(5, 5, 2);
