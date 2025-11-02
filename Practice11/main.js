import { stdin, stdout } from 'process'
import readline from 'readline'
//validacion de nombres
//solicitar el nombre al usuario y sino lo escribe lo pediremos de nuevo 
//una bienvenida cuando escriba su nombre

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

function validarNombre() {
    rl.question("Ingrese su nombre ", (nombre) => {
        if (nombre.trim() == '') {
            console.log("El nombre esta vacio, ingrese de nuevo")
            validarNombre()
        } else {
            console.log("Bienvenido 🛸", nombre)
            rl.close()
        }
    })
}

//validarNombre()

//Adivinar el numero
const numeroSecreto = Math.floor(Math.random() * 10) + 1
let intentos = 3
function adivinar() {
    if (intentos > 0) {
        rl.question(`Intento ${4 - intentos}/3 adivina el numero (1 - 10)`, (respuesta) => {
            const numero = parseInt(respuesta)
            if (numero === numeroSecreto) {
                console.log("Felicidades encontraste el numero")
                rl.close()
            } else if (numero > numeroSecreto) {
                console.log("El numero es menor")
            } else {
                console.log("El numero es mayor")
            }
            intentos--
            adivinar()
        })
    } else {
        console.log("Perdiste, el numero secreto es: ", numeroSecreto)
        rl.close()
    }
}
//adivinar()

//
function entrarAFiesta() {
    rl.question("Ingrese su edad", (edad) => {
        if (!edad.trim() == '') {
            let parseEdad = parseInt(edad)
            let puedePasar = parseEdad >= 18 
            ? 'Permitido Puede Pasar' 
            : 'Es menor de edad no puede pasar'
            //esto puede ser descrito en ternaria
            if (parseEdad >= 21) {
                console.log(puedePasar, " Puede tomar")
            } else {
                console.log(puedePasar, " pero solo puede tomar agua")
            }
            rl.close()
        }else{
            console.log("DEBES INGRESAR TU EDAD!")
            entrarAFiesta()
        }
    })
}
entrarAFiesta()