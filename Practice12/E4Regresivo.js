// Contador regresivo: Muestra los números desde N hasta 1 usando for y luego con 
// while. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un numero : ", input => {
    const N = parseInt(input);

    console.log("Contador regresiv (for): ");
    for (let i = N; i >= 1; i--) {
        console.log(i);
    }

    console.log("Contador regresivo (while):");
    let j = N;
    while (j >= 1) {
        console.log(j);
        j--;
    }

    rl.close();
});
