let currentQuestionIndex = 0;
let points = 0; // Variable para almacenar los puntos

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
    },
    {
        question: "Si ves una pupusa bien sabrosa, ¿qué harías?",
        correctAnswer: "¡Me la como de una vez!",
        options: [
            "¡Me la como de una vez!",
            "Voy a tomar agua.",
            "Me voy a dormir."
        ]
    },
    {
        question: "Cuando te dan un buen consejo, ¿qué puedes decir?",
        correctAnswer: "¡Qué buena onda!",
        options: [
            "¡Qué buena onda!",
            "¿Qué onda?",
            "No entiendo."
        ]
    },
    {
        question: "Si ves a tu amigo muy cansado, ¿qué dirías?",
        correctAnswer: "¡Te veo reventado!",
        options: [
            "¡Te veo reventado!",
            "Vamos a estudiar.",
            "Vete a descansar."
        ]
    },
    {
        question: "¿Cómo invitas a alguien a bailar?",
        correctAnswer: "¡Vamos a menear la cadera!",
        options: [
            "¡Vamos a menear la cadera!",
            "Vamos a ver televisión.",
            "Vamos a estudiar."
        ]
    },
    {
        question: "Si te caes de la moto, ¿qué dirías?",
        correctAnswer: "¡Ay, me caí del caballo!",
        options: [
            "¡Ay, me caí del caballo!",
            "No me duele.",
            "Estoy feliz."
        ]
    },
    {
        question: "Si vas a la playa, ¿qué te gustaría hacer?",
        correctAnswer: "¡A zambullirme al agua!",
        options: [
            "¡A zambullirme al agua!",
            "Voy a hacer tarea.",
            "Voy a dormir."
        ]
    },
    {
        question: "Si te ves con un buen amigo, ¿qué dirías?",
        correctAnswer: "¡Qué chilero verte!",
        options: [
            "¡Qué chilero verte!",
            "Nos vemos luego.",
            "Vamos a ver una película."
        ]
    }
];

// Mostrar la pregunta actual
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.querySelector('#question').textContent = question.question;
    
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
        
        // Incrementar los puntos por una respuesta correcta
        points += 10; // Puedes cambiar la cantidad de puntos si lo deseas

        // Actualizar el puntaje mostrado
        document.getElementById('pointsDisplay').textContent = `Puntos: ${points}`;

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
        document.querySelector('.game-container').innerHTML = `
            <div class="final-message">
                <h2>¡Felicidades! Has terminado el juego.</h2>
                <p>Tu puntaje final es: ${points}</p>
                <p>¡Lo hiciste excelente! ¡Sigue practicando!</p>
                <a href="lenguaje.html" class="back-to-home">Volver al inicio</a>
            </div>
        `;
    } else {
        displayQuestion();
    }
}

// Inicializar el juego
displayQuestion();
