import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un numero del 1 al 7: ", input => {
    const dia = parseInt(input);
    let nombreDia;

    switch (dia) {
        case 1: nombreDia = "Lunes"; break;
        case 2: nombreDia = "Martes"; break;
        case 3: nombreDia = "Miercoles"; break;
        case 4: nombreDia = "Jueves"; break;
        case 5: nombreDia = "Viernes"; break;
        case 6: nombreDia = "Sabado"; break;
        case 7: nombreDia = "Domingo"; break;
        default: nombreDia = "Numero fuera de rango";
    }

    console.log("Resultado:", nombreDia);
    rl.close();
});
