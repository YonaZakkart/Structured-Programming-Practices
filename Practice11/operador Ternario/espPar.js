import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un numero: ", input => {
    const numero = parseInt(input);
    const mensaje = numero % 2 === 0 ? "Es par" : "Es impar";
    console.log(mensaje);
    rl.close()
})

