import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingresa tu edad: ", input => {
    const edad = parseInt(input);

    if (edad < 18) console.log("Eres menor de edad");
    else if (edad < 65) console.log("Eres mayr de edad");
    else console.log("Eres adulto mayor");

    rl.close();
});
