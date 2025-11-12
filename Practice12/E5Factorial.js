// • Cálculo de factorial: Solicita un número y calcula el factorial usando un ciclo. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un numero para calcular su factorial: ", input => {
    const num = parseInt(input);
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${num} es: ${factorial}`);
    rl.close();
});
