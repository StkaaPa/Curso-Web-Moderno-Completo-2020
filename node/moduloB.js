//* A FORMA MAIS CLÁSSICA É ATRAVÉS DO MODULE.EXPORTS E CRIAR UM NOVO OBJETO
//! SÓ É EXPORTADO TUDO O QUE TIVER DENTRO DO MODULE.EXPORTS
//! SE POR ACASDO CRIAR UM LET FORA DO MODULE.EXPORTS ESSE LET APENAS É VISIVEL DENTRO DO MODULO

let a = 7; //* esta variavel "a", apenas é visivel neste modulo

module.exports = {
  bomDia: "Bom Dia!",
  boaNoite() {
    return "Boa Noite!";
  },
};
