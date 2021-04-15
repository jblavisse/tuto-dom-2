'use strict';


/*
<nav class="mainnav">
    <a href="/acccueil">Accueil</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
</nav>
Il faut le placer dans le body
*/


/* 
3 étapes lorsqu'on veut insérer un élément
1. Récupérer l'élément dans lequel on veut insérer quelquechose
2. La création de l'élément que tu veux insérer
3. L'insertion de cet élément créé dans celui qu'on a récupéré en 1.
*/

// ------------- Création de la nav
// 1. Récupérer l'élément body
let body = document.body;

// 2. On créé l'élément nav
let myNav = document.createElement("nav");

// Vient ajouter la class mainnav sur mon élément
myNav.classList.add("mainnav");

// 3. On insère la nav au début de mon body
body.prepend(myNav);



function generateLinkInNav(title, url) {
    // ---- Création d'un lien
    // 1. Récupérer l'élément nav -> Fait (myNav)
    // 2. Créer mon élément a
    let myLink = document.createElement("a");
    myLink.textContent = title;
    myLink.href = url;

    // 3. Insérer mon lien dans ma nav
    myNav.append(myLink);

    // Implémenté par défaut dès la fin de la fonction
    // Destruction myLink
}

generateLinkInNav("Accueil", "/accueil");
generateLinkInNav("Services", "/services");
generateLinkInNav("Contact", "/contact");