const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        //o this aqui esta a acessar o dono da função, ou seja neste caso const pessoa
        //se retirarmos o this, ao tentar executar pessoa.falar vai dar erro, porque saudacao é undefined
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO (orientação a objetos)

//o bind aqui signifca que sempre que a funcao falarDePessoa for chamada, vai ter como referencia o this da const pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()