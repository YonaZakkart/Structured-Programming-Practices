const ordenarPorLongitud = arr => arr.sort((a, b) => a.length - b.length);

const palabras = ["sol", "estrella", "luz", "universo"];
console.log("Ordenadas por longitud:", ordenarPorLongitud(palabras));
