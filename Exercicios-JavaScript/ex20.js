function areaTriangulo(altura, base) {
  const area = (altura * base) / 2;
  return area.toFixed(2);
}

console.log(areaTriangulo(10, 15));
// -> 75.00
console.log(areaTriangulo(20, 5));
// -> 50.00
console.log(areaTriangulo(5, 2));
// -> 5.00
