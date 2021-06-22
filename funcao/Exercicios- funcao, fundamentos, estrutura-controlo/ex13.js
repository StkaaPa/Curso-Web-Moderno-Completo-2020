const imprimirTipoDia = function (dia) {
  switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("É dia útil!!!");
      break;
    case 6:
    case 7:
      console.log("É dia de Fim de semana!!");
      break;
    default:
      console.log("Dia inválido!!!");
      break;
  }
};

imprimirTipoDia(1);
// -> É dia útil
imprimirTipoDia(6);
// -> É dia de Fim de semana
imprimirTipoDia(8);
// -> Dia inválido
