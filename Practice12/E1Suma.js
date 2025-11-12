// Suma de números naturales: Solicita un número N y usa un ciclo (for/while) para 
// sumar los números del 1 al N. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un numero : ", input => {
    const N = parseInt(input);
    let suma = 0;

    for (let i = 1; i <= N; i++) {
        suma += i;
    }

    console.log(`La suma de los numeros del 1 al ${N} es: ${suma}`);
    rl.close();
});
