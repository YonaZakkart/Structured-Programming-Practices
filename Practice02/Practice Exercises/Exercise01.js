// Ejercicio 1: Conversión y suma de precios 
// El programa debe pedir al usuario que ingrese tres precios en formato de texto (ejemplo: 
// "12.5", "20.99", "30"). 
// • Convierte cada valor a número usando parseFloat. 
// • Calcula la suma total. 
// • Muestra el resultado con exactamente dos decimales utilizando toFixed(2). 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Conversión y suma de precios ");
rl.question("Ingrese el primer precio: \n", (price1) => {
    rl.question("Ingrese el segundo precio: \n", (price2) => {
        rl.question("Ingrese el tercer precio: \n", (price3) => {
            const total = parseFloat(price1) + parseFloat(price2) + parseFloat(price3);
            console.log(`La suma total es: ${total.toFixed(2)}`);
            rl.close();
        });
    });
});
