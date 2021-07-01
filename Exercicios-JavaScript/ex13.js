function filtrarNumeros(array) {
    return array.filter(elemento => typeof elemento === "number")
}

console.log(filtrarNumeros([1, 2, 3, "a", "web", 20]));
