const citations = [
    "Chaque jour est une nouvelle chance d'échouer magnifiquement ou de réussir brillamment.",
    "Si Python ne bugue pas, c'est que tu as oublié de le lancer.",
    "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.",
    "Pas de panique, c'est juste du code."
];

function genererCitation() {
    const index = Math.floor(Math.random() * citations.length);
    document.getElementById('quote').innerText = citations[index];
}