function salario(horasTrabalho, reaisHora) {
  let totalSalario = horasTrabalho * reaisHora;
  return `Salário igual a ${totalSalario} R$.`;
}

console.log(salario(150, 40.5));
