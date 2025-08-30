// Ejercicio 3: Juego de potencias aleatorias 
// Genera dos números aleatorios: 
// • La base debe ser un número entre 2 y 10. 
//  • El exponente debe ser un número entre 1 y 5. 
// El programa debe pedir al usuario el resultado de la potencia. 
// • Convierte la respuesta con parseInt. 
// • Comprueba si es correcta comparando con Math.pow(base, exponente). 
// • Si el usuario falla, muestra la respuesta correcta y la diferencia absoluta con 
// Math.abs. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Juego de potencias aleatorias ");

const base = Math.floor(Math.random() * 9) + 2;
const exponent = Math.floor(Math.random() * 5) + 1;

rl.question(`¿Cuánto es ${base} elevado a la ${exponent}? \n`, (input) => {
    const response = parseInt(input);
    const result = Math.pow(base, exponent);

    if (response === result) {
        console.log(`\nTu respuesta es: ${response} \nLa respuesta es correcta!`);
    } else {
        console.log(`\nTu respuesta es: ${response} \nLa respuesta es incorrecta !\n La respuesta correcta es: ${result}`);
        console.log(` La diferencia absoluta es: ${Math.abs(response - result)}`);
    }
    rl.close();
});