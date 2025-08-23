// 4. Palabra más frecuente: dada una frase, devolver la palabra que aparece 
// más veces (ignorar mayúsculas y signos). Si hay empate, devolver 
// cualquiera. 


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("-Verificar la palabra mas frecuente en una frase-")
rl.question("Ingrese una frase: \n", (phrase) => {
    const phraseClean = phrase.toLowerCase().replaceAll(/[^a-z\s]/gi, "");
    const words = phraseClean.split(" ").filter(w => w !== "");
    const counts = {};
    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }
    let maxWord = "";
    let maxCount = 0;

    for (const word in counts) {
        if (counts[word] > maxCount) {
            maxWord = word;
            maxCount = counts[word];
        }
    }
    console.log(`La palabra más frecuente es "${maxWord}" con ${maxCount} repeticiones`);
    rl.close();

})