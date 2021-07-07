// console.log(global)
//! ter cuidado ao mexer com objetos compartilhados globais porque a chance de ter problemas é maior

globalThis.MinhaApp = Object.freeze({
  saudacao() {
    return "Estou em todos os lugares!";
  },
  nome: "Sistema Legal!!",
});
