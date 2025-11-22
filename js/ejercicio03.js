const boton = document.getElementById("btnAgregarTarea");
const lista = document.getElementById("listaTareas");
const tarea = document.getElementById("tarea");

boton.addEventListener("click", () => {
    const texto = tarea.value.trim();

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;

        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btnEliminar";
        btnEliminar.textContent = " ❌"; 

        li.append(btnEliminar);
        lista.appendChild(li);

        tarea.value = ""; 
    }
});

// Delegación de eventos
lista.addEventListener("click", (event) => {
    if (event.target.classList.contains("btnEliminar")) {
        event.target.parentElement.remove();
    }
});
