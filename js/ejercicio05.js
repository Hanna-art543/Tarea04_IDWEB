const cajas = document.querySelectorAll(".caja");

cajas.forEach(caja => {
    caja.addEventListener("click", () => {
        cajas.forEach(c => c.classList.remove("activa"));

        caja.classList.add("activa");
    });
});
