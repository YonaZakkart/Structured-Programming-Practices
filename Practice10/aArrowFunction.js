//Convierte la siguiente función tradicional a arrow function
function calcularDescuento(precio, descuento) {
    return precio - (precio * descuento / 100);
}

const calcularDescuentoArrow = (precio, descuento) => precio - (precio * descuento / 100);