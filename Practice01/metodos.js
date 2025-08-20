import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let word = "Hello!!   this is JavaScrip";

// console.log(word.toLocaleLowerCase());
// console.log(word.toUpperCase());
// console.log(word.trim().split("\s+/"));

// console.log("Reverse: " + word.split("").reverse().join(''))

// console.log(word.replaceAll(" ", "").split(','))

//Verificar si una palabra es palindromo

// rl.question("ingrese una palabra para saber si es palindromo: ", (word) => {
//     let wordMinus = word.toLowerCase();
//     let wordReverse = wordMinus.split("").reverse().join('');
//     if (wordMinus === wordReverse) {
//         console.log("La palabra si es un palíndromo.");
//     } else {
//         console.log("La palabra no es un palíndromo.");
//     }
//     rl.close();
// });


// Verificar si la primera letra de una palabra es mayuscula

rl.question("ingrese una palabra para saber si la primera letra es mayuscula: ", (word) => {
    const primeraLetra = word.substring(0, 1);
    const wordMayus = word.toUpperCase();
    const primeraMayus = wordMayus.substring(0, 1);
    let respuesta
    if (primeraLetra === primeraMayus) {
        respuesta = "La primera letra si es mayúscula.";
    } else {
        respuesta = "La primera letra no es mayúscula.";
    }
    console.log(respuesta);
    rl.close();
})