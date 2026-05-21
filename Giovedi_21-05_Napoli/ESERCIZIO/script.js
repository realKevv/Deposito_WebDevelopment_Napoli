const titleElement = document.getElementById('main-title');
const animalsContainer = document.getElementById('animals-container');

// queryselector
const descriptionElement = document.querySelector('.intro');
const btnAddLion = document.querySelector('#btn-add-lion');
const btnAddMonkey = document.querySelector('#btn-add-monkey'); 
const btnRemove = document.querySelector('#btn-remove'); 
const btnTheme = document.querySelector('#btn-theme');

function updateDescription() {
    const currentAnimals = document.querySelectorAll('.animal-card');

    if (currentAnimals.length === 0) {
        descriptionElement.textContent = "Il recinto è vuoto.";
    } else {
        descriptionElement.textContent = `Ci sono ${currentAnimals.length} animali.`;
    }
}

//conteggio direttamente all'avvio
updateDescription();

btnAddLion.addEventListener('click', () => {
    titleElement.textContent = "ZOO - SETTORE LEONI";

    const animalCard = document.createElement('div');
    animalCard.classList.add('animal-card', 'lion-card');

    animalCard.innerHTML = `
        <h3>Leone 🦁</h3>
        <p>Un grande felino che vive nella savana.</p>
    `;

    animalsContainer.appendChild(animalCard);
    updateDescription();
});

btnAddMonkey.addEventListener('click', () => {
    titleElement.textContent = "ZOO - SETTORE SCIMMIE";

    const animalCard = document.createElement('div');
    animalCard.classList.add('animal-card', 'monkey-card');

    animalCard.innerHTML = `
        <h3>Scimmia 🐒</h3>
        <p>Un primate che salta tra gli alberi.</p>
    `;

    animalsContainer.appendChild(animalCard);
    updateDescription();
});

btnRemove.addEventListener('click', () => {
    const lastAnimal = animalsContainer.lastElementChild;

    if (lastAnimal) {
        animalsContainer.removeChild(lastAnimal);
        titleElement.textContent = "Zoo Safari - rimozione";
    } else {
        alert("Non ci sono più animali da rimuovere!");
    }
    updateDescription();
});

// Cambio Tema
let isDarkTheme = false;

btnTheme.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = 'black';
        descriptionElement.style.fontWeight = 'bold';
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        titleElement.style.color = "";
        descriptionElement.style.fontWeight = 'normal';
    }
});