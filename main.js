function mostrarImagen(respuesta) {
    const contenedor = document.getElementById('imagen-container');
  
    if (respuesta === 'si') {
      contenedor.innerHTML = '<img src="imagenes/si.gif" alt="GIF Sí" width="300">';
    } else if (respuesta === 'no') {
      contenedor.innerHTML = '<img src="imagenes/no.gif" alt="GIF No" width="300">';
    }
  }

  function reiniciar() {
    const contenedor = document.getElementById('imagen-container');
    contenedor.innerHTML = ''; // Limpia el contenido
  }