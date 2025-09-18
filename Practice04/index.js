import { stdin, stdout } from 'process'
import readline from 'readline'
// INVENTARIO Y OPERACIONES BASICAS CRUD
//producto = {
//     nombre,
//     stock,
//     precio,
//     proveedor{
//         empresa,
//         numero
//     }
// }
//entrada de datos desde consola
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

//objeto principal, estructura
const inventario = {
    //aqui se guarda la informacion
    productos: [],
    //con esta funcion guardamos los datos
    agregarProducto: function () {
        //pedimos datos al usuario
        rl.question("Ingresa el nombre de producto \n", (nombre) => {
            rl.question("Ingrese la cantidad de producto disponible \n ", (cantidad) => {
                rl.question("Ingres el precio unitario del producto \n ", (precio) => {
                    let id = Math.floor(Math.random() * 1000 + 1)
                    const stock = parseInt(cantidad)
                    const decimalPrecio = parseFloat(precio)
                    if (nombre && !isNaN(stock) && !isNaN(decimalPrecio)) {
                        let producto = {
                            id: id,
                            nombre: nombre,
                            cantidad: stock,
                            precio: decimalPrecio,
                            proveedor: {
                                nombreProveedor: "",
                                telefono: ""
                            }
                        };
                        this.productos.push(producto)
                        console.log(this.productos)
                    } else {
                        console.log("No se puede agregar el producto, revisa que los datos sean correctos")
                    }
                    main()

                })

            })
        })
    },
    actualizarStock: function () {
        rl.question("Producto que deseas buscar : ", (nombre) => {
            rl.question("Valor nuevo del stock :", (cantidad) => {
                let producto = this.productos.find(pro => pro.nombre === nombre)
                const newStock = parseInt(cantidad)
                !isNaN(newStock) ? producto.cantidad = newStock : console.log("Valor no valido en el stock")
                console.log(`producto actualizado: ${producto}`)
                main()
            })
        })
    }
}

function mostrarOpciones() {
    console.log(`
    1. Agregar Productos 
    2. Buscar Productos y actualizar 
    3. Listar productos 
    4. Buscar por proveedor 
    5. Salir del Sistema 
    `)
}
function main() {
    mostrarOpciones()
    rl.question("Selecciione una opcion", (opt) => {
        const opcion = parseInt(opt);
        switch (opcion) {
            case 1:
                inventario.agregarProducto();
                break;
            case 2:
                inventario.actualizarStock();
                break;
            case 3:
                console.log(inventario.productos)
                main()
                break;
            case 5:
                console.log("Saliendo...")
                rl.close()
                break;

            default:
                main()
        }
    })
}

main()