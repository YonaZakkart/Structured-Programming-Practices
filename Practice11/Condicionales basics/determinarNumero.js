import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un numero: ", input => {
    const numero = parseFloat(input);

    if (numero > 0) console.log("El numero es positivo.");
    else if (numero < 0) console.log("El numero es negtivo.");
    else console.log("El nmero es cero.");

    rl.close();
});
