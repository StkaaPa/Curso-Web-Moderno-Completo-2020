const schedule = require("node-schedule");

//* criar a primeira tarefa temporizada
//! scheduleJob('segundos minutos horas diaMês Mês diaSemana')
//* ao colocar * significa que estamos a ignorar
//* ao colocar */5 significa que vai fazer de 5 em 5 segundos
/*
diaSemana -> 0 - domingo
          -> 1 - Segunda-Feira
          -> 2 - Terça-Feira
          -> 3 - Quarta-Feira
          -> 4 - Quinta-Feira
          -> 5 - Sexta-Feira
          -> 6 - Sábado
*/
const tarefa1 = schedule.scheduleJob("*/5 * 11 * * 6", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

//* temporizador padrão
setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando Tarefa1!");
}, 20000);
//* vai cancelar tarefa1 ao fim de 20 segundos

//* através de um objeto do node chamado RecurrenceRule()
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = new schedule.Range(1, 5);
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});
