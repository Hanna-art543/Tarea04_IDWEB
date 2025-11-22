const boton = document.getElementById("btnAgregarTarea");
const lista = document.getElementById("lista");
const tarea = document.getElementById("tarea");

boton.addEventListener("click", () => {
    const texto = tarea.value.trim();

    if(texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);

        texto.value = "";
    }
})