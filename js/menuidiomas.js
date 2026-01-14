const btn = document.getElementById("lang-btn");
const menu = document.getElementById("lang-menu");

// Abrir/cerrar menú y animar flecha
btn.addEventListener("click", () => {
    const isOpen = menu.style.display === "block";

    menu.style.display = isOpen ? "none" : "block";
    btn.classList.toggle("open", !isOpen);
});

// Cerrar si haces clic fuera
document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
        btn.classList.remove("open");
    }
});

// Cambiar idioma al hacer clic en un enlace
document.querySelectorAll(".lang-menu a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = link.getAttribute("href");
    });
});