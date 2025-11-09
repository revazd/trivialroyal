// Mode Top Chrono - 15 secondes par question
let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];
let timer;
let timeLeft = 15;

// Initialisation du jeu
function initGame() {
    currentQuestion = 0;
    score = 0;
    shuffledQuestions = shuffleArray([...questions]).slice(0, 10);
    
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= 10) {
        endGame();
        return;
    }

    const question = shuffledQuestions[currentQuestion];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1}/10`;
    
    const progress = ((currentQuestion + 1) / 10) * 100;
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

    startTimer();
}

function startTimer() {
    timeLeft = 15;
    document.getElementById('timer').textContent = `⏱️ ${timeLeft}s`;
    document.getElementById('timer').classList.remove('warning');

    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `⏱️ ${timeLeft}s`;

        if (timeLeft <= 5) {
            document.getElementById('timer').classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(-1, 0); // Temps écoulé = mauvaise réponse
        }
    }, 1000);
}

function checkAnswer(selected, correct) {
    clearInterval(timer);

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        buttons[correct].classList.add('correct');
        // Bonus de points basé sur le temps restant
        const bonus = Math.max(0, timeLeft);
        score += 10 + bonus;
        
        setTimeout(() => {
            currentQuestion++;
            loadQuestion();
        }, 1000);
    } else {
        if (selected >= 0) {
            buttons[selected].classList.add('incorrect');
        }
        buttons[correct].classList.add('correct');
        
        setTimeout(() => {
            currentQuestion++;
            loadQuestion();
        }, 1500);
    }
}

function endGame() {
    clearInterval(timer);
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    document.getElementById('finalScore').textContent = `${score}/250`;
    
    let message = '';
    if (score >= 200) {
        message = '⚡ Incroyable ! Vitesse et précision parfaites !';
    } else if (score >= 150) {
        message = '🔥 Excellent timing !';
    } else if (score >= 100) {
        message = '👍 Bon travail, continuez à vous améliorer !';
    } else {
        message = '💪 Entraînez-vous à être plus rapide !';
    }
    
    document.getElementById('resultMessage').textContent = message;
}

// Démarrage automatique du jeu au chargement de la page
window.addEventListener('DOMContentLoaded', initGame);