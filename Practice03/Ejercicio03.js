// Ejercicio 3: Lista de Tareas 
// Implementar un sistema de tareas pendientes con: 
// • Array de tareas (objetos con título, descripción, completada) 
// • Método para marcar como completada 
// Programacion Estructurada
//  • Método para filtrar tareas pendientes 

const tareas = {
    lista: [
        { titulo: "Estudiar JS", descripcion: "Repasar arrays y objetos", completada: false },
        { titulo: "Jugar", descripcion: "jugar 300 min", completada: true },
        { titulo: "Leer", descripcion: "Avanzar libro", completada: false }
    ],

    marcarCompletada(titulo) {
        const tarea = this.lista.find(t => t.titulo === titulo);
        if (tarea) tarea.completada = true;
    },

    pendientes() {
        return this.lista.filter(t => !t.completada);
    }
};

tareas.marcarCompletada("Estudiar JS");
console.log("Pendientes:", tareas.pendientes());
