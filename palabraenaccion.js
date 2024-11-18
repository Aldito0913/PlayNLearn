let currentQuestionIndex = 0;

const questions = [
    {
        question: "¿Qué dirías si tienes hambre?",
        correctAnswer: "¡Estoy muerto de hambre!",
        options: [
            "¡Estoy muerto de hambre!",
            "Tengo sed.",
            "Voy a dormir."
        ]
    },
    {
        question: "¿Qué dices cuando quieres invitar a alguien a comer?",
        correctAnswer: "¡Vamos a echar un pisto!",
        options: [
            "¡Vamos a echar un pisto!",
            "Tengo sueño.",
            "Vamos a ver una película."
        ]
    },
    {
        question: "Si te caes de un árbol, ¿qué dirías?",
        correctAnswer: "¡Ay, me pegué con el guante!",
        options: [
            "¡Ay, me pegué con el guante!",
            "Estoy feliz.",
            "¿Qué onda?"
        ]
    }
];

// Mostrar la pregunta actual
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.querySelector('.situation h2').textContent = question.question;
    
    // Generar opciones de respuesta
    const optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = ''; // Limpiar las opciones previas

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    // Limpiar feedback y ocultar botón "Siguiente"
    document.getElementById('feedback').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
}

// Verificar la respuesta seleccionada
function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    if (selectedAnswer === question.correctAnswer) {
        feedback.textContent = "¡Correcto! ¡Qué bien sabes!";
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
        document.getElementById('nextButton').style.display = 'inline-block'; // Mostrar el botón de "Siguiente"
    } else {
        feedback.textContent = "¡Oops! Esa no es la correcta. Inténtalo de nuevo.";
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
        document.getElementById('nextButton').style.display = 'none'; // Ocultar botón "Siguiente" hasta que sea correcto
    }
}

// Pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        document.querySelector('.game-container').innerHTML = '<h2>¡Felicidades! Has terminado el juego.</h2><a href="lenguaje.html" class="back-to-home">Volver al inicio</a>';
    } else {
        displayQuestion();
    }
}

// Inicializar el juego
displayQuestion();

