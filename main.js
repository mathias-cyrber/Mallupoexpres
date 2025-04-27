const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const searchTerm = searchBar.value.toLowerCase();

    if (searchTerm === 'gamer') {
      window.location.href = '#gamer';
    } else if (searchTerm === 'muebles') {
      window.location.href = '#muebles';
    } else if (searchTerm === 'televisiones') {  // Añadido
      window.location.href = '#televisiones';
    } else if (searchTerm === 'contacto') {
      window.location.href = '#contacto';
    } else {
      alert('No se encontró la sección.');
    }
  }
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});