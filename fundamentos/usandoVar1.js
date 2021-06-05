{
  {
    {
      {
        var sera = "Será???";
      }
    }
  }
}

/* var é visivel em todos os blocos
exceto quando se trata de funções */
console.log(sera);

function test() {
  var local = 123;
  // var dentro de uma função só é vísivel dentro da função, ou seja
  // aqui o console.log vai funcionar e vai imprimir 123
  console.log(local);
}

test();
/* já aqui como var só está definido dentro da função
   este console.log vai dar erro
console.log(local)*/

/*-------------- VAR -------------------
- tem scoop global;
- tem scoop de função;
*/
