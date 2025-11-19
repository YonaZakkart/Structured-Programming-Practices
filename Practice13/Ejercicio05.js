// 5. Gestor de inventario simple 
// Crea un programa que simule un inventario de tienda. El usuario define productos (nombre 
// y cantidad). Usa un ciclo do-while para permitir múltiples operaciones: agregar producto, 
// vender producto, mostrar inventario. Valida que la cantidad de venta sea válida usando 
// condicionales. Termina cuando el usuario seleccione "salir". 

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inventario = {};

function menu() {
    console.log(`\nSeleccione una opcion: 
        1. Agregar producto
        2. Vender producto
        3. Mostrar inventario
        4. Salir`)

    rl.question("\nOpcion elegida: ", op => {
        switch (op) {
            case "1":
                agregar();
                break;
            case "2":
                vender();
                break;
            case "3":
                mostrar();
                break;
            case "4":
                rl.close();
                break;
            default:
                console.log("Opcion no valida");
                menu();
        }
    });
}

function agregar() {
    rl.question("\nNombre del producto:     ", nombre => {
        rl.question("Cantidad:     ", cantInput => {
            const cant = parseInt(cantInput);
            inventario[nombre] = (inventario[nombre] || 0) + cant;
            console.log("Producto agregado");
            menu();
        });
    });
}

function vender() {
    rl.question("\nProducto a vender:   ", nombre => {
        if (!(nombre in inventario)) {
            console.log("[X] Ese producto no existe");
            return menu();
        }
        rl.question("Cantidad a vender:     ", cantInput => {
            const cant = parseInt(cantInput);
            if (cant <= 0 || cant > inventario[nombre]) {
                console.log("[X] La cantidad no es valida");
                menu();
            } else {
                inventario[nombre] -= cant;
                console.log("Venta realizada");
                menu();
            }
        });
    });
}

function mostrar() {
    console.log("Inventario actual: ");
    console.log(inventario);
    menu();
}

menu();
