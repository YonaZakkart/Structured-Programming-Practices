// un programa en javascrip que:
// pida al usuario que escriba una operacion matematica simple, por ejemplo 5*7

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una operacion matematica simple (ejemplo: 5 * 7): \n", (operacion) => {
    //split()
    let partes = operacion.split(" ")
    //variables
    //operacion
    let tipoDeOperacion = partes[1];
    //convertir valores a number
    let valor1 = Number(partes[0]);
    let valor2 = Number(partes[2]);

    //valor1 y 2 son numeros
    if (isNaN(valor1) || isNaN(valor2)) {
        console.log("Los valores ingresados no son numeros.");
    }

    //switch
    let resultado;
    switch (tipoDeOperacion) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
        default:
            console.log("Operacion no valida");
    }
    console.log(`El resultado es: ${resultado}`);
    rl.close();
});











// rl.question("Ingrese un numero para la operacion matematica: \n", (num1) => {
//     rl.question("Ingrese otro numero para la operacion matematica: \n", (num2) => {
//         rl.question("Ingrese un numero para la operacion matematica: \n1-sumar, 2-restar, 3-multi, 4-dividir: \n", (operacion) => {
//             let resultado;
//             switch (operacion) {
//                 case "1":
//                     resultado = parseFloat(num1) + parseFloat(num2);
//                     break;
//                 case "2":
//                     resultado = parseFloat(num1) - parseFloat(num2);
//                     break;
//                 case "3":
//                     resultado = parseFloat(num1) * parseFloat(num2);
//                     break;
//                 case "5":
//                     resultado = parseFloat(num1) / parseFloat(num2);
//                     break;
//                 default:
//                     console.log("Operacion no valida");
//             }
//             console.log(`El resultado es: ${resultado}`);
//             rl.close();
//         })
//     })
// })
