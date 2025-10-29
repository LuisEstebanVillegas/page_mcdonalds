// Registro de usuarios
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.email === email)) {
    alert("Este usuario ya está registrado");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registro exitoso");
  window.location.href = "login.html";
});
