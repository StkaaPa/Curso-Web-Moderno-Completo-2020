//* middleware patern (chain of responsability)
//! ctx - é um objeto;  next - é a função que vai disparar o proximo passo
const passo1 = (ctx, next) => {
  ctx.valor1 = "mid1";
  next();
};

const passo2 = (ctx, next) => {
  ctx.valor2 = "mid2";
  next();
};

//* neste 3º passo não queremos que o programa continue, então suprimimos a função next
//* apenas passamos o objeto ctx

const passo3 = (ctx) => (ctx.valor3 = "mid3");

//TODO: Criar uma função que execute todos passos acima criados

//* ...middlewares - conjunto de funçoes e juntar todas elas num array chamado middlewares
const exec = (ctv, ...middlewares) => {
  //* para executar cada um dos passos vai ser passado como atributo o indice que queremos excutar
  const execPasso = (indice) => {
    //! verificar se o indice é menor que o tamanho do array
    //! porque nao queremos executar um metodo que esta fora do array
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](ctx, () => execPasso(indice + 1));
  };
  execPasso(0);
};

const ctx = {};
exec(ctx, passo1, passo2, passo3);
//! é possível trocar a ordem dos passos, também é possível suprimir passos
console.log(ctx);
// -> { valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }
//! se o passo3 tiver em primeiro, como o passo3 não tem a função next()
//! simplesmente só vai ser imprimido o valor do passo3
// -> { valor3: 'mid3'}
