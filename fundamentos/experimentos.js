let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
// -> 3
console.log(global.b);
// -> 123
console.log(this.c); //é o mesmo que ter console.log(module.exports.c)
// -> 456
console.log(module.exports === this);
// -> true
console.log(module.exports);
// -> { c: 456, d: false, e: 'teste' }
//nova variavel sem let e var
abc = 3; //não fazer isto
console.log(global.abc);
// -> 3
