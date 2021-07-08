//* é necessario fazer um require do modulo fs (file system - é um módulo interno do node)
const fs = require("fs");

//* __dirname é uma constante que está presente em todos os arquivos do node
const caminho = __dirname + "/arquivo.json";

//* ler um arquivo de form a síncrona
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);
//! aqui vai ser imprimido o conteudo presente no arquivo.json criado anteriormente

//* ler um arquivo de forma assíncrona (só carrega o conteudo assincrono através de um callback, quando todo o conteudo do ficheiro tiver carregado)
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  //! para tornar config num objeto é necessario utilizar JSON.parse()
  const config = JSON.parse(conteudo);
  //! o console.log abaixo só funciona se config for um objeto
  console.log(`${config.db.host}:${config.db.port}`);
  // -> localhost:5432
});

//* para o formato JSON existe uma forma mais fácil de ler um arquivo
//* não é necessario importar o fs nem utilizar o readFile()

const config = require("./arquivo.json");
console.log(config.db);
//! este console.log vai ser executado primeiro que o console.log da função assíncrona

//* Ler uma pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log("Conteudo da Pasta...");
  console.log(arquivos);
});
