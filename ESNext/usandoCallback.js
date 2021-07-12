//*  neste ficheiro foram usados 3 ficheiros json acessados localmente

//TODO: EXTRAIR OS NOMES DOS 3 FICHEIROS

//* SEM UTILIZAR PROMISE ....
const http = require("http");

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, (res) => {
    let resultado = "";
    res.on("data", (dados) => {
      resultado += dados;
    });

    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

let nomes = [];
getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  console.log(nomes);
  //* aqui vai só imprimir os nomes da turma A
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    console.log(nomes);
    //* aqui vai imprimir os nomes da turma A e B
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
      console.log(nomes);
      //* aqui vai imprimir os nomes da turma A, B e C
    });
  });
});
