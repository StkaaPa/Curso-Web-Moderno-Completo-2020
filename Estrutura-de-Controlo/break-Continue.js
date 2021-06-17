const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${nums[x]}`);
  //o ciclo for para quando o indice x é igual a 5 sendo que nao imprime o seu valor
  //ou seja só imprime os valores até ao indice x = 4
}

for (y in nums) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${nums[y]}`);
  //vai imprimir todos os indices exceto o x = 5
  // ou seja 5 = 6, nao vai ser imprimido
  /* 
    0 = 1
    1 = 2
    2 = 3
    3 = 4
    4 = 5
    6 = 7
    7 = 8
    8 = 9
    9 = 10
  */
}


externo: for (a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}