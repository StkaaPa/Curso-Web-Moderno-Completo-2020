//par/nome/valor

const saudacao = 'Opa' //contexto léxico 1- local fisico do código onde a variavel foi definida

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao;
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        morada: 'Braga',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)