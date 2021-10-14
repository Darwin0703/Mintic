let registros = [];

function agregarRegistro() {
    var user = document.getElementById("in_usuario").value
    var password = document.getElementById("in_contrasena").value
    var usuarios = { "usuario": user, "contrasena": password }
    registros.push(usuarios)
    console.log(registros)
}

function filtrarPorContrasena(arreglo, filtro) {
    arreglo = registros
    let arregloFiltrados = []
    arreglo.forEach(function(element) {
        if (typeof element == "object") {
            if (element.contrasena.length <= filtro) {
                arregloFiltrados.push(element)
            }
        }
    });
    console.log(arregloFiltrados)
    return arregloFiltrados
}

module.exports.registros = registros
module.exports.agregarRegistro = agregarRegistro
module.exports.filtrarPorContrasena = filtrarPorContrasena