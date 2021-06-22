function planoTrabalho(salario, plano) {
  switch (plano) {
    case "A":
      return salario * 1.1; //como é um aumento de salario faz 100% + 10% ou seja multiplica por 1.1 e nao por 0.1
      break;
    case "B":
      return salario * 1.15;
      break;
    case "C":
      return salario * 1.2;
      break;
    default:
      console.log("Plano inválido!!");
  }
}

console.log(planoTrabalho(1000, "A"));
// -> 1100
console.log(planoTrabalho(1000, "B"));
// -> 1150
console.log(planoTrabalho(1000, "C"));
// -> 1200
planoTrabalho(1000, "D");
// -> Plano inválido!!
