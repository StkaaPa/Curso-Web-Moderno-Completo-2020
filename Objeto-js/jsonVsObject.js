//! JSON - javascript object notation

const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
//TODO: converter obj em json
console.log(JSON.stringify(obj));
//! exclui a função porque json apenas armazena os dados, tudo o que seja executavel é excluído
// -> {"a":1,"b":2,"c":3}

//TODO: converter JSON num objeto
console.log(JSON.parse('{"a":1, "b":2, "c":3}'));
// -> { a: 1, b: 2, c: 3 }


//todo: possibilidades que o json suporta
console.log(JSON.parse('{"a":1, "b": "string", "c":true, "d":{}, "e":[]}'));
// -> { a: 1, b: 'string', c: true, d: {}, e: [] }