// Crea un programa que simule un sistema de autenticación bancaria. Solicita 
// número de cuenta (4 dígitos), PIN (4 dígitos) y monto a retirar. Valida que la cuenta 
// exista, el PIN sea correcto y haya saldo suficiente (saldo inicial: 1000). Usa 
// condicionales anidadas y operadores lógicos.  

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cuentaValida = "1234";
const pinValido = "4321";
let saldo = 1000;

rl.question("Ingrese numero de cuenta (4 dígitos): ", cuenta => {
    if (cuenta === cuentaValida) {
        rl.question("Ingrese su PIN: ", pin => {
            if (pin === pinValido) {
                rl.question("Ingrese monto a retirar: ", inputMonto => {
                    const monto = parseFloat(inputMonto);
                    if (monto <= saldo && monto > 0) {
                        saldo -= monto;
                        console.log(`Retiro exitoso. Saldo restante: $${saldo}`);
                    } else if (monto <= 0) {
                        console.log("Monto invalido");
                    } else {
                        console.log("Saldo insuficiente para el retiro 😹"); //el emoji no se muestra en la consola :p
                    }
                    rl.close();
                });
            } else {
                console.log("PIN incorrecto, \nCambiar el pin? (se descontarán $5)");
                rl.close();
            }
        });
    } else {
        console.log("Cuenta no encontrada. revise bien");
        rl.close();
    }
});


//estuvo divertido hacer esto :D
//p