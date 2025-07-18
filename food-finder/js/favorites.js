const apiKey = '2e8b593bb22e425f8dc425078385a535';

//backup
//const apiKey = '554dc7e2e9504377a4eecad18254cc7b';

function addToFavorites(recipe) {
    let favorites = JSON.parse(localStorage.getItem('favorite-recipes')) || [];
    favorites = favorites.filter(item => item.id !== recipe.id);
    favorites.push(recipe);
    localStorage.setItem('favorite-recipes', JSON.stringify(favorites));
}

function removeFromFavorites(recipeId) {
    let favorites = JSON.parse(localStorage.getItem('favorite-recipes')) || [];
    favorites = favorites.filter(item => item.id !== recipeId);
    localStorage.setItem('favorite-recipes', JSON.stringify(favorites));
}

function isFavorite(recipeId) {
    const favorites = JSON.parse(localStorage.getItem('favorite-recipes')) || [];
    return favorites.some(item => item.id === recipeId);
}

function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites-list');
    if (!favoritesContainer) {
        console.error('Favorites container not found');
        return;
    }
    const favorites = JSON.parse(localStorage.getItem('favorite-recipes')) || [];
    favoritesContainer.innerHTML = '';

    favorites.forEach(recipe => {
        const favoriteCard = document.createElement('div');
        favoriteCard.classList.add('favorite-card');

        const favoriteTitle = document.createElement('h4');
        favoriteTitle.textContent = recipe.title;
        favoriteCard.appendChild(favoriteTitle);

        const favoriteImage = document.createElement('img');
        favoriteImage.src = recipe.image;
        favoriteImage.alt = recipe.title;
        favoriteCard.appendChild(favoriteImage);

        favoriteCard.addEventListener('click', () => {
            window.location.href = `../details-page/index.html?id=${recipe.id}`;
        });

        favoritesContainer.appendChild(favoriteCard);
    });
}

export {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    displayFavorites
};
