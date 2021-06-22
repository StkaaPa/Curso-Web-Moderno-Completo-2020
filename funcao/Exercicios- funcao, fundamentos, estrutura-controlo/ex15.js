const list_cars = function (nomeCar) {
  switch (nomeCar) {
    case "hatch":
      console.log("Compra efetuada com sucesso.");
      break;
    case "sedans":
    case "motocicletas":
    case "camionetas":
      console.log("Tem certeza que não prefere este modelo?");
      break;
    default:
      console.log("Não trabalhamos com este tipo de automóvel!");
      break;
  }
};

list_cars("hatch");
// -> Compra efetuada com sucesso.
list_cars("sedans");
// -> Tem certeza que não prefere este modelo?
list_cars("motocicletas");
// -> Tem certeza que não prefere este modelo?
list_cars("mercedez");
// -> Não trabalhamos com este tipo de automóvel!
