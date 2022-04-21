const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao (cb) {

  gulp.src('src/**/*.js')
  //configuração de um objeto para configurar o babel
  .pipe(babel({
    comments: false,
    presets: ["env"]
  }))
  //neste pipe nao é necessario passar parametro nenhum, porque vai pegar no código e vai minificar o mesmo
  .pipe(uglify())
  // o concat vai pegar todos os ficheiros que já foram compilados e vai colocar o codigo todo numa linha só
  // o parametro que se passa é o nome que se quer dar ao ficheiro
  .pipe(concat('codigo.min.js'))
  // este ultimo pipe vai mostrar o destino
  .pipe(gulp.dest('build'))

  return cb()
}

function fim(cb) {
  console.log('Fim!!!')
  return cb()
}

exports.default = series(padrao, fim)