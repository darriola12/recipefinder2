const weekRecipes = document.querySelectorAll(".weekRecipe");
const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=3';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1e93c20a63msh717d8efd5575c51p1c8d82jsnfef4e8e21c89',
		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

async function fetchRecipes() {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		console.log(data); // Check the structure of data received

		if (data.recipes && data.recipes.length > 0) {
			data.recipes.forEach((recipe, index) => {
				if (index < weekRecipes.length) {
					weekRecipes[index].innerHTML = `
					    <div class ="main-container-index"><div class = "container-recipe-index">
						<div class ="recipe-info"><h2 class ="recipeTitle">${recipe.title}</h2>
						<p>Ready in ${recipe.readyInMinutes} minutes</p>
						<p>Servings: ${recipe.servings}</p>
						<a href="${recipe.sourceUrl}" target="_blank">View Recipe</a></div>
						<div class = "imgContainer"><img class ="recipeImg" src="${recipe.image}" alt="${recipe.title}"></div>
						</div>
						</div>
					`;	
				}
			});
		} else {
			weekRecipes.forEach(recipeContainer => {
				recipeContainer.innerHTML = "No recipe found";
			});
		}
	} catch (error) {
		console.error('Error fetching recipes:', error);
		weekRecipes.forEach(recipeContainer => {
			recipeContainer.innerHTML = "Failed to fetch recipe";
		});
	}
}

fetchRecipes();