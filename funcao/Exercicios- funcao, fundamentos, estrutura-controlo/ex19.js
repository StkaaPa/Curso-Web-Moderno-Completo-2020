function pedidos(codigo, quantidade) {
  switch (codigo) {
    case 100:
      return quantidade * 3.0;
      break;
    case 200:
      return quantidade * 4.0;
      break;
    case 300:
      return quantidade * 5.5;
      break;
    case 400:
      return quantidade * 7.5;
      break;
    case 500:
      return quantidade * 3.5;
      break;
    case 600:
      return quantidade * 2.8;
      break;
    default:
      console.log("o código do produto não existe!!");
  }
}

console.log(pedidos(100, 5));
// -> 15€ por exemplo
console.log(pedidos(200, 5));
// -> 20
console.log(pedidos(300, 5));
// -> 27.5
console.log(pedidos(400, 5));
// -> 37.5
console.log(pedidos(500, 5));
// -> 17.5
console.log(pedidos(600, 5));
// -> 14
