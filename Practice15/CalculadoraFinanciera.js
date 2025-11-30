
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//interes simple
function interesSimple(callback) {
    rl.question("Capital inicial: ", inputCapital => {   // Pedimos capital
        const capital = parseFloat(inputCapital);

        if (isNaN(capital) || capital <= 0) { // Validacion simple
            console.log("Capital invalido");
            return callback();
        }

        rl.question("Tasa anual (%): ", inputTasa => {    // Tasa anual
            const tasa = parseFloat(inputTasa);

            if (isNaN(tasa) || tasa < 0) {
                console.log("Tasa invalida.");
                return callback();
            }

            rl.question("Tiempo en anios: ", inputTiempo => {      // Tiempo en años
                const tiempo = parseFloat(inputTiempo);

                if (isNaN(tiempo) || tiempo <= 0) {
                    console.log("Tiempo invalido.");
                    return callback();
                }

                // Formula de interes simple: I = C * r * t
                const resultado = capital * (tasa / 100) * tiempo;

                console.log("\nInteres generado:", resultado);
                console.log("Monto final:", capital + resultado);

                callback();
            });
        });
    });
}

//interés compuesto
function interesCompuesto(callback) {
    rl.question("Capital inicial: ", inputCapital => {
        const capital = parseFloat(inputCapital);
        if (isNaN(capital) || capital <= 0) {
            console.log("Capital invalido");
            return callback();
        }

        rl.question("Tasa anual (%): ", inputTasa => {
            const tasa = parseFloat(inputTasa);
            if (isNaN(tasa) || tasa < 0) {
                console.log("Tasa invalida");
                return callback();
            }

            rl.question("Períodos de capitalización por anio: ", inputPeriodos => {
                const n = parseFloat(inputPeriodos);
                if (isNaN(n) || n <= 0) {
                    console.log("Periodos invalidos.");
                    return callback();
                }

                rl.question("Anios: ", inputAnios => {
                    const t = parseFloat(inputAnios);
                    if (isNaN(t) || t <= 0) {
                        console.log("Anios invalidos.");
                        return callback();
                    }

                    // Formula: = C * (1 + r/n)^(n*t)
                    const monto = capital * Math.pow(1 + (tasa / 100) / n, n * t);
                    const interes = monto - capital;

                    console.log("Monto final:", monto);
                    console.log("Interes generado:", interes);

                    callback();
                });
            });
        });
    });
}

// tabla de amortización simple
function amortizacion(callback) {
    rl.question("Monto del prestamo: ", inputPrestamo => {
        const prestamo = parseFloat(inputPrestamo);

        if (isNaN(prestamo) || prestamo <= 0) {
            console.log("Prestamo invalido");
            return callback();
        }

        rl.question("Tasa de interes mensual (%): ", inputTasa => {
            const tasa = parseFloat(inputTasa);

            if (isNaN(tasa) || tasa < 0) {
                console.log("Tasa invalida.");
                return callback();
            }

            rl.question("Numero de cuotas: ", inputCuotas => {
                const cuotas = parseInt(inputCuotas);

                if (isNaN(cuotas) || cuotas <= 0) {
                    console.log("Numero de cuotas invalido.");
                    return callback();
                }

                // formula de anualidad
                const r = tasa / 100;
                const cuota = (prestamo * r) / (1 - Math.pow(1 + r, -cuotas)); //ni idea xdd

                let saldo = prestamo;

                console.log("\nTabla de amortizacion:");
                for (let mes = 1; mes <= cuotas; mes++) {
                    let interes = saldo * r;                     // Interés del mes
                    let capitalPagado = cuota - interes;        // Capital pagado en ese mes
                    saldo -= capitalPagado;                    // Reducimos el saldo

                    console.log(
                        `Mes ${mes} | Cuota: ${cuota.toFixed(2)} | Interes: ${interes.toFixed(2)} | Capital: ${capitalPagado.toFixed(2)} | Saldo: ${saldo.toFixed(2)}`
                    );
                }

                callback();
            });
        });
    });
}

//simulador de ahorro progresivo
function ahorro(callback) {
    rl.question("Monto a ahorrar mensualmente: ", inputMensual => {
        const mensual = parseFloat(inputMensual);

        if (isNaN(mensual) || mensual <= 0) {
            console.log("Monto invalido");
            return callback();
        }

        rl.question("Tasa anual (%): ", inputTasa => {
            const tasa = parseFloat(inputTasa);

            if (isNaN(tasa) || tasa < 0) {
                console.log("Tasa invalida.");
                return callback();
            }

            rl.question("Meses: ", inputMeses => {
                const meses = parseInt(inputMeses);

                if (isNaN(meses) || meses <= 0) {
                    console.log("Meses invalidos.");
                    return callback();
                }
                const tasaMensual = tasa / 100 / 12;    // tasa anual a mensual
                let saldo = 0;

                console.log("\nProgreso de ahorro:");
                for (let mes = 1; mes <= meses; mes++) {  //se agrega el ahorro mensual
                    saldo += mensual;   // se aplica interés                   
                    saldo += saldo * tasaMensual;

                    console.log(`Mes ${mes} | Saldo: ${saldo.toFixed(2)}`);
                }

                callback();
            });
        });
    });
}

//Comparador 
function comparador(callback) {
    rl.question("Valor del escenario A: ", inputA => {
        const A = parseFloat(inputA);

        if (isNaN(A)) {
            console.log("Valor invalido.");
            return callback();
        }

        rl.question("Valor del escenario B: ", inputB => {
            const B = parseFloat(inputB);

            if (isNaN(B)) {
                console.log("Valor invalido.");
                return callback();
            }

            if (A > B) console.log("El escenario A es más beneficioso");
            else if (B > A) console.log("El escenario B es más beneficioso");
            else console.log("Ambos escenarios son equivalentes.");

            callback();
        });
    });
}

//Menu principal
function menu() {
    console.log(`
        --- Calculadora Financiera ---
        1. Interes simple
        2. Interes compuesto
        3. Amortizacion
        4. Ahorro progresivo
        5. Comparador de escenarios
        6. Salir`);

    rl.question("Elige una opcion: ", opcion => {
        switch (opcion) {
            case "1": interesSimple(menu); break;
            case "2": interesCompuesto(menu); break;
            case "3": amortizacion(menu); break;
            case "4": ahorro(menu); break;
            case "5": comparador(menu); break;
            case "6": console.log("Saliendo..."); rl.close(); break;
            default:
                console.log("Opcion inválida.");
                menu();
        }
    });
}

menu();





// Gracias por tanto Isaac

// perdón por no ir a ninguna sesión XDD