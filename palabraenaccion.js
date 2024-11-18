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

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.querySelector('.situation h2').textContent = question.question;
    
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach((button, index) => {
        button.textContent = question.options[index];
    });

    document.getElementById('feedback').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
}

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    if (answer === 'correct') {
        feedback.textContent = '¡Correcto! ¡Qué bien sabes!';
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
    } else {
        feedback.textContent = '¡Oops! Esa no es la correcta. Inténtalo de nuevo.';
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
    }

    document.getElementById('nextButton').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        document.querySelector('.game-container').innerHTML = '<h2>¡Felicidades! Has terminado el juego.</h2>';
    } else {
        displayQuestion();
    }
}

// Inicializar el juego
displayQuestion();

