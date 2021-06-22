// IIFE -> Immediately Invoked Function Expression
//padrão muito usado para fugir do scoop global
(function (){
    //tudo o que for criado aqui dentro apenas é acessível dentro da função
    consoele.log('Será executado na hora!!!')
    consoele.log('Foge do scoop mais abrangente!!')
})