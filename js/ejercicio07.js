const lista = document.getElementById("listaUsuarios");

// Obetenemos los datos
fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(usuarios => {
        // Ordenamos los usuarios 
        usuarios.sort((a, b) => a.name.localeCompare(b.name));

        // Agregamos usuario y correo
        usuarios.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = `${usuario.name} - ${usuario.email}`;
            lista.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error al obtener los usuarios:", error);
    });
