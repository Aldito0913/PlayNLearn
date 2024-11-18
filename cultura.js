particlesJS("particles-js", {
    particles: {
        number: {
            value: 175, // Cantidad moderada de partículas
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#00ff00" }, // Partículas de color verde
        shape: {
            type: "circle", // Forma circular para las partículas
            stroke: { width: 0, color: "#00ff00" }
        },
        opacity: {
            value: 0.7, // Partículas semi-transparentes
            random: false
        },
        size: {
            value: 4, // Tamaño de las partículas
            random: true, // Variación aleatoria en el tamaño
            anim: { enable: true, speed: 10, size_min: 0.5 } // Animación de tamaño
        },
        move: {
            enable: true,
            speed: 3, // Movimiento lento
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out", // Salen del canvas y no vuelven
            bounce: false,
            attract: {
                enable: true, // Atraer partículas hacia el cursor
                rotateX: 3000,
                rotateY: 3000
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab" // Conectar partículas cercanas al pasar el cursor
            },
            onclick: {
                enable: true,
                mode: "repulse" // Repeler partículas al hacer clic
            }
        },
        modes: {
            grab: {
                distance: 150, // Distancia para conectar partículas
                line_linked: { opacity: 0.8 } // Líneas visibles entre partículas
            },
            repulse: {
                distance: 200, // Distancia de repulsión
                duration: 0.4
            }
        }
    },
    retina_detect: true, // Optimización para pantallas de alta resolución
    background: {
        color: "#121212", // Fondo oscuro
    }
});

