// 1. Gestor de Biblioteca Personal 
// Descripción: 
// Crea un programa que simule una biblioteca personal donde el usuario puede gestionar un 
// catálogo de libros. El programa debe permitir: 

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let biblioteca = [];    //array vacio donde se almacenaran los libros

//Agregar libros
function agregarLibro(callback) {
    rl.question("Titulo del libro: ", titulo => {   // Solicita titulo
        if (titulo.trim() === "") {     //.trim elimina los espacios al iniio y final
            console.log("El titulo no puede estar vacio!");
            return callback();  //si esta vacio, detiene la funcion
        }

        rl.question("Autor: ", autor => {    //Solicita autor, puede quedar vacio
            rl.question("Anio: ", inputAnio => {  //solicita el anio
                const anio = parseInt(inputAnio);

                if (isNaN(anio) || anio <= 0) {     //verifica que 'anio' sea numero y no sea negativo
                    console.log("Anio no valido.");
                    return callback();
                }

                rl.question("Genero: ", genero => {     //solicita el genero del libro
                    const libro = { titulo, autor, anio, genero };  //crea 'libro' con las propiedades recopliadas
                    biblioteca.push(libro);     //agrega 'libro' al array 'biblioteca'
                    console.log("Libro agregado con exito");
                    callback();     //para continuar el programa
                });
            });
        });
    });
}

//Buscar libros
function buscarLibro(callback) {
    rl.question("Buscar por 'titulo' o 'autor': ", criterio => {
        rl.question("Ingresa el nombre a buscar: ", nombre => {
            const resultados = [];  //aqui se gardan los libros encontrados 

            for (let libro of biblioteca) { //recorre cada libro en el array biblioteca
                if (
                    criterio === "titulo" && libro.titulo.toLowerCase().includes(nombre.toLowerCase())
                    || criterio === "autor" && libro.autor.toLowerCase().includes(nombre.toLowerCase())
                ) {
                    resultados.push(libro);     //si hay coincidencia, agrega el libro al array resultados
                }
            }

            if (resultados.length === 0) {
                console.log("No se encontraron coincidencias");
            } else {
                console.log("Resultados:");
                resultados.forEach((l, index) => { //forEach recorre cada libro  y lo imprime en consola
                    console.log(`
                        ${index + 1}. 
                        Titulo: ${l.titulo}
                        Autor: ${l.autor}
                        Anio: ${l.anio}
                        Genero: ${l.genero}`);

                });
            }

            callback();
        });
    });
}

//Listar libros
function listarLibros(callback) {
    if (biblioteca.length === 0) {  //si no hay nada en el array
        console.log("No hay libros en la biblioteca");
        return callback();
    }
    rl.question("Filtrar por genero? (si/no): ", respuesta => {
        respuesta = respuesta.toLowerCase().trim();

        if (respuesta === "si" || respuesta === "s") { // ingresar 'si' o 's'
            const generosDisponibles = [...new Set(biblioteca.map(l => l.genero))];
            console.log("\nGeneros disponibles:", generosDisponibles.join(", "));

            rl.question("Ingrese el genero: ", generoBuscado => {
                if (generoBuscado.trim() === "") {
                    console.log("Debes ingresar un genero");    //caso no ingrese nada
                    return callback();
                }

                const filtrados = biblioteca.filter(l =>
                    l.genero.toLowerCase().includes(generoBuscado.toLowerCase()) //includes() busca coincidencias parciales
                );

                if (filtrados.length === 0) {
                    console.log("No hay libros de ese genero");
                } else {
                    console.log(`\nLibros encontrados (${filtrados.length}):`);
                    mostrarLibros(filtrados);
                }
                callback();
            });
        } else if (respuesta === "no" || respuesta === "n") {   //no o n, muestra todos los libros
            console.log(`\nTodos los libros (${biblioteca.length}):`);
            mostrarLibros(biblioteca);
            callback();
        } else {
            console.log("Respuesta invalida");
            callback();
        };
    })
}
//Eliminar libros:
function eliminarLibro(callback) {
    rl.question("Titulo del libro a eliminar: ", titulo => {
        const index = biblioteca.findIndex(l => l.titulo.toLowerCase() === titulo.toLowerCase());

        if (index === -1) {
            console.log("No se encontró ese libro");
        } else {
            biblioteca.splice(index, 1);
            console.log("Libro eliminado");
        }

        callback();
    });
}

//Estadísticas:
function estadisticas(callback) {
    if (biblioteca.length === 0) {  //si el array esta vacio
        console.log("No hay libros para mostrar estadisticas");
        return callback();
    }

    let masAntiguo = biblioteca[0];
    let masReciente = biblioteca[0];
    let generos = [];

    for (let libro of biblioteca) {
        if (libro.anio < masAntiguo.anio) masAntiguo = libro;
        if (libro.anio > masReciente.anio) masReciente = libro;
        if (!generos.includes(libro.genero)) generos.push(libro.genero);
    }

    console.log("Cantidad total:", biblioteca.length);  //Muestra cantidad total de libros
    console.log("Libro mas antiguo:", masAntiguo);  // libro más antiguo, 
    console.log("Libro más reciente:", masReciente);
    console.log("Generos disponibles:", generos);

    callback();
}
//nt: me aburri de comentariar todo xd
//Menú interactivo
function mostrarMenu() {
    console.log(`\n--- Menú Biblioteca ---
        1. Agregar libro
        2. Buscar libro
        3. Listar libros
        4. Eliminar libro
        5. Estadísticas
        6. Salir`);

    rl.question("Elige una opción: ", opcion => {
        switch (opcion) {
            case "1": agregarLibro(mostrarMenu); break;
            case "2": buscarLibro(mostrarMenu); break;
            case "3": listarLibros(mostrarMenu); break;
            case "4": eliminarLibro(mostrarMenu); break;
            case "5": estadisticas(mostrarMenu); break;
            case "6": console.log("Saliendo..."); rl.close(); break;
            default: console.log("Opción invalida"); mostrarMenu();
        }
    });
}

mostrarMenu();
