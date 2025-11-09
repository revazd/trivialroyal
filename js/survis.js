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
window.onload = initGame;