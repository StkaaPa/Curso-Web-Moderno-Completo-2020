const fruta = function (nomeFruta) {
  switch (nomeFruta) {
    case "maça":
      console.log("Não vendemos essa fruta aqui!");
      break;
    case "kiwi":
      console.log("Estamos com escassez de kiwi!!");
      break;
    case "melancia":
      console.log("Aqui está, são 3€/Quilo");
      break;
    default:
      console.error("Fruta inválida");
      break;
  }
};

fruta("maça");
// -> Não vendemos essa fruta aqui!
fruta("kiwi");
// -> Estamos com escassez de kiwi!!
fruta("melancia");
// -> Aqui está, são 3€/Quilo
fruta("peras");
// -> Fruta inválida
