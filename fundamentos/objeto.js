// criação de um objeto vazio
const prod1 = {}
//criacao da chave nome no objeto prod1
//dentro de um objeto só se pode ter um identificador unico
prod1.nome = "celular ultra mega"
prod1.preco = 4998.90

//esta utilizacao é valiada mas deve-se evitar atributos com espaços
prod1["Desconto legal"] = 0.4

console.log(prod1)

//2ª maneira de criar um objeto
const prod2 = {
    nome: 'camisa polo',
    preco: 99.80
}

console.log(prod2)