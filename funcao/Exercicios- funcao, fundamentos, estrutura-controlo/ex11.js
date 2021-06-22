function anoBissexto(ano) {
  if (ano <= 0) {
    return false;
  } else if (ano % 400 == 0 && ano % 4 == 0) {
    return true;
  } else if (ano % 100 == 0) {
    return false;
  } else {
    return false;
  }
}

console.log(anoBissexto(2000));
// -> true
console.log(anoBissexto(2021));
// -> false
console.log(anoBissexto(100));
// -> false
console.log(anoBissexto(400));
// -> true
console.log(anoBissexto(4));
// -> true
console.log(anoBissexto(0));
// -> false
console.log(anoBissexto());
// -> false
console.log(anoBissexto(-1200));
// -> false