const apiUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients';
const apiKey = '1e93c20a63msh717d8efd5575c51p1c8d82jsnfef4e8e21c89';
// get data from the recipe list added
const datasServer = "../data/rewRececipe.json"  

async function getdata() {
    const recipeContainer = document.querySelector(".weekRecipes");
    const searchBar = document.querySelector(".searchTerm");
    const searchButton = document.querySelector(".searchButton");

    searchButton.addEventListener("click", () => {
        const ingredients = searchBar.value.trim();
        if (ingredients) {
            searchRecipesByIngredient(ingredients);
        } else {
            console.log("Ingrese al menos un ingrediente para buscar recetas.");
        }
    });

    // Función para buscar recetas por ingrediente
    async function searchRecipesByIngredient(ingredients) {
        try {
            // const responseFromServer = await fetch(datasServer.JSON());
            const response = await fetch(`${apiUrl}?ingredients=${ingredients}&number=6&ignorePantry=true&ranking=1`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }

            const recipes = await response.json();
            displayRecipes(recipes);
        } catch (error) {
            console.error('Error searching recipes:', error);
        }
    }

    // Función para mostrar las recetas encontradas en el contenedor
    function displayRecipes(recipes) {
        recipeContainer.innerHTML = ''; // Limpiar contenido anterior

        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                 <div class ="main-container-index"><div class = "container-recipe-index">
				 <div class ="recipe-info"><h2 class ="recipeTitle">${recipe.title}</h2>
                 <p>Missing ingredients: ${recipe.missedIngredients.length}</p>
                 <p>Used ingredients: ${recipe.usedIngredients.length}</p>
				 
				 <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a></div>
				 <div class = "imgContainer"><img class ="recipeImg" src="${recipe.image}" alt="${recipe.title}"></div>
				 </div>
				 </div>`;
            recipeContainer.appendChild(recipeCard);
        });
    }
}

// Llama a la función para obtener y mostrar los datos
getdata();