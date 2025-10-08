import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese numeros (separados por coma) para sumarlos: ", (input) => {
    const numeros = input.split(",").map(n => parseFloat(n.trim()));
    const suma = numeros.reduce((acc, n) => acc + n, 0);
    console.log("Suma total:", suma);
    rl.close();
});
