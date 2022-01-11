const gulp = require("gulp");
const { series, parallel} = require("gulp")
//*const series = gulp.series;
//* Esta também é uma maneira de importar series -- const { series } = require('gulp')

const antes1 = (cb) => {
  console.log("Tarefa antes 1!");
  return cb();
};

const antes2 = (cb) => {
  console.log("Tarefa antes 2!");
  return cb();
};

function copiar(cb) {
  //*gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  //! este código debaixo significa que 
  //! vão ser enviados para a pastaB todos os arquivos .txt presentes na pastaA
  gulp.src('pastaA/**/*.txt')
  //! usar pipe() para fazer transformações
  // .pipe(imagemPelaMetade())
  // .pipe(imagemPretoEBranco())
  // .pipe(transformaçãoA())
  // .pipe(transformaçãoB())
  // .pipe(transformaçãoC())
  .pipe(gulp.dest('pastaB'))
  return cb();
}

const fim = (cb) => {
  console.log("Tarefa fim!");
  return cb();
};

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
    );
