import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa tres numeros separados por coma: ", input => {
    const [a, b, c] = input.split(",").map(Number);

    let mayor = a;
    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;

    console.log("El mayor es:", mayor);
    rl.close();
});
