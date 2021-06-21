//closure é o scoop criado quando uma função é declarada
//Esse scoop permite a função acessar e manipular variáveis externas à função

//Contexto Léxico em ação!!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())
// -> Local