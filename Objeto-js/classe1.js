class lancamento {
  constructor(nome = "generico", valor = 0) {
    this.nome = nome;
    this.valor = valor; // adicionar ao objeto que estamos a criar um novo atributo chamado valor que recebe o mesmo do constructor (0)
  }
}

class ciclofinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach( l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach (l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salario', 45000)
const contaDeLuz = new lancamento('Luz', -220)

const contas = new ciclofinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
