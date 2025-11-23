const lista = document.getElementById("listaUsuarios");

fetch("https://jsonplaceholder.typicode.com/users") 
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log("Usuarios obtenidos:", datos);

        datos.forEach(usuario => console.log(usuario.name));

        datos.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = usuario.name;
            lista.appendChild(li);
        });
    })
    .catch(error => {
        console.log("Error al obtener datos:", error);
    });