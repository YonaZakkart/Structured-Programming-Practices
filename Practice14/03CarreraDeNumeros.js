// 3. Juego: "Carrera de Números" 
// Descripción: 
// Un juego donde el jugador debe alcanzar un número objetivo partiendo desde 0. El jugador 
// elige una estrategia al inicio: puede sumar valores aleatorios, números pares solamente, 
// números primos, o una combinación. En cada ronda, se genera un número aleatorio según 
// la estrategia elegida, el jugador decide si aceptarlo o rechazarlo (rechazar 3 veces = 
// pierde). Debe llegar exactamente al número objetivo sin pasarse. Si se pasa, pierde. El 
// programa registra el número mínimo de rondas necesarias para ganar y desafía al jugador a 
// mejorar su récord. 

//Nota1: No entendí 
//Nota2: Ya entendí xd

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero(texto) {
    return new Promise(resolve => { //ia 
        rl.question(texto, respuesta => {
            const n = Number(respuesta);
            if (Number.isNaN(n) || n <= 0) {
                console.log("Ingresa solo numero positivo");
                resolve(pedirNumero(texto));
            } else {
                resolve(n);
            }
        });
    });
}

function pedirOpcion(texto, opcionesValidas) {
    return new Promise(resolve => {
        rl.question(texto, r => {
            if (!opcionesValidas.includes(r)) {
                console.log("Opcion no valida.");
                resolve(pedirOpcion(texto, opcionesValidas));
            } else {
                resolve(r);
            }
        });
    });
}


// Generación de numeros segun estrategia
function numeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function numeroPar() {
    let n;
    do n = numeroAleatorio(); while (n % 2 !== 0); //solo pares
    return n;
}

function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function numeroPrimo() {
    let n;
    do n = numeroAleatorio(); while (!esPrimo(n)); //debe ser primo
    return n;
}

function numeroMixto() {
    const tipo = Math.floor(Math.random() * 3);
    if (tipo === 0) return numeroPar();
    if (tipo === 1) return numeroPrimo();
    return numeroAleatorio();
}

// Seleccion de estrategia 
function elegirEstrategia(opcion) {
    switch (opcion) {
        case "1": return numeroAleatorio;
        case "2": return numeroPar;
        case "3": return numeroPrimo;
        case "4": return numeroMixto;
    }
}

// partida
async function jugarPartida(recordActual) {
    console.log(`
        ─────────────────୨ৎ─────────────────
        Bienvenido a Carrera de Numeros ฅ(•- •マ
        - Debes elegir un numero objetivo
        - Elegir una 'Estrategia' para generar numeros     
        - Aceptar o rechazar el numero que obtengas
        ─────────────────୨ৎ─────────────────`);

    const objetivo = await pedirNumero("Establece un numero objetivo: ");

    console.log(`\nEstrategias disponibles: 
        1. Aleatorio (1-10)
        2. Pares
        3. Primos
        4. Mixto`);

    const opcion = await pedirOpcion("Elige estrategia: ", ["1", "2", "3", "4"]);
    const generador = elegirEstrategia(opcion);

    let total = 0;
    let rechazos = 0;
    let rondas = 0;
    let historial = [];

    console.log("\nComienza la carrera");

    while (total < objetivo && rechazos < 3) {
        rondas++;
        const numero = generador();
        console.log(`\nRonda ${rondas}. Numero generado: ${numero}`);
        console.log(`Total actual: ${total}`);
        console.log(`Rechazos disponibles: ${3 - rechazos}`);

        const decision = await pedirOpcion("Aceptar (a) || Rechazar (r) ", ["a", "r"]);

        if (decision === "r") {
            rechazos++; //aumenta la cantidad de rechazos realizados
            continue;
        }

        total += numero; //el numero se suma al total
        historial.push(numero); //se agrega al historial de numeros acepados

        if (total > objetivo) {
            console.log(`\n
                Te pasaste!! Total: ${total} 
                Has Perdido ╾━╤デ╦︻`);
            return null;
        }
    }

    if (total === objetivo) { //si la suma de los numeros aceptados es igual al objetivo planteado
        console.log(`\n
            Llegaste al objetivo! ◝(ᵔᗜᵔ)◜
            Historial: ${historial.join(" + ")}
            Rondas: ${rondas}`);

        if (recordActual === null || rondas < recordActual) {
            console.log(`
                Nuevo record!`);
            return rondas;
        } else {
            return recordActual;
        }
    } else {
        console.log(`\n
            Se agotaron los rechazos 
            Has Perdido ╾━╤デ╦︻`);
        return recordActual;
    }
}


async function main() {
    let record = null;

    let jugar = "s";
    while (jugar === "s") {
        record = await jugarPartida(record);
        console.log(record !== null ? `
            Record actual: ${record} rondas` : `
            Sin record aun`);

        jugar = await pedirOpcion("\nJugar otra vez? (s/n): ", ["s", "n"]);
    }

    console.log("\nNos vemos (≖⩊≖)");
    rl.close();
}

main();

//23/11 