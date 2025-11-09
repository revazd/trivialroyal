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
    },

    { question: "Combien de continents existe-t-il ?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "Quelle est la plus grande planète du système solaire ?", answers: ["Terre", "Mars", "Jupiter", "Saturne"], correct: 2 },
    { question: "Quelle langue est parlée au Brésil ?", answers: ["Espagnol", "Portugais", "Français", "Anglais"], correct: 1 },
    { question: "Quelle est la capitale de la France ?", answers: ["Lyon", "Marseille", "Paris", "Nice"], correct: 2 },
    { question: "Quel est l'élément chimique ayant pour symbole O ?", answers: ["Or", "Oxygène", "Osmium", "Oxalate"], correct: 1 },
    { question: "Quel est le plus grand océan du monde ?", answers: ["Atlantique", "Pacifique", "Indien", "Arctique"], correct: 1 },
    { question: "Quelle planète est connue comme la planète rouge ?", answers: ["Mercure", "Vénus", "Mars", "Jupiter"], correct: 2 },
    { question: "Quel animal est le roi de la jungle ?", answers: ["Lion", "Tigre", "Éléphant", "Gorille"], correct: 0 },
    { question: "Combien de couleurs y a-t-il dans un arc-en-ciel ?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "Quelle est la capitale de l'Espagne ?", answers: ["Madrid", "Barcelone", "Séville", "Valence"], correct: 0 },
    { question: "Quel pays est surnommé le pays du Soleil-Levant ?", answers: ["Chine", "Corée", "Japon", "Thaïlande"], correct: 2 },
    { question: "Qui a peint la Joconde ?", answers: ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Donatello"], correct: 2 },
    { question: "Quel est l’organe principal de la respiration ?", answers: ["Cœur", "Poumon", "Foie", "Rein"], correct: 1 },
    { question: "Combien de jours y a-t-il dans une année bissextile ?", answers: ["365", "366", "364", "367"], correct: 1 },
    { question: "Quelle est la capitale de l’Italie ?", answers: ["Rome", "Venise", "Milan", "Naples"], correct: 0 },
    { question: "Quel est le métal liquide à température ambiante ?", answers: ["Mercure", "Plomb", "Fer", "Aluminium"], correct: 0 },
    { question: "Quel est le plus grand mammifère terrestre ?", answers: ["Éléphant", "Girafe", "Hippopotame", "Rhinocéros"], correct: 0 },
    { question: "Quel est le plus rapide animal terrestre ?", answers: ["Lion", "Guépard", "Tigre", "Éléphant"], correct: 1 },
    { question: "Quel pays a la plus grande population ?", answers: ["Inde", "États-Unis", "Chine", "Russie"], correct: 2 },
    { question: "Quelle est la capitale de l’Allemagne ?", answers: ["Berlin", "Munich", "Francfort", "Hambourg"], correct: 0 },
    { question: "Combien de pattes a une araignée ?", answers: ["6", "8", "10", "12"], correct: 1 },
    { question: "Quel est le plus long fleuve du monde ?", answers: ["Nil", "Amazon", "Yangzi", "Mississippi"], correct: 1 },
    { question: "Quel gaz est essentiel pour la respiration ?", answers: ["Hydrogène", "Oxygène", "Azote", "Dioxyde de carbone"], correct: 1 },
    { question: "Quel est le plus petit os du corps humain ?", answers: ["Fémur", "Étrier", "Radius", "Clavicule"], correct: 1 },
    { question: "Combien de continents commencent par la lettre 'A' ?", answers: ["1", "2", "3", "4"], correct: 2 },
    { question: "Quel est le symbole chimique de l’or ?", answers: ["Ag", "Au", "Gd", "Fe"], correct: 1 },
    { question: "Quelle est la capitale de l’Angleterre ?", answers: ["Manchester", "Londres", "Birmingham", "Liverpool"], correct: 1 },
    { question: "Qui a écrit 'Roméo et Juliette' ?", answers: ["Victor Hugo", "Shakespeare", "Balzac", "Molière"], correct: 1 },
    { question: "Quelle planète est la plus proche du Soleil ?", answers: ["Mercure", "Vénus", "Mars", "Terre"], correct: 0 },
    { question: "Quelle est la plus grande île du monde ?", answers: ["Madagascar", "Groenland", "Nouvelle-Guinée", "Borneo"], correct: 1 },
    { question: "Quel est l’organe principal du système circulatoire ?", answers: ["Cœur", "Poumon", "Foie", "Rein"], correct: 0 },
    { question: "Quel pays est connu pour les pyramides ?", answers: ["Mexique", "Égypte", "Chine", "Inde"], correct: 1 },
    { question: "Combien de continents sont traversés par l’équateur ?", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "Quel est l’animal marin le plus grand ?", answers: ["Requin", "Baleine bleue", "Orque", "Calmar géant"], correct: 1 },
    { question: "Quel est le plus haut sommet du monde ?", answers: ["K2", "Mont Everest", "Kangchenjunga", "Lhotse"], correct: 1 },
    { question: "Quel est le métal le plus léger ?", answers: ["Aluminium", "Lithium", "Sodium", "Magnésium"], correct: 1 },
    { question: "Quel pays est célèbre pour les kangourous ?", answers: ["Australie", "Nouvelle-Zélande", "Afrique du Sud", "Canada"], correct: 0 },
    { question: "Combien de dents un adulte a-t-il normalement ?", answers: ["28", "30", "32", "34"], correct: 2 },
    { question: "Quelle est la plus grande ville des États-Unis ?", answers: ["Los Angeles", "Chicago", "New York", "Houston"], correct: 2 },
    { question: "Quelle est la langue officielle de l’Italie ?", answers: ["Espagnol", "Français", "Italien", "Allemand"], correct: 2 },
    { question: "Quelle planète a des anneaux visibles ?", answers: ["Saturne", "Mars", "Jupiter", "Vénus"], correct: 0 },
    { question: "Quel pays est le plus grand du monde par superficie ?", answers: ["Chine", "Canada", "Russie", "États-Unis"], correct: 2 },
    { question: "Combien de notes y a-t-il dans une gamme musicale ?", answers: ["6", "7", "8", "12"], correct: 1 },
    { question: "Quel est l’organe qui pompe le sang ?", answers: ["Cœur", "Poumon", "Rein", "Foie"], correct: 0 },
    { question: "Quelle est la capitale de la Russie ?", answers: ["Saint-Pétersbourg", "Moscou", "Novossibirsk", "Kazan"], correct: 1 },
    { question: "Quel est le plus grand désert chaud ?", answers: ["Sahara", "Gobi", "Kalahari", "Arabique"], correct: 0 },
    { question: "Quel est le plus long os du corps humain ?", answers: ["Fémur", "Tibia", "Humérus", "Radius"], correct: 0 },
    { question: "Quelle est la capitale du Japon ?", answers: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"], correct: 1 },
    { question: "Combien de secondes y a-t-il dans une minute ?", answers: ["30", "60", "90", "120"], correct: 1 },
    { question: "Quel océan se trouve à l’est de l’Afrique ?", answers: ["Atlantique", "Indien", "Pacifique", "Arctique"], correct: 1 },
    { question: "Quel animal pond des œufs ?", answers: ["Chien", "Cochon", "Oiseau", "Vache"], correct: 2 },
    { question: "Quelle est la monnaie du Royaume-Uni ?", answers: ["Euro", "Livre sterling", "Dollar", "Franc"], correct: 1 },
    { question: "Quel pays est surnommé le pays des mille lacs ?", answers: ["Norvège", "Finlande", "Suède", "Canada"], correct: 1 },
    { question: "Quelle est la plus grande chaîne de montagnes ?", answers: ["Himalaya", "Andes", "Alpes", "Rockies"], correct: 0 },
    { question: "Quel pays a inventé le papier ?", answers: ["Égypte", "Chine", "Grèce", "Inde"], correct: 1 },
    { question: "Quel instrument a des touches blanches et noires ?", answers: ["Guitare", "Piano", "Violon", "Flûte"], correct: 1 },
    { question: "Combien de planètes dans le système solaire ?", answers: ["7", "8", "9", "10"], correct: 1 },
    { question: "Quel pays est célèbre pour les tulipes ?", answers: ["Allemagne", "Pays-Bas", "Belgique", "Danemark"], correct: 1 },
    { question: "Quel est le plus grand pays d’Afrique ?", answers: ["Algérie", "Nigeria", "Égypte", "Afrique du Sud"], correct: 0 },
    { question: "Quelle est la capitale de l’Australie ?", answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
    { question: "Quel est l’organe principal du système digestif ?", answers: ["Estomac", "Foie", "Intestin", "Cœur"], correct: 0 },
    { question: "Quel pays est le berceau des Jeux Olympiques ?", answers: ["Italie", "Grèce", "France", "Chine"], correct: 1 },
    { question: "Quel métal a pour symbole Fe ?", answers: ["Fer", "Argent", "Or", "Plomb"], correct: 0 },
    { question: "Quel animal est connu pour changer de couleur ?", answers: ["Caméléon", "Lion", "Éléphant", "Girafe"], correct: 0 },
    { question: "Combien de continents commencent par la lettre 'A' ?", answers: ["2", "3", "4", "5"], correct: 1 },
    { question: "Quel pays est surnommé le pays du Soleil-Levant ?", answers: ["Japon", "Chine", "Corée", "Thaïlande"], correct: 0 },
    { question: "Quel animal a une trompe ?", answers: ["Éléphant", "Rhinocéros", "Hippopotame", "Girafe"], correct: 0 },
    { question: "Quelle est la plus grande ville du monde ?", answers: ["Tokyo", "New York", "Shanghai", "Delhi"], correct: 0 },
    { question: "Quelle est la capitale du Canada ?", answers: ["Toronto", "Ottawa", "Montréal", "Vancouver"], correct: 1 },
    { question: "Quel océan borde la côte ouest des États-Unis ?", answers: ["Atlantique", "Pacifique", "Indien", "Arctique"], correct: 1 },
    { question: "Quel animal est le symbole de l’Australie ?", answers: ["Kangourou", "Koala", "Dingo", "Émeu"], correct: 0 },
    { question: "Quel pays a la forme d’une botte ?", answers: ["Espagne", "Italie", "Grèce", "Portugal"], correct: 1 },
    { question: "Combien de côtés a un hexagone ?", answers: ["5", "6", "7", "8"], correct: 1 },
    { question: "Quelle est la capitale de la Turquie ?", answers: ["Istanbul", "Ankara", "Izmir", "Bursa"], correct: 1 },
    { question: "Quel est l’élément chimique ayant pour symbole H ?", answers: ["Hydrogène", "Helium", "Holmium", "Hafnium"], correct: 0 },
    { question: "Quel est le plus petit pays du monde ?", answers: ["Monaco", "Nauru", "Vatican", "Malte"], correct: 2 },
    { question: "Quel animal a des rayures noires et blanches ?", answers: ["Zèbre", "Tigre", "Panthère", "Girafe"], correct: 0 },
    { question: "Quelle est la capitale de la Chine ?", answers: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"], correct: 1 },
    { question: "Combien de lettres y a-t-il dans l’alphabet français ?", answers: ["24", "25", "26", "27"], correct: 2 },
    { question: "Quel est le plus grand lac d’Afrique ?", answers: ["Tanganika", "Victoria", "Malawi", "Chad"], correct: 1 },
    { question: "Quelle planète est connue pour sa couleur bleue ?", answers: ["Neptune", "Mars", "Vénus", "Jupiter"], correct: 0 },
    { question: "Quel pays a pour capitale Bangkok ?", answers: ["Thaïlande", "Vietnam", "Cambodge", "Laos"], correct: 0 },
    { question: "Quel animal est le plus lourd ?", answers: ["Éléphant", "Baleine bleue", "Hippopotame", "Rhinocéros"], correct: 1 },
    { question: "Quel pays est célèbre pour la Tour Eiffel ?", answers: ["Italie", "France", "Espagne", "Angleterre"], correct: 1 },
    { question: "Quel est le principal gaz des volcans ?", answers: ["Oxygène", "Dioxyde de carbone", "Azote", "Hélium"], correct: 1 },
    { question: "Quelle est la capitale de l’Inde ?", answers: ["Mumbai", "Delhi", "Bangalore", "Kolkata"], correct: 1 },
    { question: "Quel pays est célèbre pour la pizza et les pâtes ?", answers: ["France", "Italie", "Espagne", "Grèce"], correct: 1 },
    { question: "Quel animal est considéré comme le meilleur ami de l’homme ?", answers: ["Chat", "Chien", "Cheval", "Oiseau"], correct: 1 },
    { question: "Quel pays a pour capitale Berlin ?", answers: ["Autriche", "Allemagne", "Suisse", "Pays-Bas"], correct: 1 },
    { question: "Quel est l’élément chimique ayant pour symbole Na ?", answers: ["Nickel", "Sodium", "Néon", "Niobium"], correct: 1 },
    { question: "Quel est l’animal le plus rapide du monde ?", answers: ["Guépard", "Aigle", "Lion", "Tigre"], correct: 0 },
    { question: "Combien de continents y a-t-il en Afrique ?", answers: ["1", "2", "3", "4"], correct: 0 },
    { question: "Quelle est la plus grande ville de France ?", answers: ["Marseille", "Lyon", "Paris", "Toulouse"], correct: 2 },
    { question: "Quel pays est connu pour le carnaval de Rio ?", answers: ["Argentine", "Brésil", "Colombie", "Mexique"], correct: 1 },
    { question: "Quelle est la capitale de l’Égypte ?", answers: ["Le Caire", "Alexandrie", "Gizeh", "Assouan"], correct: 0 },
    { question: "Quel est l’élément chimique ayant pour symbole C ?", answers: ["Calcium", "Carbone", "Cobalt", "Chlore"], correct: 1 },
    { question: "Quel animal a une longue trompe et de grandes oreilles ?", answers: ["Éléphant", "Rhinocéros", "Hippopotame", "Girafe"], correct: 0 },
    { question: "Combien de joueurs y a-t-il dans une équipe de football ?", answers: ["9", "10", "11", "12"], correct: 2 },
    { question: "Quelle planète est connue comme la planète bleue ?", answers: ["Terre", "Mars", "Vénus", "Jupiter"], correct: 0 }
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