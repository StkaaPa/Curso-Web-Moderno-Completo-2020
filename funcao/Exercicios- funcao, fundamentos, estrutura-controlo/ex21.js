function planoSaude(idade){
    if(idade < 10){
        return 180
    } else if (idade < 30){
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(planoSaude(8))
// -> 180
console.log(planoSaude(20))
// -> 150
console.log(planoSaude(46))
// -> 195
console.log(planoSaude(63))
// -> 230