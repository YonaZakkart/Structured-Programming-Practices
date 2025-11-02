const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const filtrarPares = arr => arr.filter(num => num % 2 === 0);

readline.question("Ingresa números separados por coma: ", entrada => {
    const numeros = entrada.split(",").map(Number);
    console.log("Números pares:", filtrarPares(numeros));
    readline.close();
});
