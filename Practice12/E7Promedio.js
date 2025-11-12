// Promedio con ciclo do-while: El usuario ingresa calificaciones (números positivos). 
// El ciclo termina si la calificación es negativa. Calcula el promedio de los valores 
// introducidos. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;
let contador = 0;

function pedirNota() {
    rl.question("Ingresa una calificacion (negativa para terminar): ", input => {
        const nota = parseFloat(input);
        if (nota >= 0) {
            suma += nota;
            contador++;
            pedirNota();
        } else {
            if (contador > 0) {
                const promedio = suma / contador;
                console.log(`Promedio: ${promedio.toFixed(2)}`);
            } else {
                console.log("No valido");
            }
            rl.close();
        }
    });
}

pedirNota();
