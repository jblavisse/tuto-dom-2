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


function alertRedirect(event) {
    // Bloque le fonctionnement par défaut d'une balise a en HTML
    // à savoir la redirection -> donc on n'est plus redirigé
    event.preventDefault();

    // event.target -> l'élément enfant sur lequel on clique
    let currentLink = event.target;

    if(currentLink.href !== undefined) {

        alert("Youhou tu vas vers ... " + currentLink.href);
    }

}

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
generateLinkInNav("Contact1", "/contact1");
generateLinkInNav("Contact2", "/contazfezefect2");
generateLinkInNav("Con)f)of)of)", "/conzffzfztact");
generateLinkInNav("Codfikfifjntact", "/contzfezefact");
generateLinkInNav("Cofiuffuintact", "/contefzfzeact");
generateLinkInNav("Coneozeçuçtact", "/confzezeffetact");

// Un seul addEventListener pour l'entièreté de ma navbar
myNav.addEventListener("click", alertRedirect);