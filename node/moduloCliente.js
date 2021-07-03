//! NESTE FICHEIRO VÃO SER ACESSADAS AS INFORMAÇÕES DOS FICHEIROS moduloA.js e moduloB.js
//! para ter as pastas exportadas é necessário usar "./require"

const moduloA = require("./moduloA"); //* foram exportados a variavel ola, bemVindo e ateLogo
const moduloB = require("./moduloB"); //* foram exportados a variavel bomDia e a funcao boaNoite

console.log(moduloA.ola);
// -> Fala Pessoal!
console.log(moduloA.bemVindo);
// -> Bem Vindo ao Node!
console.log(moduloA.ateLogo);
// -> Até ao Próximo Exemplo!
console.log(moduloA);
/*
{
  ola: 'Fala Pessoal!',
  bemVindo: 'Bem Vindo Ao Node!',
  ateLogo: 'Até ao Próximo Exemplo!'
}
*/

console.log(moduloB.bomDia);
// -> Bom Dia!
console.log(moduloB.boaNoite());
// -> Boa Noite!
console.log(moduloB);
// -> { bomDia: 'Bom Dia!', boaNoite: [Function: boaNoite] }
