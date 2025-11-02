const configuracion = (function () {
    let configExistente = global.configuracionApp;

    if (!configExistente) {
        const nuevaConfig = {
            tema: "oscuro",
            idioma: "es",
            notificaciones: true
        };
        global.configuracionApp = nuevaConfig;
        return nuevaConfig;
    }

    return configExistente;
})();

console.log("Configuración:", configuracion);
