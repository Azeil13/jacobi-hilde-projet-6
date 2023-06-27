



// Création de l'élément <link>
const fontLink = document.createElement('link');

// Définition des attributs de l'élément <link>
fontLink.setAttribute('rel', 'stylesheet');
fontLink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Nom+de+la+police');
fontLink.setAttribute('media', 'print');

// Ajout de l'élément <link> à la balise <head>
document.head.appendChild(fontLink);
