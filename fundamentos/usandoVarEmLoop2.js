const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

//vai sempre imprimir 10 que é o valor que faz parar o ciclo for, porque var nao tem scoop de função
funcs[2]();
funcs[8]();
