function tratarErroELancar(erro) {
  //throw new Error("...");
  //throw 10;
  //throw true
  //throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!!");
  } catch (e) {
    //caso o try não resolva o catch vai usar a funcao tratarErroELancar, para mostrar uma mensagem de erro ao executar a funcao
    tratarErroELancar(e);
  } finally {
    //mesmo que o try dê certo o finally vai ser sempre executado
    console.log("final");
  }
}

const obj = { name: "Roberto" };
imprimirNomeGritado(obj);
