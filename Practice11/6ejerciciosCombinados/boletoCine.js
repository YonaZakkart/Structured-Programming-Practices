// Implementa un programa que calcule el precio de un boleto de cine. Solicita la 
// edad del usuario y el día de la semana. Aplicar las siguientes reglas: precio base 10 
// dólares, menores de 12 años y mayores de 65 tienen 40% de descuento, los 
// miércoles hay 25% de descuento para todos. Los descuentos no son acumulables; 
// aplica el mayor.  

//Usa 
// condicionales anidadas y operadores lógicos. 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precioBase = 10;
rl.question("Ingrese su edad: ", inputEdad => {
    const edad = parseInt(inputEdad);
    rl.question(`Ingrese el dia de la semana: 
        1. Lunes
        2. Martes
        3.Miercoles
        4. Jueves
        5. Viernes
        6. Sabado
        7. Domingo
        :    `, inputDia => {
        const dia = parseInt(inputDia);
        let porcentajeDesc
        if (dia === 3) { //miercoles
            porcentajeDesc = 0.25;
        } else if (edad < 12 || edad > 65) { //menor de 12 o mayor de 65
            porcentajeDesc = 0.40
        } else {
            porcentajeDesc = 0
        }
        const descuento = precioBase * porcentajeDesc
        const precioFinal = precioBase - descuento
        console.log(`El precio final es de $${precioFinal.toFixed(2)}`)
        rl.close()
    })
})