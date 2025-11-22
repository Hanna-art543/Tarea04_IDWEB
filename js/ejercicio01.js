const boton = document.getElementById("btnCambiarColor");
const cuerpo = document.getElementById("body");
const colores = ["red", "blue", "yellow", "lightgreen", "lightblue", "pink", "cyan"];

boton.addEventListener("click", () =>  {
    const colorAleatorio = colores[Math.floor(Math.random()*colores.length)];
    cuerpo.style.backgroundColor = colorAleatorio;
})