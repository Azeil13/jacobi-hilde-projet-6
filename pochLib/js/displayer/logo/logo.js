// Sélection de l'élément <div> avec l'id "myBooks"
const myBooksDiv = document.getElementById('myBooks');

// Création de l'élément <img>
const logoImg = document.createElement('img');

// Définition des attributs de l'élément <img>
logoImg.setAttribute('src', 'pochLib/asset/images/logo.png');
logoImg.setAttribute('alt', 'Logo La Plume enchantée');

// Ajout de l'élément <img> au début de la <div>
myBooksDiv.prepend(logoImg);
