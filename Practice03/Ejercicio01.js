
// Ejercicio 1: Perfil Personal 

// Crear un objeto que represente tu perfil personal con: 
// • Información básica (nombre, edad, carrera) 
// • Dirección (objeto anidado) 
// • Hobbies (array) 
// • Redes sociales (objeto con diferentes plataformas) 

const perfil = {
    nombre: "Yona",
    edad: 20,
    carrera: "Ingeniería en Software",
    direccion: {
        calle: "Av. Bennett",
        ciudad: "Carolina",
        pais: "El Salvador"
    },
    hobbies: ["programar", "leer", "jugar videojuegos"],
    redes: {
        tiktok: "@n3k0Yona",
        github: "github.com/YonaZakkart",
        linkedin: "linkedin.com/in/yonaBot"
    }
};

console.log(perfil);
