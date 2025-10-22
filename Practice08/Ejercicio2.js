// 1. Declaración de función 
function calcularCubo(num) {
    return Math.pow(num, 3);
}

//  2. Expresión de funcion
const calcularCuboExpr = function (num) {
    return num ** 3;
};

// 3. Funcion con callback anonimo
function transformarArray(arr, transformacion) {
    return arr.map(transformacion);
}

// Ejemplo 
const numeros = [1, 2, 3, 4];

console.log("Cubo (declaración):", calcularCubo(3));
console.log("Cubo (expresión):", calcularCuboExpr(3));

