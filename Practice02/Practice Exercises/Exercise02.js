// Ejercicio 2: Estadísticas de una lista de números 
// Solicita al usuario que ingrese una serie de números enteros separados por espacios. 
// • Convierte los valores a números usando Number. 
// • Obtén el número mayor y el menor utilizando Math.max y Math.min. 
// • Calcula el promedio y muéstralo con toPrecision(3). 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Estadísticas de una lista de números ");
rl.question("Ingrese una serie de números enteros separados por espacios: \n", (input) => {
    const numbers = input.split(" ").map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const avg = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

    console.log(`\n EL número mayor es: ${max}`);
    console.log(`\n El número menor es: ${min}`);
    console.log(`\n El promedio es: ${avg.toPrecision(3)}`);
    rl.close();
});