//* EM NODE CADA PASTA REPRESENTA UM MÓDULO
//* TUDO O QUE FOR EXCRITO DENTRO DO MÓDULO FICA VISIVEL APENAS DENTRO DO MÓDULO
//* sE QUISER TORNAR ISSO VISIVEL (PUBLICO), É NECESSARIO EXPORTAR

//* ALGUMAS FORMAS DE EXPORTAR ALGO DE DENTRO DE UM MODULO NODE PARA PODER USAR NOUTRA PASTA/FOLDER

// 1ª FORMA
this.ola = "Fala Pessoal!"; //*  apartir do this, a frase 'Fala Pessoal' pode ser acessada noutra pasta
//*  o atributo ola foi criado dentro do this

// 2ª FORMA - através do exports
exports.bemVindo = "Bem Vindo Ao Node!" //* o bemVindo foi criado dentro do exports


// 3ª FORMA - através do module.exports
module.exports.ateLogo = "Até ao Próximo Exemplo!"

//! ao usar o this, exports, module.exports, estamos a criar um objeto com essas 3 variaveis
//! this, exports, module.exports são iguais entre eles