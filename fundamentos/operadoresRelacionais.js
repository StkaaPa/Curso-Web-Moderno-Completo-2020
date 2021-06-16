console.log("01)", "1" == 1);
console.log("02)", "1" === 1);
//aqui nao compara o tipo mas sim o valor
console.log("03)", "3" != 3);
//aui compara os tipos, o primero é tipo strin, o segundo é tipo number por isso o resultado é true
console.log("04)", "3" !== 1);

console.log("05)", 3 < 2);
console.log("05)", 3 > 2);
console.log("05)", 3 <= 2);
console.log("05)", 3 >= 2);

//o 0 significa a referencia da data do javascript ---> 1 jan 1970
const d1 = new Date(0);
const d2 = new Date(0);

//nestes dois casos vai comparar a referencia da memoria e vai retornar falso para os dois
console.log("09)", d1 === d2);
console.log("10)", d1 == d2);

//nestes dois casos vai retornar verdadeiro porque eles tem o mesmo tipo e o mesmo valor
console.log("11)", d1.getTime() === d2.getTime());
console.log("12)", d1.getTime() == d2.getTime());

console.log("13)", undefined == null);
console.log("14)", undefined === null);
