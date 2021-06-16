function teste1(num) {
  if (num > 7)
    /* Quando o if tem apenas uma sentença relacionada
    não é preciso usar chavetas,
    mas quando tem mais que uma, é necessario usar chavetas
    ou seja, 
    neste caso apenas o primeiro console.log está associado ao if
    para pormos os dois consoles associados é necessario
    colocar chavetas*/
    console.log(num);
  console.log("Final");
}

teste1(6);
// -> Final ---- apenas imprime final porque o segundo console nao pertence ao if e porque 6 < 7
teste1(8);
// ->8 Final

function teste2(num) {
  if (num > 7); //cuidado com o ;, não usar com as estruturas de controlo
  {
    console.log(num);
  }
}

teste2(6);
teste2(8);
