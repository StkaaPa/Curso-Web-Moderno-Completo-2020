//! estrutura de conjunto, não aceita repetição, é uma estrutura não indexada

const times = new Set();
times.add("Vasco");
times.add("Vasco").add("São Paulo").add("Palmeiras").add("Bahia");
times.add("Flamengo");
times.add("Vasco"); //! como não aceita repetição esta linha vai ser ignorada

//*  a função set() também tem size(), has(), delete()
//* faz a distinção entre letras minúsculas e maúsculas

console.log(times);
// -> Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Bahia', 'Flamengo' }
console.log(times.size);
// -> 5 elementos
console.log(times.has("vasco"));
// -> false
console.log(times.has("Vasco"));
// -> true
times.delete("Flamengo");
console.log(times.has("Flamengo"));
// -> false

//* outra forma para criar um set é através de um array

const nomes = ["Raquel", "Lucas", "Júlia", "Lucas"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
// -> Set(3) { 'Raquel', 'Lucas', 'Júlia' }
