const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') { // Detectar la tecla "Enter"
    const searchTerm = searchBar.value.toLowerCase(); // Obtener el texto y convertirlo a minúsculas

    if (searchTerm === 'gamer') {
      window.location.href = '#gamer';
    } else if (searchTerm === 'muebles') {
      window.location.href = '#muebles';
    } else if (searchTerm === 'contacto') {
      window.location.href = '#contacto';
    } else {
      alert('No se encontró la sección.'); // Opcional: mostrar un mensaje si no hay coincidencia
    }
  }
});

const navToggle = document.querySelector('.nav-toggle');  // Botón
const navLinks = document.querySelector('.nav-links');    // Menú

navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');  // Alternar la clase 'active'
});