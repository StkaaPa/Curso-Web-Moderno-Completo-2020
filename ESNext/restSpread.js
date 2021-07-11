//* operador ... rest(juntar)/spread(espalhar)
//TODO: usar rest com parâmetro de função

//TODO: usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99 };
const clone = { atuvo: true, ...funcionario };

console.log(clone);
// -> { atuvo: true, nome: 'Maria', salario: 12348.99 }

//TODO: usar spread com array
const grupoA = ["joão", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA, "Rafael"];
console.log(grupoFinal);
// -> [ 'Maria', 'joão', 'Pedro', 'Gloria', 'Rafael' ]
