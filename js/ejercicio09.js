// Función asincrónica 
async function obtenerUsuarios() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    // Respuesta incorrecta lanza un error
    if (!respuesta.ok) {
      throw new Error("Error en la petición: " + respuesta.status);
    }

    // Convertir a JSON
    const datos = await respuesta.json();
    console.log("Usuarios obtenidos:", datos);

  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}

// Mostrar resultados en el HTML
function mostrarDatos(usuarios) {
  const div = document.getElementById("resultado");

  div.innerHTML = "<h3>Usuarios cargados:</h3>";

  usuarios.forEach(u => {
    div.innerHTML += `
      <p><strong>${u.name}</strong> - ${u.email}</p>
    `;
  });
}

// Botón
document.getElementById("btnCargar").addEventListener("click", obtenerUsuarios);
