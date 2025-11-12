// Sumar hasta que sea negativo: Pide números hasta que el usuario ingrese uno 
// negativo y suma los valores introducidos. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;

function pedirNumero() {
    rl.question("Ingresa un numero \n(negativo para terminar): ", input => {
        const num = parseFloat(input);
        if (num >= 0) {
            suma += num;
            pedirNumero();
        } else {
            console.log(`La suma total es: ${suma}`);
            rl.close();
        }
    });
}

pedirNumero();
