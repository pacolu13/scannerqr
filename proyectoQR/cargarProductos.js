//Espacio reservado para el uso de la API


// Leer el archivo JSON usando fetch
fetch('prueba.JSON')
    .then(response => response.json()) // Parsear el JSON
    .then(data => loadProducts(data)) // Pasar los datos al método de muestra
    .catch(error => console.error('Error al leer el archivo JSON:', error));

function loadProducts(listaProductos) {
    const container = document.querySelector('.lista-productos');
    listaProductos.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = createProduct(element);

        container.appendChild(card);
    });
}

function createProduct(producto) {

    let template = `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${producto.Tipo}</div>
      ${producto.Nombre}
    </div>
    <span class="badge bg-primary rounded-pill">${producto.Cantidad}</span>
    </li>`;
    return template;
}

