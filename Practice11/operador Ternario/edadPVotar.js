import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa tu edad: ", input => {
    const edadInput = parseInt(input);
    const puedeVotar = edad => edad >= 18 ? "Puede votar" : "No puede votar";
    console.log(puedeVotar(edadInput));
    rl.close()
})


