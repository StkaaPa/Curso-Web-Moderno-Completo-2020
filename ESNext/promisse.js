//! promisse - estrutura com o objetivo de representar uma operação assíncrona

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase); //! o resolve apenas aceita um único parametro
    }, segundos * 1000);
  });
}

//* QUANDO SE RETORNA UMA PROMISSE ELA POSSUI A FUNÇAO then()
falarDepoisDe(3, "Que legal!!")
  .then((frase) => frase.concat("!?!?"))
  .then((outraFrase) => console.log(outraFrase));

/*
 * a forma para tratar um erro numa promisse é através do catch()
 * ou seja se em cima trocar o resolve por reject
 * vai dar erro, mas para não dar erro, depois do segundo then
 * coloca-se a função catch(), por exemplo:
 * .catch(e => console.log(e))
 * isto vai retornar a frase inserida, se usarmos o reject
 */
