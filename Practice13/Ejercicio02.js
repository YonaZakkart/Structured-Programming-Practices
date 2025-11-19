// 2. Búsqueda y validación en lista 
// Crea un programa que solicite una lista de productos y sus precios. El usuario ingresa 
// cuántos productos desea. Luego, solicita un producto específico para buscar. Si el 
// producto existe, muestra su precio. Si no, permite reintentar hasta 3 veces. Usa ciclos para 
// ingresar datos y condicionales para validar. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Cuantos productos vas registrar?: \n", input => {      //El usuario ingresa cuántos productos desea
    const total = parseInt(input);

    const productos = [];
    const precios = [];
    let contador = 0;

    function ingresarProducto() {
        if (contador < total) {
            rl.question("\nNombre del producto:     ", nombre => {      //solicite una lista de productos y sus precios
                rl.question("Precio del producto:     ", precioInput => {
                    const precio = parseFloat(precioInput);
                    productos.push(nombre);
                    precios.push(precio);
                    contador++;
                    ingresarProducto();
                });
            });
        } else {
            buscarProducto();
        }
    }

    function buscarProducto() {
        let intentos = 0;

        function preguntar() {
            if (intentos < 3) {
                rl.question("\nProducto a buscar:      ", buscado => {      //solicita un producto específico para buscar
                    const indice = productos.indexOf(buscado);
                    if (indice !== -1) {
                        console.log(`Precio: ${precios[indice]}`);      //Si el producto existe, muestra su precio
                        rl.close();
                    } else {
                        console.log("[XXX] Producto no encontrado");
                        intentos++;                                     //Si no, permite reintentar hasta 3 veces
                        preguntar();
                    }
                });
            } else {
                console.log("\n[X] Se acabaron los intento");
                rl.close();
            }
        }
        preguntar();
    }
    ingresarProducto();
});
