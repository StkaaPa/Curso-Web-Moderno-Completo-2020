class avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

// esta é a forma de definir que o pai tem como prototipo o avo
class pai extends avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class filho extends pai {
  constructor() {
    super("Silva"); // se passar só silva, o que vai acontecer é que profissao vai ter o valor padrao professor
  }
}

const Filho = new filho();
console.log(Filho);
// -> filho { sobrenome: 'Silva', profissao: 'Professor' }
