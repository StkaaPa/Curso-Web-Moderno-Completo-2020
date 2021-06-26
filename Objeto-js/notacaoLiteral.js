const a = 1;
const b = 2;
const c = 3;

// antes para criar um objeto com os valores da constante era desta maneira
const obj1 = { a: a, b: b, c: c };

// mas agora não é necessario fazer isso, simplesmente coloca-se o nome da constante
const obj2 = { a, b, c };


console.log(obj1, obj2)
/*
{ a: 1, b: 2, c: 3 } -- obj1
{ a: 1, b: 2, c: 3 } -- obj2
*/

const nomeAtr = 'Nota'
const valorAtr = 7.00

const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)
// -> { Nota: 7}


// é possivel fazer de outra maneira, ou seja, colocando as variaveis dentro de chavetas
// quase como se tivesse a criar um objeto normal
const obj4 = {[nomeAtr]: valorAtr}
console.log(obj4)
// -> { Nota: 7} 


// houve tambem mudanças a nivel de declaracao de funções dentro de objetos
const obj5 = {
    // forma antiga 
    funcao1: function() {
        //....
    },
    //forma nova -- forma reduzida
    funcao2 (){
        //...
    }
}
console.log(obj5)
// -> { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }