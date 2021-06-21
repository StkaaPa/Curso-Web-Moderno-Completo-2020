//o mesmo exemplo que o ficheiro thisBind2.js mas neste foi utilizado arrow function
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa();
