// Ejercicio 1: Registro de Empleados 
// • Crea un programa que permita: 
// • Registrar empleados con: nombre, edad, departamento y salario 
// • Mostrar todos los empleados 
// • Buscar empleado por nombre 
// • Calcular salario promedio 

const empleados = {
    lista: [],

    registrar(nombre, edad, departamento, salario) {
        this.lista.push({ nombre, edad, departamento, salario });
    },

    mostrarTodos() {
        console.log("Lista de empleados:");
        this.lista.forEach(emp => {
            console.log(`${emp.nombre}, ${emp.edad} años, ${emp.departamento}, $${emp.salario}`);
        });
    },

    buscarPorNombre(nombre) {
        return this.lista.find(emp => emp.nombre === nombre) || "Empleado no encontrado";
    },

    salarioPromedio() {
        if (this.lista.length === 0) return 0;
        const total = this.lista.reduce((acc, emp) => acc + emp.salario, 0);
        return total / this.lista.length;
    }
};

// Ejemplo de uso
empleados.registrar("Ana", 25, "Recursos Humanos", 5000);
empleados.registrar("Luis", 30, "IT", 7000);
empleados.registrar("Marta", 28, "Marketing", 6000);

empleados.mostrarTodos();
console.log("Buscar 'Luis':", empleados.buscarPorNombre("Luis"));
console.log("Salario promedio:", empleados.salarioPromedio());

