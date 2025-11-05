
const aplicarDescuento = (precio, esMiembro) =>
    esMiembro ? precio * 0.8 : precio;

console.log("Precio final:", aplicarDescuento(100, true));
console.log("Precio final:", aplicarDescuento(100, false));
