const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

// em let já imprime os valores corretos porque let tem scoop de bloco
funcs[2]();
funcs[8]();
