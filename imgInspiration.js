const imageElement = document.getElementById('random-image');
const changeImageButton = document.querySelector('.changeImage');
let currentImageID = 1;

changeImageButton.addEventListener('click', changeImage);

function changeImage() {
    // Générer un ID aléatoire entre 1 et 350
    const randomImageID = Math.floor(Math.random() * 350) + 1;

    // Mettez à jour l'ID de l'image
    currentImageID = randomImageID;

    // Modifiez la source de l'image pour forcer le rechargement avec le nouvel ID
    imageElement.src = `https://picsum.photos/id/${currentImageID}/400/400?random=${randomImageID}`;
}
