// Detectar envío del formulario
document.getElementById("formulario").addEventListener("submit", async function (event) {
  event.preventDefault(); // Evita recargar la página

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  const datos = {
    name: nombre,
    email: email
  };

  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(datos)
    });

    // Error
    if (!respuesta.ok) {
      throw new Error("Error al enviar datos. Código: " + respuesta.status);
    }

    const resultado = await respuesta.json();

    // Mostrar mensaje en pantalla
    document.getElementById("mensaje").textContent =
      "Datos enviados correctamente. ID generado: " + resultado.id;

    console.log("Respuesta del servidor:", resultado);

  } catch (error) {
    document.getElementById("mensaje").textContent =
      "Ocurrió un error: " + error.message;
    console.error(error);
  }
});
