let pompaDeJabon = [3, 6, 12, 5, 100, 1];

function burbuja(contenido) {
    let longitud = contenido.length;
    for (let i = 0; i < longitud; i++) {
      for (let d = 0; d < (longitud - i - 1); d++) {
        if (contenido[d] > contenido[d + 1]) {
          let acumulado = contenido[d];
          contenido[d] = contenido[d + 1];
          contenido[d + 1] = acumulado;
        }
      }
    }
  }

  function resultadoSeis(){
    burbuja(pompaDeJabon);
  document.getElementById("arreglo").innerHTML = `El arreglo ordenado es: ${pompaDeJabon}`;
  }