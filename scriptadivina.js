// Lista de palabras para adivinar y sus pistas
const palabras = [
    { palabra: "LENGUA", pista: "Es una parte de nuestro cuerpo usada para hablar y comer." },
    { palabra: "ESCUELA", pista: "Es el lugar donde los niños aprenden." },
    { palabra: "SALVADOR", pista: "Es un país de Centroamérica." },
    { palabra: "JUEGO", pista: "Es una actividad divertida que hacemos para pasar el tiempo." },
    { palabra: "APRENDER", pista: "Es lo que hacemos cuando estudiamos algo nuevo." }
];

let palabraActualIndex = 0;
let palabraOculta = palabras[palabraActualIndex].palabra;
let pistaActual = palabras[palabraActualIndex].pista;
let letrasAdivinadas = Array(palabraOculta.length).fill("_");
let palabraContada = 0; // Contador de palabras adivinadas

// Selecciona los elementos necesarios en el HTML
const wordLettersContainer = document.querySelector(".word-letters");
const teclas = document.querySelectorAll(".key");
const feedback = document.querySelector(".feedback p");
const hintText = document.querySelector(".hint-text");
const modal = document.getElementById("congratulationsModal");
const redirectButton = document.getElementById("redirect-btn");

// Generar espacios en blanco según la longitud de la palabra actual
function generarEspacios() {
    wordLettersContainer.innerHTML = "";
    letrasAdivinadas.forEach(() => {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = "_";
        wordLettersContainer.appendChild(span);
    });
}

// Inicializar con la primera palabra
generarEspacios();
actualizarPalabra();
mostrarPista();

// Función para actualizar la visualización de las letras adivinadas
function actualizarPalabra() {
    const letrasElementos = document.querySelectorAll(".word-letters .letter");
    letrasAdivinadas.forEach((letra, index) => {
        letrasElementos[index].textContent = letra;
    });
}

// Función para mostrar la pista correspondiente
function mostrarPista() {
    hintText.textContent = pistaActual;
}

// Función para manejar intento de adivinanza
function adivinarLetra(letra) {
    letra = letra.toUpperCase();
    if (palabraOculta.includes(letra)) {
        feedback.textContent = `¡Bien hecho! La letra ${letra} está en la palabra.`;
        
        for (let i = 0; i < palabraOculta.length; i++) {
            if (palabraOculta[i] === letra) {
                letrasAdivinadas[i] = letra;
            }
        }
    } else {
        feedback.textContent = `La letra ${letra} no está en la palabra.`;
    }
    
    actualizarPalabra();

    // Si todas las letras de la palabra han sido adivinadas
    if (!letrasAdivinadas.includes("_")) {
        palabraContada++; // Incrementar contador de palabras adivinadas

        // Si el jugador ha completado todas las palabras
        if (palabraContada === palabras.length) {
            mostrarModal(); // Mostrar el modal
        } else {
            setTimeout(siguientePalabra, 1000); // Cambiar a la siguiente palabra
        }
    }
}

// Cambiar a la siguiente palabra en la lista
function siguientePalabra() {
    palabraActualIndex = (palabraActualIndex + 1) % palabras.length;
    palabraOculta = palabras[palabraActualIndex].palabra;
    pistaActual = palabras[palabraActualIndex].pista;
    letrasAdivinadas = Array(palabraOculta.length).fill("_");
    generarEspacios();
    mostrarPista();
    feedback.textContent = "¡Nueva palabra! Intenta adivinar.";
    
    teclas.forEach((tecla) => tecla.disabled = false); // Habilitar todas las teclas
}

// Mostrar el modal de felicitaciones
function mostrarModal() {
    modal.classList.add("show"); // Agrega la clase 'show' para hacer visible el modal
}

// Función para animar la tecla presionada
function animarTecla(tecla) {
    tecla.classList.add("pressed");
    setTimeout(() => tecla.classList.remove("pressed"), 200);
}

// Evento de cada tecla al ser presionada en pantalla
teclas.forEach((tecla) => {
    tecla.addEventListener("click", () => {
        const letra = tecla.textContent;
        tecla.disabled = true; // Desactiva la tecla para evitar reusarla
        adivinarLetra(letra);
        animarTecla(tecla);
    });
});

// Evento para detectar presiones del teclado físico
document.addEventListener("keydown", (event) => {
    const letra = event.key.toUpperCase();
    if (/[A-Z]/.test(letra) && letra.length === 1) {
        adivinarLetra(letra);
        
        const teclaBoton = Array.from(teclas).find((btn) => btn.textContent === letra);
        if (teclaBoton) {
            animarTecla(teclaBoton);
            teclaBoton.disabled = true;
        }
    }
});

// Redirigir al usuario a lenguaje.html cuando hace clic en "Volver al Inicio"
redirectButton.addEventListener("click", () => {
    window.location.href = "lenguaje.html"; // Redirige a lenguaje.html
});
