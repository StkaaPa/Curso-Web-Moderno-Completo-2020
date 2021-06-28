const pai = {
  nome: "pedro",
  corCabelo: "preto",
};

const filha1 = Object.create(pai); //* criou um objeto novo tendo como prototipo o objeto pai
filha1.nome = "Ana";
console.log(filha1.corCabelo);
// -> preto

const filha2 = Object.create(pai, {
  nome: {
    value: "Bia",
    writable: false /* não vai aceitar ser mudadao*/,
    enumerable: true /*aceita ser listado*/,
  },
});

console.log(filha2.nome);
// -> Bia
filha2.nome = "Carla"; //! como writable = false, o nome carla nao vai subscrever o nome Bia
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);
// -> Bia tem cabelo preto

console.log(Object.keys(filha1));
// -> [ 'nome' ]
console.log(Object.keys(filha2));
// -> [ 'nome' ]

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por heranca: ${key}`);
    /*
    nome
    Por heranca: corCabelo
    */
}
