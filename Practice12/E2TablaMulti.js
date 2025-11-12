// Tabla de multiplicar: Solicita un número y muestra su tabla de multiplicar del 1 al 10 
// usando un ciclo for. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un numero para ver su tabla de multiplicar: ", input => {
    const num = parseInt(input);

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }

    rl.close();
});
