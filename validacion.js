//Validación del formulario de contacto (FUNCIONA)
var botonEnviarFormulario = document.getElementById("botonEnviarAhoraElFormulario");
botonEnviarFormulario.addEventListener("click",enviarFormulario)

var nombre = document.getElementById("nombre");

var mensaje = document.getElementById("mensaje");

function enviarFormulario () {
    var nombreAEnviar = nombre.value;
    var mensajeAEnviar = mensaje.value;
    var stringFinalaEnviar = "mailto:angi.pardo@irreverente.net?subject=" + "Mensaje enviado desde la tienda virtual por: " + nombreAEnviar + "&body=" + mensajeAEnviar;
    window.open(stringFinalaEnviar);
}

//Validación del login a la tienda (BackEnd simulado para efectos del desafío)

var botonLoginTienda = document.getElementById("botonLogin");
botonLoginTienda.addEventListener("click",ingresarInternamente);

// Para efectos de la demostración objetivo del challenge, el usuario y la contraseña aceptada es "Angi" con "XXXX"

var usuario = document.getElementById("cajaDeUsuario");
var contrasena = document.getElementById("cajaDeContrasena");

function ingresarInternamente(usuarioAComprobar,contrasenaAComprobar){

    var usuarioAComprobar = usuario.value;
    var contrasenaAComprobar = contrasena.value;

    if (usuarioAComprobar == "Angi") {
        if (contrasenaAComprobar == "XXXX") {
            alert("Datos correctos");
        } else {
            alert("Usuario y/o contraseña incorrectos");
        }
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
}
