function validar_nombreUsuario(string) {
    const nombreUser = document.getElementById("in_usuario").value
    let reg = /^[A-Za-z0-9]{3,9}$/;
    if (reg.test(nombreUser) == true) {
        return true;
    } else {
        return false;
    }
}

function validar_contrasena(string) {
    const pass = document.getElementById("in_contrasena").value
    let reg = /^[A-Za-z0-9]{6,}$/;
    if (reg.test(pass) == true) {
        return true;
    } else {
        return false;
    }
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;