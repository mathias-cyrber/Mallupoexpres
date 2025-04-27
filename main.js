const searchBar = document.querySelector('.search-bar');
 const navToggle = document.querySelector('.nav-toggle');
 const navLinks = document.querySelector('.nav-links');
 
 navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
 });
 
 searchBar.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
  const searchTerm = searchBar.value.toLowerCase();
  //  Aquí iría la lógica de filtrado (más complejo)
  //  Por ahora, mantengo la redirección (pero esto se podría mejorar)
  if (searchTerm === 'gamer') {
   window.location.href = '#gamer';
  } else if (searchTerm === 'muebles') {
   window.location.href = '#muebles';
  } else if (searchTerm === 'televisiones') {
   window.location.href = '#televisiones';
  } else if (searchTerm === 'contacto') {
   window.location.href = '#contacto';
  } else {
   alert('No se encontró la sección.');
  }
  }
 });
 
 // --- Carrito de Compras ---
 
 const productosContainer = document.querySelectorAll('.producto-container');
 const carrito = [];
 
 productosContainer.forEach(container => {
  const producto = container.querySelector('.producto');  // Selecciona el .producto existente
  const nombre = producto.querySelector('h2').textContent;
  const precioTexto = producto.querySelector('.precio').textContent;
  const precio = parseFloat(precioTexto.replace('$', ''));
 
  const botonAgregarCarrito = document.createElement('button');
  botonAgregarCarrito.textContent = 'Agregar al carrito';
  botonAgregarCarrito.classList.add('agregar-carrito');
  producto.appendChild(botonAgregarCarrito);  // Agrega el botón al .producto existente
 
  botonAgregarCarrito.addEventListener('click', () => {
  const productoEnCarrito = { nombre, precio, cantidad: 1 };
  const existeEnCarrito = carrito.find(item => item.nombre === productoEnCarrito.nombre);
 
  if (existeEnCarrito) {
   existeEnCarrito.cantidad++;
  } else {
   carrito.push(productoEnCarrito);
  }
 
  actualizarCarrito();  // Actualizamos la visualización después de añadir
  });
 });
 
 function actualizarCarrito() {
  const carritoItems = document.querySelector('.carrito-items');
  const carritoTotal = document.querySelector('.total-precio');
  const carritoCantidad = document.querySelector('.carrito-cantidad');
 
  carritoItems.innerHTML = '';  // Limpiamos el carrito visual
  let total = 0;
  let totalItems = 0;
 
  carrito.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.innerHTML = `
   <span><span class="math-inline">\{item\.nombre\}</span\>
<span\></span>{item.cantidad} x $${item.precio.toFixed(2)}</span>
  `;
  carritoItems.appendChild(itemDiv);
 
  total += item.precio * item.cantidad;
  totalItems += item.cantidad;
  });
 
  carritoTotal.textContent = total.toFixed(2);
  carritoCantidad.textContent = totalItems;
 }
 
 // ---  Lógica para abrir/cerrar el modal del carrito ---
 
 const carritoIcon = document.querySelector('.carrito-icon');
 const carritoModal = document.querySelector('.carrito-modal');
 const carritoCerrar = document.querySelector('.carrito-cerrar');
 
 carritoIcon.addEventListener('click', () => {
  carritoModal.style.display = 'block';
 });
 
 carritoCerrar.addEventListener('click', () => {
  carritoModal.style.display = 'none';
 });