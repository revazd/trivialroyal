let currentQuestion = 0;
let score = 0;
let lives = 3;
let shuffledQuestions = [];
let questionIndex = 0;

// Initialisation du jeu
function initGame() {
    currentQuestion = 0;
    score = 0;
    lives = 3;
    questionIndex = 0;
    shuffledQuestions = shuffleArray([...questions]);
    
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    
    loadQuestion();
}

function loadQuestion() {
    // Si toutes les questions ont été utilisées, recommencer avec un nouveau mélange
    if (questionIndex >= shuffledQuestions.length) {
        questionIndex = 0;
        shuffledQuestions = shuffleArray([...questions]);
    }

    const question = shuffledQuestions[questionIndex];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1}`;
    document.getElementById('lives').textContent = `❤️ ${lives}`;
    
    // Progression basée sur le nombre de questions réussies (max 100% à 20 questions)
    const progress = Math.min((currentQuestion / 20) * 100, 100);
    document.getElementById('progressBar').style.width = progress + '%';

    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index, question.correct);
        answersContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        buttons[correct].classList.add('correct');
        score += 10;
        
        setTimeout(() => {
            currentQuestion++;
            questionIndex++;
            loadQuestion();
        }, 1000);
    } else {
        buttons[selected].classList.add('incorrect');
        buttons[correct].classList.add('correct');
        
        lives--;
        
        if (lives <= 0) {
            setTimeout(() => endGame(), 1500);
        } else {
            setTimeout(() => {
                questionIndex++;
                loadQuestion();
            }, 1500);
        }
    }
}

function endGame() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    document.getElementById('finalScore').textContent = `${currentQuestion} questions réussies`;
    
    let message = '';
    if (currentQuestion >= 15) {
        message = '🏆 Incroyable ! Vous êtes un survivant légendaire !';
    } else if (currentQuestion >= 10) {
        message = '🌟 Excellent ! Belle performance !';
    } else if (currentQuestion >= 5) {
        message = '👍 Bon effort, continuez à vous entraîner !';
    } else {
        message = '💪 Ne lâchez rien, réessayez !';
    }
    
    document.getElementById('resultMessage').textContent = message;
}

// Démarrage automatique du jeu au chargement de la page
window.addEventListener('DOMContentLoaded', initGame);