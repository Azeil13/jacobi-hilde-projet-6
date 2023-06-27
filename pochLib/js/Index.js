



// Sélection de l'élément <div> avec l'id "myBooks"
const myBooks = document.getElementById('myBooks');

// Création de l'élément <img>
const logoImg = document.createElement('img');

// Définition des attributs de l'élément <img>
logoImg.setAttribute('src', 'asset/images/logo.png');
logoImg.setAttribute('alt', 'Logo La Plume enchantée');

// Ajout de l'élément <img> au début de la <div>
myBooks.prepend(logoImg);

console.log(logoImg)