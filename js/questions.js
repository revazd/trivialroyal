const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        answers: ["Paris", "Londres", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "Combien font 7 × 8 ?",
        answers: ["54", "56", "58", "52"],
        correct: 1
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        answers: ["Atlantique", "Indien", "Arctique", "Pacifique"],
        correct: 3
    },
    {
        question: "En quelle année a eu lieu la Révolution française ?",
        answers: ["1789", "1799", "1804", "1815"],
        correct: 0
    },
    {
        question: "Qui a peint la Joconde ?",
        answers: ["Van Gogh", "Picasso", "Léonard de Vinci", "Michel-Ange"],
        correct: 2
    },
    {
        question: "Quelle est la planète la plus proche du Soleil ?",
        answers: ["Vénus", "Mercure", "Mars", "Terre"],
        correct: 1
    },
    {
        question: "Combien de continents existe-t-il ?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Quel est le symbole chimique de l'or ?",
        answers: ["Go", "Au", "Or", "Ag"],
        correct: 1
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        answers: ["Victor Hugo", "Émile Zola", "Balzac", "Flaubert"],
        correct: 0
    },
    {
        question: "Quelle est la vitesse de la lumière ?",
        answers: ["300 000 km/s", "150 000 km/s", "450 000 km/s", "200 000 km/s"],
        correct: 0
    },
    {
        question: "Quel est le plus haut sommet du monde ?",
        answers: ["K2", "Mont Blanc", "Everest", "Kilimandjaro"],
        correct: 2
    },
    {
        question: "Combien de touches a un piano standard ?",
        answers: ["76", "88", "92", "100"],
        correct: 1
    },
    {
        question: "Quelle est la langue la plus parlée au monde ?",
        answers: ["Anglais", "Espagnol", "Mandarin", "Hindi"],
        correct: 2
    },
    {
        question: "En quelle année l'homme a-t-il marché sur la Lune ?",
        answers: ["1965", "1969", "1972", "1975"],
        correct: 1
    },
    {
        question: "Quel est le plus petit pays du monde ?",
        answers: ["Monaco", "Vatican", "Saint-Marin", "Liechtenstein"],
        correct: 1
    },
    {
        question: "Quel animal est le symbole de la Chine ?",
        answers: ["Dragon", "Tigre", "Panda", "Phénix"],
        correct: 2
    },
    {
        question: "Combien de joueurs y a-t-il dans une équipe de football ?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        question: "Quelle est la capitale du Japon ?",
        answers: ["Kyoto", "Tokyo", "Osaka", "Nagoya"],
        correct: 1
    },
    {
        question: "Quel est le plus long fleuve du monde ?",
        answers: ["Nil", "Amazone", "Yangtsé", "Mississippi"],
        correct: 1
    },
    {
        question: "En quelle année est tombé le mur de Berlin ?",
        answers: ["1987", "1989", "1991", "1993"],
        correct: 1
    }
];

// Fonction utilitaire pour mélanger un tableau
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}