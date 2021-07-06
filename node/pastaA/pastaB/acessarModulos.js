//! se no require colocar um module que não exista
//! irá aparecer um erro - Cannot find module ......

const moduloA = require("../../moduloa"); //! o nome correto é moduloA mas em windows não importa se tiver escrito tudo em letra minusula
console.log(moduloA.ola);
// -> Fala Pessoal!

//* Depois de criar um novo modulo na pasta node_modules
//* essa mesma pasta pode ser acessada através do require(nome da pasta)
//! não é ncessario escrever o path como no exemplo anterior
const saudacao = require("saudacao");
console.log(saudacao.ola);
// -> Bom Dia Pessoal!!

const c = require("./pastaC/index");
console.log(c.ola2);
// -> Legal!!

// const http = require("http");
// http
//   .createserver((req, res) => {
//     res.write("bom dia!");
//     res.end();
//   })
//   .listen(8080);
