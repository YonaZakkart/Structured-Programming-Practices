// Contador de pares e impares: Pide 10 números, cuenta cuántos son pares y 
// cuántos impares usando while. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 0;
let pares = 0;
let impares = 0;

function pedirNumero() {
    if (contador < 10) {
        rl.question(`Ingresa el numero ${contador + 1}: `, input => {
            const num = parseInt(input);
            if (num % 2 === 0) pares++;
            else impares++;
            contador++;
            pedirNumero();
        });
    } else {
        console.log(`Numeros pares: ${pares}`);
        console.log(`Numeros impares: ${impares}`);
        rl.close();
    }
}

pedirNumero();
