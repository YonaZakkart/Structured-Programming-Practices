import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero decimal: \n", (num) => {
    const floor = Math.floor(num);
    console.log("El numero usado es: ".floor);
    console.log("El numero usando ceil es: ", Math.ceil(num));
    console.log("El numero usando round es: ", Math.round(num));
    console.log("El numero usando trunc es: ", Math.trunc(num));
    rl.close();
})