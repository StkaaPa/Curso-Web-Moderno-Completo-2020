// declarar uma porta (cada porta é unica por processo)
const port = 3003;

//*  aqui vai ser carregado o ficheiro index.js presente no modulo express
const express = require("express");
const app = express();

// app.get("/produtos", (req, res, next) => {
//   console.log("Middlewares 1....");
//   next(); //* se comentar o next(), simplesmente imprime no console Middlewares 1.... e nem sequer manda a resposta do get
// });

app.get("/produtos", (req, res, next) => {
  res.send({ nome: "Notebook", preco: 1234.45 }); //* este objeto vai ser convertido para json atraves do metodo send()
});

app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}`);
});
