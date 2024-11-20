// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Datos de progreso (pueden ser de una base de datos o un archivo JSON en un proyecto real)
    const progressData = {
        "math": 80,       // Matemáticas
        "socials": 70,    // Sociales
        "language": 90,   // Lenguaje
        "science": 60,    // Ciencias
        "quiz": 50        // Quiz
    };

    // Función para actualizar las barras de progreso
    function updateProgressBars() {
        for (let subject in progressData) {
            const progressBar = document.getElementById(subject).querySelector('.progress-bar');
            const progressValue = progressData[subject];
            progressBar.style.width = `${progressValue}%`;
            progressBar.textContent = `${progressValue}%`;
        }
    }

    // Actualizar las barras de progreso cuando la página cargue
    updateProgressBars();

    // Botón para redirigir a la página de inicio
    document.getElementById("homeButton").addEventListener("click", () => {
        window.location.href = "index.html";  // Redirigir a la página de inicio
    });

    // Botón de cerrar sesión
    document.getElementById("logoutButton").addEventListener("click", () => {
        window.location.href = "login.html";  // Redirigir a la página de login
    });

    // Manejo del cursor personalizado
    const cursor = document.getElementById("cursorEffect");

    document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.clientY - 15}px`;  // Centrado del cursor
        cursor.style.left = `${e.clientX - 15}px`; // Centrado del cursor
    });

    document.addEventListener("mouseout", () => {
        cursor.style.opacity = "0";  // Ocultar cursor al salir
    });

    document.addEventListener("mouseover", () => {
        cursor.style.opacity = "1";  // Mostrar cursor al entrar
    });
});
