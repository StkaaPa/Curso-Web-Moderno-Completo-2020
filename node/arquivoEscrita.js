const fs = require("fs");

//* para guardar este objeto no "disco", é necessario transformar o objeto num texto
//* para isso utiliza-se a funcao JSON.stringfy()
const produto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.15,
};

// coloca-se (__dirname + "o nome do arquivo que quero criar", JSON.stringfy(nome do objeto), err => {})
fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(produto),
  (err) => {
    console.log(err || "Arquivo Salvo!!");
  }
);

//* AO EXECUTAR O CODIGO PELA PRIMEIRA VEZ, PODEMOS VERIFICAR QUE O FICHEIRO "arquivoGerado.json" NÃO EXISTIA
//* DEPOIS DE EXECUTAR O CÓDIGO O FICHEIRO FOI CRIADO COM O OBJETO EM FORMATO TEXTO
