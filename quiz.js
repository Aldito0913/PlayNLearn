// Datos de las preguntas y respuestas
const questions = [
    {
        question: "¿Cuál es el ave nacional de El Salvador?",
        answers: ["El Torogoz", "El Quetzal", "El Águila Real"],
        correctAnswer: "El Torogoz"
    },
    {
        question: "¿En qué año El Salvador obtuvo su independencia?",
        answers: ["1821", "1812", "1838"],
        correctAnswer: "1821"
    },
    // Agrega más preguntas aquí
];

let currentQuestionIndex = 0;
let score = 0;

// Mostrar la primera pregunta
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-number").textContent = `Pregunta ${currentQuestionIndex + 1}:`;
    document.getElementById("question-text").textContent = question.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    
    question.answers.forEach(answer => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.classList.add("answer-button");
        answerButton.onclick = () => checkAnswer(answer);
        answersDiv.appendChild(answerButton);
    });
}

// Verificar la respuesta seleccionada
function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    if (answer === question.correctAnswer) {
        score++;
        feedback.textContent = "¡Correcto!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Incorrecto. La respuesta correcta es: ${question.correctAnswer}`;
        feedback.style.color = "red";
    }

    document.getElementById("score").textContent = score;

    // Avanzar automáticamente a la siguiente pregunta después de 1 segundo
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(); // Cargar la siguiente pregunta
            feedback.textContent = ""; // Limpiar el mensaje de retroalimentación
        } else {
            // Finalizar el quiz
            feedback.textContent = `¡Has terminado! Tu puntuación final es ${score}.`;
            feedback.style.color = "blue";
        }
    }, 1000);
}

// Iniciar el quiz al cargar la página
window.onload = loadQuestion;
