//funcao anonima é uma funcao que nao tem nome
const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4);
// -> 7
imprimirResultado(3, 4, soma)
// -> 7
imprimirResultado(3, 4, function (x, y){
    return x - y;
})
// -> -1
//a funcao arrow é sempre anónima
imprimirResultado(3, 4, (x, y) => x * y)
// -> 12

const pessoa = {
    falar: function() {
        console.log('Opa!!!!')
    }
    //tambem pode ser escrito da seguinte maneira:
    /*
    fala(){
        console.log('Opa!!!!)
    } 
    */
}