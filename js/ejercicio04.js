const boton = document.getElementById("btnOrdenar");
const tabla = document.getElementById("tablaPersonas");

let ascendente = true;

boton.addEventListener("click", () => {
    // Seleccionamos solo las filas del tbody
    const filas = Array.from(tabla.querySelectorAll("tbody tr"));

    // Ordenamos
    filas.sort((a, b) => {
        const edadA = parseInt(a.children[1].textContent);
        const edadB = parseInt(b.children[1].textContent);

       if(ascendente) { 
        return edadA - edadB; 
        } 
       else { 
        return edadB - edadA; 
        }
    });

    // Limpiar solo el tbody
    const tbody = tabla.querySelector("tbody");
    tbody.innerHTML = "";

    // Insertar filas ordenadas
    filas.forEach(fila => tbody.appendChild(fila));

    // Cambiar el orden para la siguiente vez
    ascendente = !ascendente;
});
