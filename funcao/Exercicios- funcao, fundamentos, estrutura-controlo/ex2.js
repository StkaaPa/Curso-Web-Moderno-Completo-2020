function triangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        console.log('O triângulo é equilátero!!!')
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log('O triângulo é isósceles!!!')
    } else {
        console.log('O triangulo é escaleno')
    }
}

triangulo(2,2,2)
triangulo(2,2,4)
triangulo(1,2,3)
