const menu = [
  { id: 1, nombre: "Big Mac", precio: 18000 },
  { id: 2, nombre: "McPollo", precio: 16000 },
  { id: 3, nombre: "Papas medianas", precio: 7000 },
  { id: 4, nombre: "Coca-Cola 400ml", precio: 5000 }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarMenu() {
  const div = document.getElementById("menu");
  div.innerHTML = menu.map(item => `
    <div class="producto">
      <h3>${item.nombre}</h3>
      <p>$${item.precio}</p>
      <button onclick="agregar(${item.id})">Agregar</button>
    </div>
  `).join("");
}

function agregar(id) {
  const producto = menu.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} agregado al carrito`);
}

mostrarMenu();
