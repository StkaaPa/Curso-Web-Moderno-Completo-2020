function procurarPalavraSemelhante(palavra, array) {
    return array.filter((palavras) => palavras.includes(palavra))
}

console.log(procurarPalavraSemelhante("pro", ["programação", "mobile", "profissional"]));
// -> [ 'programação', 'profissional' ]