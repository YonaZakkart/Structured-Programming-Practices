// 1. Juego: "El Duelo de Matemáticas" 
// Descripción: 
// Crea un juego interactivo donde dos jugadores compiten respondiendo operaciones 
// matemáticas. El programa genera operaciones aleatorias (suma, resta, multiplicación, 
// división) con diferentes niveles de dificultad. Cada jugador tiene un turno, responde una 
// pregunta, y gana puntos si es correcta. Después de 5 preguntas cada uno, el programa 
// determina el ganador. Incluye un sistema de rachas (si acierta 3 seguidas, suma puntos 
// bonus). 

//nota:cada jugador responde las 5 preguntas continuamente aqui xd

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generador de numeros segun nivel
function generarNumero(nivel) {
    if (nivel === "1") return Math.floor(Math.random() * 10) + 1;  // Facil genera numeros de 1-10
    if (nivel === "2") return Math.floor(Math.random() * 50) + 1;  // Medio 1-50
    if (nivel === "3") return Math.floor(Math.random() * 100) + 1; // Dificil: 1-100
}


// Generador de operación aleatoria
function generarOperacion(nivel) {
    const ops = ["+", "-", "*", "/"];
    const op = ops[Math.floor(Math.random() * ops.length)];

    let a = generarNumero(nivel);
    let b = generarNumero(nivel);

    if (op === "/") {
        // Evita divisiones decimales
        a = a * b;
    }

    const pregunta = `${a} ${op} ${b}`; //genera la pregunta
    const respuesta = eval(pregunta);   //evalua la respuesta de la operacion

    return { pregunta, respuesta };
}

// turnos
function jugarRonda(jugador, nivel, callback) {
    let puntos = 0;
    let racha = 0;
    let preguntas = 0;

    function siguientePregunta() {
        if (preguntas === 5) {
            callback(puntos);
            return;
        }

        const { pregunta, respuesta } = generarOperacion(nivel);

        rl.question(`${jugador}, resuelve: 
            ${pregunta} = `, input => {
            const userResp = parseFloat(input);

            if (userResp === respuesta) {
                puntos++;
                racha++;

                if (racha === 3) {
                    console.log("LLevas racha de 3 respuestas correctas!")
                    puntos += 2;
                    racha = 0;
                }

                console.log("Correcto! ฅ^ >ヮ<^₎ ");
            } else {
                console.log("Incorrecto! /ᐠ ╥ ˕ ╥マ ")
                console.log(`La respuesta correcta era: ${respuesta}`);
                racha = 0;
            }

            preguntas++;
            siguientePregunta();
        });
    }

    siguientePregunta();
}


// Menu de inicio
function iniciar() {

    console.log("\nElige dificultad: ฅ^>⩊<^ฅ ");
    console.log("1. Facil    /ᐠ • ˕ •マ ? ");
    console.log("2, Medio    ≽^-⩊-^≼ ");
    console.log("3, Dificil  ≽(•⩊ •マ≼ ");
    rl.question("Opcion elegida: ", nivel => {
        if (!["1", "2", "3"].includes(nivel)) {
            console.log("\nNivel invalido =^◕⩊◕^= ");
            iniciar();
            return;
        }

        console.log("\nJugador 1 comienza ฅ≽(•⩊ •マ≼");
        jugarRonda("Jugador 1", nivel, puntos1 => {         //primero hace las 5 preguntas al jugador 1
            console.log(`\nJugador 1 terminó con ${puntos1} puntos!`);

            console.log("\nJugador 2 comienza ฅ≽(•⩊ •マ≼");
            jugarRonda("Jugador 2", nivel, puntos2 => {     //luego hace las 5 preguntas al jugador 2
                console.log(`\nJugador 2 terminó con ${puntos2} puntos!`);

                if (puntos1 > puntos2) console.log("\nGanador: Jugador 1  ⎛⎝ ≽  >  ⩊   < ≼ ⎠⎞"); //si el jugador 1 tuvo mayor puntuacion este gana

                else if (puntos2 > puntos1) console.log("\nGanador: Jugador 2    ⎛⎝ ≽  >  ⩊   < ≼ ⎠⎞");
                else console.log("\nEmpate!   ฅ^ >ヮ<^₎");

                rl.close();
            });
        });
    });
}

iniciar();

//22/11
