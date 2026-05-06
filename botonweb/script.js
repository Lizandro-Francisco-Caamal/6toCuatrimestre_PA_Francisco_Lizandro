document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btnAccesibilidad");
    const panel = document.getElementById("panelAccesibilidad");

    btn.addEventListener("click", () => {
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });

    document.getElementById("optTexto").addEventListener("change", function () {
        document.body.classList.toggle("texto-grande", this.checked);
    });

    document.getElementById("optContraste").addEventListener("change", function () {
        document.body.classList.toggle("contraste", this.checked);
    });

    document.getElementById("optFuente").addEventListener("change", function () {
        document.body.classList.toggle("fuente-legible", this.checked);
    });

    document.getElementById("optLectura").addEventListener("change", function () {
        document.body.classList.toggle("modo-lectura", this.checked);
    });

});