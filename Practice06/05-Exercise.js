const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 21 },
    { nombre: "Yona", edad: 20 }
];
const mayorEdad = personas.find(p => p.edad > 18);
console.log(mayorEdad);