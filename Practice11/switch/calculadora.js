import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa dos numeros separados por coma: ", entrada => {
    const [a, b] = entrada.split(",").map(Number);

    rl.question("Ingresa la operación \n(1: +, 2: -, 3: *, 4: /): ", op => {
        let resultado;

        switch (op) {
            case "1": resultado = a + b; break;
            case "2": resultado = a - b; break;
            case "3": resultado = a * b; break;
            case "4": resultado = b !== 0 ? a / b : "no se puede dividir entre cero"; break;
            default: resultado = "Operacion invalida.";
        }

        console.log("Resultado:", resultado);
        rl.close();
    });
});
