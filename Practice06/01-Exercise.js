function crearAcumulador() {
    let total = 0;
    return function (num) {
        total += num;
        return total;
    };
}
const suma = crearAcumulador();
console.log(suma(5));
console.log(suma(2));
console.log(suma(6)); 