const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //! 'Massa? é excluído do array --- a função pop elimina o ultimo valor do array
console.log(pilotos);
// -> [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push("Verstappen"); //! a função push() insere o novo elemento no fim do array
console.log(pilotos);
// -> [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift(); //! ao contrario do pop(), esta função shift elimina o primeiro elemento do array
console.log(pilotos);
// -> [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift("Hamilton"); //! a função shift() adiciona no fim, já a função unshift() adiciona no inicio do array
console.log(pilotos);
// -> [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

//TODO: USAR O SPLICE PARA ADICIONAR VALORES
pilotos.splice(2, 0, "Bottas", "Massa"); //! vai introduzir o bottas e o massa atrás do raikkonen(indice 2)
console.log(pilotos);
// -> [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

//TODO: remover elementos atráves do splice
pilotos.splice(3, 1); //! vai ser eliminado o massa porque tem indice 3 e queremos eliminar um elemento apenas
console.log(pilotos);
// -> [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

//! aqui a função slice(), vai criar um novo array apartir do original, com todos os elementos apartir do indice 2
//! ou seja algunsPilotos1 = ['Bottas','Raikkonen','Verstappen']
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);
// -> [ 'Bottas', 'Raikkonen', 'Verstappen' ]

//! ao escrever slice desta maneira estamos a dizer que o indice 1 está incluido e o indice 4 não esta incluido
//! ou seja voltando ao array original, o novo array apenas vai ter o indice 1, 2 e 3
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2)
// -> [ 'Alonso', 'Bottas', 'Raikkonen' ] //! verstappen que tem indice 4 foi excluido do novo array