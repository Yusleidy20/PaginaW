// script.js para la lista desplegable
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownBtn.addEventListener("click", function () {
        // Alternar la visibilidad de la lista desplegable al hacer clic en el botón
        dropdownContent.classList.toggle("show");
    });

    // Cerrar la lista desplegable cuando se hace clic en un enlace
    dropdownContent.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            dropdownContent.classList.remove("show");
        }
    });

    // Cerrar la lista desplegable cuando se hace clic fuera de ella
    window.addEventListener("click", function (e) {
        if (!e.target.matches(".dropbtn") && !e.target.matches(".dropdown-content a")) {
            dropdownContent.classList.remove("show");
        }
    });
});

// Archivo script.js

// Cambiar la imagen al pasar el mouse y restaurarla al quitar el mouse
const miImagen = document.getElementById("mi-imagen");

miImagen.addEventListener("mouseenter", () => {
    miImagen.src = "img/Yusleidy.jpg"; // Cambia la imagen al pasar el mouse
});

miImagen.addEventListener("mouseleave", () => {
    miImagen.src = "img/Yusleidy2.png"; // Restaura la imagen al quitar el mouse
});

// Deshabilitar la capacidad de copiar mediante el teclado
document.addEventListener('keydown', function (e) {
    // Combinaciones de teclas comunes para copiar (Ctrl+C, Cmd+C)
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
    }
});
