import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un anio: ", input => {
    const año = parseInt(input);

    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0)
        console.log("El anio es bisiesto.");
    else
        console.log("El anio no es bisiesto.");

    rl.close();
});
