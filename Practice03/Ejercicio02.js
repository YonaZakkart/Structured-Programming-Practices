
// jercicio 2: Registro de Calificaciones 

// Crear un sistema que maneje: 
// • Array de materias con sus calificaciones 
// • Método para calcular promedio 
// • Método para determinar estado académico 

const registro = {
    materias: [
        { nombre: "Matemáticas", nota: 9 },
        { nombre: "Programación", nota: 8.5 },
        { nombre: "Inglés", nota: 7.8 }
    ],

    calcularPromedio() {
        const suma = this.materias.reduce((acc, m) => acc + m.nota, 0);
        return suma / this.materias.length;
    },

    estadoAcademico() {
        const promedio = this.calcularPromedio();
        return promedio >= 6 ? "Aprobado" : "Reprobado";
    }
};

console.log("Promedio:", registro.calcularPromedio());
console.log("Estado:", registro.estadoAcademico());
