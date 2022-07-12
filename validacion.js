// //Validación del formulario de contacto (FUNCIONA)
// var botonEnviarFormulario = document.getElementById("botonEnviarAhoraElFormulario");
// botonEnviarFormulario.addEventListener("click",enviarFormulario)

// var nombre = document.getElementById("nombre");

// var mensaje = document.getElementById("mensaje");

// function enviarFormulario () {
//     var nombreAEnviar = nombre.value;
//     var mensajeAEnviar = mensaje.value;
//     var stringFinalaEnviar = "mailto:angi.pardo@irreverente.net?subject=" + "Mensaje enviado desde la tienda virtual por: " + nombreAEnviar + "&body=" + mensajeAEnviar;
//     window.open(stringFinalaEnviar);
// }

// //Validación de la búsqueda en el sitio (FALTA COMPLETAR)

// var botonBarraDeBusquedaPagina = document.getElementById("botonBarraDeBusqueda");
// botonBarraDeBusquedaPagina.addEventListener("click",buscarLoSolicitado);

// function buscarLoSolicitado() {
//     if (cajaDeBusqueda.value != "") {
//         var criterioDeBusqueda = cajaDeBusqueda.value;
//         // alert(criterioDeBusqueda); completar el proceso de búsqueda por palabra clave en la página
//     } else {
//         alert("Por favor ingresa un criterio de búsqueda en la caja");
//     }
// }

//Validación del login a la tienda (COMPLETAR EL PROCESO CON EL BACKEND O ACCESO INTERNO)

var botonLoginTienda = document.getElementById("botonLogin");
botonLoginTienda.addEventListener("click",ingresarInternamente);

// Para efectos de la demostración objetivo del challenge, los usuarios y las contraseñas aceptadas son "Angi" con "XXXX" y "Steven" con "ZZZZ"

var usuario = document.getElementById("cajaDeUsuario");
var contrasena = document.getElementById("cajaDeContrasena");

function ingresarInternamente(usuarioAComprobar,contrasenaAComprobar){

    var usuarioAComprobar = usuario.value;
    var contrasenaAComprobar = contrasena.value;

    if (usuarioAComprobar == "Angi") {
        if (contrasenaAComprobar == "XXXX"){
            alert("Ingresando");
        } else {
            alert("Usuario y/o contraseña incorrectos");
        }  
    } else if (usuarioAComprobar == "") {
        alert("Datos inválidos o incompletos");
    }
    
    if (usuarioAComprobar == "Steven") {
        if (contrasenaAComprobar == "ZZZZ"){
            alert("Ingresando");
        } else {
            alert("Usuario y/o contraseña incorrectos");
        }
    } else if (usuarioAComprobar == "") {
        alert("Datos inválidos o incompletos");
    }
}
