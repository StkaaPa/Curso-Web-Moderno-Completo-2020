//coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Generica";
produto.preco = 220;
console.log(produto);
// -> { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }

//eliminar os dados
delete produto.nome;
delete produto["marca do produto"];
console.log(produto);
// ->{preco: 220 }

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Rui",
    idade: 56,
    endereço: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 18,
    },
  ],
  calcularValorSeguro: function () {},
};

carro.proprietario.endereço.numero = 1000
// esta forma é usada para acessar strings
carro['proprietario']['endereço']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
//-> undefined porque condutores não está definido no objeto carro

// se tentar acesssar algo que está undefined, retorna um erro
console.log(carro.condutores.length)
// -> erro