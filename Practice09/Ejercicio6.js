function crearPerfil(
    nombre,
    edad = 18,
    ciudad = "No especificada",
    profesion = "Estudiante"
) {
    return { nombre, edad, ciudad, profesion };
}

// Ejemplos de uso:
console.log(crearPerfil("Yona"));
console.log(crearPerfil("Ana", 25));
console.log(crearPerfil("Luis", 30, "espania"));
console.log(crearPerfil("Marta", 22, "mexico", "Diseñadora"));
