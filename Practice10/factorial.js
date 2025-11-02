const factorial = (function (n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) resultado *= i;
    return resultado;
})(5);

console.log("Factorial:", factorial);
