// const jsonData = require('./ebooks.json'); // No reconoce el método require
// console.log(jsonData);

fetch('./ebooks.json')
.then(response => {
    return response.json();
})
.then(jsondata => console.log(jsondata));

var boton1 = document.getElementById("DescargarWhatsApp");
var boton2 = document.getElementById("DescargarGmail");
var boton3 = document.getElementById("DescargarIFTTT");
var boton4 = document.getElementById("DescargarTelegram");
var boton5 = document.getElementById("DescargarRss");
var boton6 = document.getElementById("DescargarLifehacks");
var boton7 = document.getElementById("DescargarAutomatizate");
var boton8 = document.getElementById("DescargarEmprendedor");
var boton9 = document.getElementById("DescargarEmail");
var boton10 = document.getElementById("DescargarNinos");
var boton11 = document.getElementById("DescargarSalidas");
var boton12 = document.getElementById("DescargarTrucos");

boton1.addEventListener("click",IrALibro1);
boton2.addEventListener("click",IrALibro2);
boton3.addEventListener("click",IrALibro3);
boton4.addEventListener("click",IrALibro4);
boton5.addEventListener("click",IrALibro5);
boton6.addEventListener("click",IrALibro6);
boton7.addEventListener("click",IrALibro7);
boton8.addEventListener("click",IrALibro8);
boton9.addEventListener("click",IrALibro9);
boton10.addEventListener("click",IrALibro10);
boton11.addEventListener("click",IrALibro11);
boton12.addEventListener("click",IrALibro12);

function IrALibro1 () {
    window.open("https://biz.payulatam.com/L0d6ed88570CC44");
}

function IrALibro2 () {
    window.open("https://irreverente.net/InfoP/SACALE JUGO A TU CUENTA DE GMAIL.pdf");
}

function IrALibro3 () {
    window.open("https://biz.payulatam.com/L0d6ed87049F19F");
}

function IrALibro4 () {
    window.open("https://biz.payulatam.com/L0d6ed88541D181");
}

function IrALibro5 () {
    window.open("https://irreverente.net/InfoP/COMO AHORRAR TIEMPO EN Instagram Facebook y TikTok.pdf");
}

function IrALibro6 () {
    window.open("https://irreverente.net/InfoP/AHORRA TIEMPO Y DINERO Usando Apps y LifeHacks para Todos.pdf");
}

function IrALibro7 () {
    window.open("https://irreverente.net/InfoP/AHORRA TIEMPO Y DINERO automatizando tus procesos.pdf");
}

function IrALibro8 () {
    window.open("https://irreverente.net/InfoP/AHORRA TIEMPO Y DINERO Usando Apps y LifeHacks para Emprendedores.pdf");
}

function IrALibro9 () {
    window.open("https://irreverente.net/InfoP/COMO LOGRAR QUE TU CORREO ELECTRONICO TRABAJE PARA TI.pdf");
}

function IrALibro10 () {
    window.open("https://irreverente.net/InfoP/SALIDAS CON NIÑOS EN LA CIUDAD Apps y LifeHacks de Ahorro.pdf");
}

function IrALibro11 () {
    window.open("https://irreverente.net/InfoP/SALIR CON AMIGOS O EN PAREJA LifeHacks con Apps para Ahorrar Dinero y Tiempo.pdf");
}

function IrALibro12 () {
    window.open("https://irreverente.net/InfoP/TRUCOS MODERNOS para gastar menos dinero sin sacrificar confort.pdf");
}