// 1. Validador de calificaciones con rangos 
// Solicita el número de estudiantes. Para cada estudiante, pide su nombre y calificación. 
// Valida que la calificación esté entre 0 y 100. Usa condicionales para clasificar: Excelente 
// (90-100), Bueno (80-89), Satisfactorio (70-79), Necesita mejorar (menor a 70). Al final, 
// muestra cuántos estudiantes están en cada categoría usando ciclos. 


import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Cuantos estudiantes deseas ingresar?: \n", input => {      //Solicita el número de estudiantes.
    const total = parseInt(input);

    let excelente = 0;
    let bueno = 0;
    let satisfactorio = 0;
    let necesitaMejorar = 0;
    let contador = 0;

    function procesarEstudiante() {
        if (contador < total) {
            rl.question("\nNombre del estudiante: \n", nombre => {      //Para cada estudiante, pide su nombre y calificación. 
                rl.question("Calificacion (0-100): \n", notaInput => {
                    const nota = parseFloat(notaInput);

                    if (nota < 0 || nota > 100) {       //Valida que la calificación esté entre 0 y 100.
                        console.log("Calificacion no valida, Intenta otra vez");
                        procesarEstudiante();
                        return;
                    }

                    //Usa condicionales para clasificar:   
                    if (nota >= 90) excelente++;        //Excelente (90-100), -> yo en progra
                    else if (nota >= 80) bueno++;       // Bueno (80-89),   
                    else if (nota >= 70) satisfactorio++;//Satisfactorio (70-79),
                    else necesitaMejorar++;             //Necesita mejorar (menor a 70). -> yo en mate... y psicologia por alguna razon xd

                    contador++;
                    procesarEstudiante();
                });
            });
        } else {
            console.log(`\nResumen de estudiantes por categoria:   // muestra cuántos estudiantes están en cada categoría
                Excelente: ${excelente}
                Bueno: ${bueno}
                Satisfactorio: ${satisfactorio}
                Necesita mejorar: ${necesitaMejorar}`);
            rl.close();
        }
    }

    procesarEstudiante();
});
