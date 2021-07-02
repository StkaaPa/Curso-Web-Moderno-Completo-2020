function removerVogais(palavra) {
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  vogais.forEach((vogal) => (palavra = palavra.replace(vogal, "")));
  return palavra;
}

console.log(removerVogais("Cod3r"));
// -> Cd3r
console.log(removerVogais("Fundamentos"));
// -> Fndmnts
console.log(removerVogais("TecnolOgias"));
// -> Tcnlgs
console.log(removerVogais("InformaticA"));
// -> nfrmtc
