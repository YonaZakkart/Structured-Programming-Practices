function crearContador() {
    let contador = 0;

    return {
        incrementar: () => contador++,
        decrementar: () => contador--,
        obtenerValor: () => contador
    };
}

// Demostración:
const contadorA = crearContador();
const contadorB = crearContador();

contadorA.incrementar();
contadorA.incrementar();
contadorB.incrementar();

console.log("Contador A:", contadorA.obtenerValor()); // 2
console.log("Contador B:", contadorB.obtenerValor()); // 1
