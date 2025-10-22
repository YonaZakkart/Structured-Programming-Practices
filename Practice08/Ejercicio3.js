// recibe un array y una función que procesa cda elemento
function procesarArray(arr, fn) {
    return arr.map(fn);
}

// Funciones de procesamiento
const duplicar = x => x * 2;
const cuadrado = x => x * x;
const raiz = x => Math.sqrt(x);

// Ejemplo
const datos = [4, 9, 16];

console.log("Duplicados:", procesarArray(datos, duplicar));
console.log("Cuadrados:", procesarArray(datos, cuadrado));
console.log("Raices:", procesarArray(datos, raiz));
