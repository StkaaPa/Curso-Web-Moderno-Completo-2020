const anonimo = process.argv.indexOf("-a") !== -1;
// console.log(anonimo)

if (anonimo) {
  //* stdout -> standard output (output padrão)
  process.stdout.write("Fala Anônimo!\n");
  //* se no terminal colocar node entradaESaida.js -a
  //* vai ser imprimido a mensagem "Fala Anônimo!"
  process.exit();
} else {
  process.stdout.write("Informe o seu nome: ");
  process.stdin.on("data", (data) => {
    const nome = data.toString().replace("\n", "");
    process.stdout.write(`Fala ${nome}\n`);
    process.exit();
  });
}
