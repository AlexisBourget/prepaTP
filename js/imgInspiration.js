const changeImageButtons = document.querySelectorAll('.changeImage');

changeImageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imageId = button.getAttribute('data-image-id');
        const imageElement = document.getElementById(`random-image-${imageId}`);
        changeImage(imageElement);
    });
});

function changeImage(imageElement) {
    // Générer un ID aléatoire entre 1 et 350
    const randomImageID = Math.floor(Math.random() * 350) + 1;

    // Mettez à jour l'ID de l'image
    imageElement.src = `https://picsum.photos/id/${randomImageID}/400/400?random=${randomImageID}`;
}
