// é uma função que retorna um objeto
// factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())
// -> { nome: 'Ana', sobrenome: 'Silva' }