function Pessoa() {
    this.idade = 0

    const self = this
    //executa uma outra função a partir do intervalo que foi definido
    setInterval(function() {
        self.idade++;
        console.log(self.idade)
        //significa que a cada 1000ms = 1s, a funcao vai ser executada
    }.bind(this), 1000)
}

new Pessoa 

// -> 1, 2, 3, 4, 5, 6