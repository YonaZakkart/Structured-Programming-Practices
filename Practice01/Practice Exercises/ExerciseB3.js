// 3. Anagrama simple: dada una palabraA y palabraB, comprobar si son 
// anagramas (mismas letras, distinto orden). Hint: normalizar y ordenar 
// caracteres. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("-Verificar si dos palabras son anagramas-")
rl.question("Ingrese la primera palabra: \n", (word1) => {
    rl.question("Ingrese la segunda palabra: \n", (word2) => {
        const wClean1 = word1.toLowerCase();
        const wClean2 = word2.toLowerCase();
        const wSorted1 = wClean1.split("").sort().join('');
        const wSorted2 = wClean2.split("").sort().join('');
        if (wSorted1 === wSorted2) {
            console.log(`Las palabras ${word1} y ${word2} Si son Anagramas`)
        } else {
            console.log(`Las palabras ${word1} y ${word2} NO son Anagramas`)
        }
        rl.close();
    })
})