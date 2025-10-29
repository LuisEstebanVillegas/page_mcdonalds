// Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`Bienvenido ${user.name}`);
    localStorage.setItem("activeUser", JSON.stringify(user));
    window.location.href = "menu.html";
  } else {
    alert("Correo o contraseña incorrectos");
  }
});
