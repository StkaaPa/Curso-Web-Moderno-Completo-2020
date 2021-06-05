var numero = 1
{
    let numero = 2
    //com o let, o scoop da variavel é individual ou seja aqui vai imprimir o numero 2, mas no outro console vai imprimir o numero 1
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* ---------- LET ----------------
- scoop global;
- scoop de função;
- scoop de bloco;
*/