let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrar() {
  const div = document.getElementById("carrito");
  if (carrito.length === 0) {
    div.innerHTML = "<p>Carrito vacío</p>";
    document.getElementById("total").innerText = "";
    return;
  }

  let total = 0;
  div.innerHTML = carrito.map((p, i) => {
    total += p.precio;
    return `<p>${p.nombre} - $${p.precio} <button onclick="eliminar(${i})">❌</button></p>`;
  }).join("");

  document.getElementById("total").innerText = `Total: $${total}`;
}

function eliminar(i) {
  carrito.splice(i, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrar();
}

function vaciar() {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrar();
}

function comprar() {
  alert("✅ Pedido confirmado. ¡Gracias por tu compra!");
  vaciar();
}

mostrar();
