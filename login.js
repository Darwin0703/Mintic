let registros = [];

function validar_captcha(rcaptcha) {
    if (rcaptcha == "5") {
        return true
    } else {
        return false
    }
}

function iniciar_sesion(usuario, contrasena, rcaptcha) {
    if (validar_captcha(rcaptcha) == true) {
        if (registros[0].usuario == usuario && registros[0].contrasena == contrasena) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports.registros = registros
module.exports.validar_captcha = validar_captcha
module.exports.iniciar_sesion = iniciar_sesion