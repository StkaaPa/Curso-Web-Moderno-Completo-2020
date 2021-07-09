// declarar uma porta (cada porta é unica por processo)
const port = 3003;

//*  aqui vai ser carregado o ficheiro index.js presente no modulo express
const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");
const bodyParser = require("body-parser");

// app.get("/produtos", (req, res, next) => {
//   console.log("Middlewares 1....");
//   next(); //* se comentar o next(), simplesmente imprime no console Middlewares 1.... e nem sequer manda a resposta do get
// });

//! é preciso passar extend: true se nao aparece uma mensagem de advertencia
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos()); //* este objeto vai ser convertido para json atraves do metodo send()
});

//! na url nao vai aparacer /produtos/:id mas sim /produtos/:(valor do id)
app.get("/produtos/:id", (req, res, next) => {
  //* req.params é o local onde estão os parametros que eu coloquei no url
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  //* guardar um produto no bancoDeDados
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // isto vai converte o objeto em json
});

//*  alterar os dados
app.put("/produtos/:id", (req, res, next) => {
  //* guardar um produto no bancoDeDados
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // isto vai converte o objeto em json
});

//* excluir dados
app.delete("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.excluirProdutos(req.params.id);
  res.send(produto); // isto vai converte o objeto em json
});

app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}`);
});
