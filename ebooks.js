(() => {
  //Seleccionado la etiqueta ul para tratarla más adelante
const miLista = document.querySelector('ul');

//Accediendo a los datos del JSON
const miSolicitud = new Request('ebooks.json');

fetch(miSolicitud)
  .then(response => response.json())
  .then(datosObtenidosJSON => {
    for (const ebook of datosObtenidosJSON.ebooks) {

      const listItem = document.createElement('li');
      listItem.classList.add('productoListado');

      const nombreDelEbook = document.createElement('img');
      nombreDelEbook.textContent = ebook.Nombre;

      const precioDelEbook = document.createElement('p')
      precioDelEbook.textContent = ebook.Precio;

      const linkDeDescarga = document.createElement('input');
      linkDeDescarga.textContent = ebook.enlaceDelProducto;

      const URLImage = ebook.imagenDelProducto;
      const textAlt = ebook.textoAlt.toLowerCase();
      const id = ebook.id;

      listItem.innerHTML = `<img class="imagen_ebook" src="${ebook.imagenDelProducto}" alt="${ebook.textoAlt}">
      <p class="producto-descripcion">${ebook.Precio}</p>
      <input type="button" value="Descargar" id="${ebook.id}" class="botonDescargar">`;
      
      miLista.appendChild(listItem);

      const botonDeDescarga = document.getElementById(`${ebook.id}`);
      botonDeDescarga.addEventListener('click',IrALibro);

      const URLParaIrAlLibro = `${ebook.enlaceDelProducto}`;
      function IrALibro() {
        window.open(URLParaIrAlLibro);
      }

      //Validación de la búsqueda en el sitio (FALTA COMPLETAR)

      var cajaDeBusquedaPagina = document.getElementById("cajaDeBusqueda");
      cajaDeBusquedaPagina.addEventListener('click',refrescarPagina);

      function refrescarPagina() {
        if (cajaDeBusqueda.value!="") {
          location.reload();
        }
      }

      var botonBarraDeBusquedaPagina = document.getElementById("botonBarraDeBusqueda");
      botonBarraDeBusquedaPagina.addEventListener("click",buscarLoSolicitado);
      
      function buscarLoSolicitado(event) {
        event.preventDefault();
        if (cajaDeBusqueda.value != "") {
          var criterioDeBusqueda = cajaDeBusqueda.value.toLowerCase();
          if (textAlt.includes(criterioDeBusqueda)==false){
            miLista.removeChild(listItem);
          }

          const botonDeDescarga = document.getElementById(`${ebook.id}`);
          botonDeDescarga.addEventListener('click',IrALibro);

          const URLParaIrAlLibro = `${ebook.enlaceDelProducto}`;
          function IrALibro() {
            if(cajaDeBusqueda.value != "") {
              if (listItem.length!=0){
                window.open(URLParaIrAlLibro);
              } else {
                alert("Sin coincidencias");
              }
            } else {
              alert("Digita un criterio");
            }
            
          }
        }
      }
    }
  })
  .catch(console.error);
  
})();