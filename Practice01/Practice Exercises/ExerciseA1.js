//  1. Palíndromo (string): Crear una función que reciba una palabra o frase y 
// devuelva true si es palíndromo (ignorar espacios, signos de puntuación y 
// mayúsculas), false en caso contrario. Hint: replace(/[^a-z0-9]/gi, '') 
// para filtrar caracteres. 


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("-Verificar si una palabra o frase el palindromo-")
rl.question("Ingrese una palabra o frase: \n", (word) => {
    const wordMinus = word.toLowerCase();
    const wordClean = wordMinus.replaceAll(/[^a-z0-9]/gi, '');
    const wordReverse = wordClean.split("").reverse().join('');
    if (wordClean === wordReverse) {
        console.log(`${word} SI es un palindromo`)
    } else {
        console.log(`${word} NO es un palindromo`)
    }
    rl.close();
})