import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa tu nota (de 0-100): ", input => {
    const nota = parseInt(input);
    let letra;

    if (nota >= 90) letra = "A";
    else if (nota >= 80) letra = "B";
    else if (nota >= 70) letra = "C";
    else if (nota >= 60) letra = "D";
    else letra = "F";//en el chat :v

    console.log("Tu calificacion es:", letra);
    rl.close();
});
