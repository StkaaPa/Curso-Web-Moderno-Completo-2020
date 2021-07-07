//* para retornar uma nova instância podemos utilizar a função factory

module.exports = () => {
    return {
        valor: 1,
        inc (){
            this.valor++
        }
    }
}