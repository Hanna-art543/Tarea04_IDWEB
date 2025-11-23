// Enviar un POST a https://jsonplaceholder.typicode.com/posts
// Respuesta en la consola 

const form = document.getElementById('postForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Obtener valores del formulario
  const title = document.getElementById('title').value.trim();
  const body = document.getElementById('body').value.trim();
  const userIdRaw = document.getElementById('userId').value;
  const userId = Number(userIdRaw);

  // Construir el payload
  const payload = { title, body, userId };

  try {
    // peticion POST usando fetch y async/await
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(payload)
    });

    // Chequeo estado HTTP
    if (!response.ok) {
      console.error('Error en la respuesta HTTP:', response.status, response.statusText);
      const errText = await response.text();
      console.error('Cuerpo de error:', errText);
      return;
    }

    // Parsear respuesta JSON y mostrar en consola
    const data = await response.json();
    console.log('Respuesta del servidor:', data);

    alert('Post enviado. Revisa la consola para ver la respuesta.');

  } catch (error) {
    console.error('Error al enviar el post:', error);
  }
});
