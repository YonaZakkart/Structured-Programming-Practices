// 3. Sistema de votación con validación 
// El programa solicita votaciones para tres candidatos (A, B, C). Valida que cada voto sea 
// válido (solo A, B o C). Usa un ciclo para capturar votos hasta que el usuario escriba "fin". 
// Cuenta los votos de cada candidato y determina el ganador usando condicionales. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let votosA = 0;
let votosB = 0;
let votosC = 0;

function pedirVoto() {
    rl.question("Voto (A, B, C) o 'fin' (para finalizar):     ", votoInput => {     // El programa solicita votaciones para tres candidatos (A, B, C).
        const voto = votoInput.toUpperCase();

        if (voto === "A") votosA++;
        else if (voto === "B") votosB++;
        else if (voto === "C") votosC++;
        else console.log("Voto no valido");
        //Usa un ciclo para capturar votos hasta que el usuario escriba "fin".
        if (voto === "FIN") {
            console.log(`Resultado de los votos: 
                A: ${votosA}
                B: ${votosB}
                C: ${votosC}`);
            //Cuenta los votos de cada candidato y determina el ganador usando condicionales.
            if (votosA > votosB && votosA > votosC) console.log("Ganador: A");
            else if (votosB > votosA && votosB > votosC) console.log("Ganador: B");
            else if (votosC > votosA && votosC > votosB) console.log("Ganador: C");
            else console.log("Empate");
            rl.close();
            return;
        }
        pedirVoto();
    });
}

pedirVoto();
