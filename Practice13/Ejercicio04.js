// 4. Generador de serie numérica con filtros 
// Solicita un número inicial y uno final. Genera la serie numérica entre esos números. Usa 
// condicionales para aplicar filtros: mostrar solo pares, solo impares, o solo múltiplos de un 
// número específico que el usuario proporcione. Usa ciclos para recorrer la serie. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Numero inicial:    ", iniInput => {        // Solicita un número inicial y uno final.
    rl.question("Numero final:    ", finInput => {
        const inicio = parseInt(iniInput);
        const fin = parseInt(finInput);

        rl.question("Filtro (pares, impares, multiplo):     ", filtro => {      //filtros: mostrar solo pares, solo impares, o solo múltiplos de un número específico
            if (filtro === "multiplo") {
                rl.question("Que numero?:     ", multiInput => {    // número específico que el usuario proporcione.
                    const multi = parseInt(multiInput);
                    generar(inicio, fin, filtro, multi);
                    rl.close();
                });
            } else {
                generar(inicio, fin, filtro, null);
                rl.close();
            }
        });
    });
});
//Genera la serie numérica entre esos números.
function generar(inicio, fin, filtro, multiplo) {
    for (let i = inicio; i <= fin; i++) {
        if (filtro === "pares" && i % 2 === 0) console.log(i);
        else if (filtro === "impares" && i % 2 !== 0) console.log(i);
        else if (filtro === "multiplo" && i % multiplo === 0) console.log(i);
    }
}
