'use strict';

function getName() {
    // Recommended size for chaining points
    // Récupérer la valeur de mon champ de texte
    let name = document.querySelector("#name").value; 
    console.log(name);

    /* 
    3 étapes lorsqu'on veut insérer un élément
    1. Récupérer l'élément dans lequel on veut insérer quelquechose
    2. La création de l'élément que tu veux insérer
    3. L'insertion de cet élément créé dans celui qu'on a récupéré en 1.
    */

    // 1. Récupère ma liste de noms (vide) dans lequel je veux insérer qqchose
    let namesList = document.querySelector("#namesList");
    console.log(namesList);
    
    // 2. Créer un élément li que je veux insérer
    let liElemDom = document.createElement("li");
    // Mettre la valeur de mon nom dans le champ de texte de l'élément li
    liElemDom.textContent = name;
    console.log(liElemDom);
    
    // 3. Insérer mon élément li dans namesList
    namesList.append(liElemDom);
    
}

let btn = document.querySelector("#btn");
btn.addEventListener("click",getName);