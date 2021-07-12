//* o For Of incide sobre valores

for (let letras of "Cod3r") {
  console.log(letras);
  /*
    C
    o
    d
    3
    r
   */
}

const assuntosEcma = ["Map", "Set", "Promise"];
//* percorrer o array e imprimir o indice de cada valor
for (let i in assuntosEcma) {
  console.log(i);
  /*
  0
  1
  2
  */
}

for (let assunto of assuntosEcma) {
  //* percorrer o array e imprimir os valores
  console.log(assunto);
  /*
  Map
  Set
  Promise
  */
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

//* VAI IMPRIMIR TANTO A CHAVE COMO O VALOR
for (let assunto of assuntosMap) {
  console.log(assunto);
  /*
    [ 'Map', { abordado: true } ]
    [ 'Set', { abordado: true } ]
    [ 'Promise', { abordado: false } ]
  */
}

//* IMPRIMIR SÓ A CHAVE OU SÓ O VALOR
for (let chave of assuntosMap.keys()) {
  console.log(chave);
  /*
    Map
    Set
    Promise
   */
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
  /*
    { abordado: true }
    { abordado: true }
    { abordado: false }
  */
}

//* usando a função destructing
for (let [chave, valor] of assuntosMap.entries()) {
  console.log([chave, valor]);
  /*
    [ 'Map', { abordado: true } ]
    [ 'Set', { abordado: true } ]
    [ 'Promise', { abordado: false } ]
    */
}

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra);
  /*
    a
    b
    c
  */
}
