//  2. Juego: "Adivina la Secuencia" 
// Descripción: 
// El programa crea una secuencia secreta de 4 números entre 1 y 9 (pueden repetirse). El 
// jugador tiene 10 intentos para adivinar la secuencia correcta. Después de cada intento, el 
// programa debe dar pistas: 
// • "Número correcto en posición correcta" (representado con VERDE
// • "Número correcto en posición incorrecta" (representado con AMARILLO 
// • "Número no está en la secuencia" (representado con BLANCO
// El jugador debe usar estas pistas para deducir la secuencia. Si lo logra antes de los 10 
// intentos, gana y se muestra el tiempo/intentos utilizados. Si no, pierde y se revelan los 
// números secretos.

//Nota: los emojis no se muestran en consola asi que se usa la palabra del color como tal xd

import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Generar la secuencia secreta 
function generarSecuencia() {
    const seq = [];
    for (let i = 0; i < 4; i++) {
        seq.push(Math.floor(Math.random() * 9) + 1); //4 numeros entre 1 y 9
    }
    return seq;
}


// Validar entrada 
function validarIntento(input) {
    if (input.length !== 4) return false; //debe tener 4 dígitos
    return [...input].every(n => n >= "1" && n <= "9"); //entre 1 y 9
}


// Comparar intento con la secuencia 
function comparar(secreto, intento) {
    const resultado = [];

    for (let i = 0; i < 4; i++) {
        const num = parseInt(intento[i]);

        if (num === secreto[i]) {
            resultado.push("verde"); // Numero correcto, posicion correcta
        }
        else if (secreto.includes(num)) {
            resultado.push("amarillo"); // Numero correcto, posicion incorrecta
        }
        else {
            resultado.push("blanco"); // No existe en la secuencia
        }
    }

    return resultado;
}

// Juego 
function iniciar() {
    const secreto = generarSecuencia();
    let intentos = 0;

    console.log(`
        ─────────────────୨ৎ─────────────────
        Bienvenido a Adivina la Secuencia ฅ(•- •マ
        ࣪ ִֶָ☾.    Debes adivinar una secuencia
        ࣪ ִֶָ☾.    (4 números entre 1 y 9}     
        ࣪ ִֶָ☾.    Tienes 10 intentos      (•˕ •マ!
        ─────────────────୨ৎ─────────────────`);
    console.log(`\nNota: se darán pistas mientras avances!
        "verde" = Numero correcto en posicion correcta
        "amarillo" = Numero correcto pero posicion incorrecta
        "blanco" = El numero no existe en la secuencia`)

    function preguntar() {
        if (intentos === 10) {
            console.log("\nHas perdido (╥﹏╥)")
            console.log("La secuencia correcta era: ", secreto.join("-"));
            rl.close();
            return;
        }

        rl.question(`Intento ${intentos + 1}/10 - Ingresa 4 numeros: `, input => {
            if (!validarIntento(input)) {
                console.log("Entrada invalida, Deben ser 4 números entre 1 y 9");
                preguntar();
                return;
            }

            intentos++;
            const pistas = comparar(secreto, input);

            if (pistas.every(color => color === "verde")) {
                console.log(`\nNumeros ingresados: ${input.split("").join(" - ")}`)
                console.log("La secuencia correcta: ", secreto.join("-"));
                console.log("Has ganado en", intentos, "intentos");
                rl.close();
                return;
            }

            console.log(`\nNumeros ingresados: ${input.split("").join(" - ")}`)
            console.log("Pistas:", pistas.join(" - "));
            preguntar();
        });
    }

    preguntar();
}

iniciar();

//23/11
