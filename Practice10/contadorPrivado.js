const contador = (function () {
    let valor = 0;

    return {
        incrementar: () => valor++,
        obtenerValor: () => valor
    };
})();

contador.incrementar();
contador.incrementar();
console.log("Valor del contador:", contador.obtenerValor());
