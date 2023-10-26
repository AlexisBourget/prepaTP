const jokeContainer = document.getElementById('joke-container');
const getJokeButton = document.getElementById('get-joke-button');

getJokeButton.addEventListener('click', fetchChuckNorrisJoke);

function fetchChuckNorrisJoke() {
    // Utilisez l'API Chuck Norris Jokes pour obtenir une blague aléatoire
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            
            // Créez un élément de paragraphe pour la blague
            const jokeText = document.createElement('p');
            jokeText.textContent = data.value;
            
            // Réinitialisez le conteneur de la blague
            jokeContainer.innerHTML = '';
                        
            // Ajoutez la blague sous l'image
            jokeContainer.appendChild(jokeText);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération de la blague.', error);
        });
}

// Chargez une blague au chargement de la page
fetchChuckNorrisJoke();
