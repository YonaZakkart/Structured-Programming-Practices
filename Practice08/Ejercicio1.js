
// Función 1. formatearSaludo
function formatearSaludo(persona, horaDelDia) {
    const { nombre, edad } = persona;
    let saludo = "";

    if (edad >= 18) {
        saludo = `Buenos/as ${horaDelDia}, señor(a) ${nombre}.`;
    } else {
        saludo = `Hola ${nombre}! Buenas ${horaDelDia}, ¿cómo estás?`;
    }

    return saludo;
}

// Función 2: calcularArea 
// Calcula el área de un círculo dado su radio:

function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2);
}

// Ejemplos de uso
const persona1 = { nombre: "Yona", edad: 20 };


console.log(formatearSaludo(persona1, "mañana"));

console.log("Area de un circulo de radio 5:", calcularArea(5).toFixed(2));

