// Implementa un programa que pida el nombre de usuario y contraseña. Si el usuario 
// es "admin" y la contraseña es "1234", muestra "Acceso concedido". Si el usuario es 
// correcto pero la contraseña incorrecta, pide la contraseña nuevamente (máximo 3 
// intentos). Si el usuario es incorrecto, muestra "Usuario no encontrado".  

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const usuarioCorrecto = "admin";
const contraseniaCorrecta = "1234";
let intentos = 0;

function solicitarUsuario() {
    rl.question("Ingrese su nombre de usuario: ", usuario => {
        if (usuario === usuarioCorrecto) {
            solicitarContrasena();
        } else {
            console.log("Usuario no encontrado.");
            rl.close();
        }
    });
}

function solicitarContrasena() {
    rl.question("Ingrese su contrasenia: ", contrasenia => {
        if (contrasenia === contraseniaCorrecta) {
            console.log("Acceso concedido.");
            rl.close();
        } else {
            intentos++;
            if (intentos < 3) {
                console.log("Contrasenia incorrecta. Intente de nuevo.");
                solicitarContrasena();
            } else {
                console.log("llegaste al limite de intentos XDD. Acceso denegado");
                rl.close();
            }
        }
    });
}

solicitarUsuario();
