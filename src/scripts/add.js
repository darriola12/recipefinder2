document.querySelector(".button-add-recipe").addEventListener("click", uploadRecipe); 

async function uploadRecipe(event)
{
    event.preventDefault(); 
    const recipeName = document.querySelector("#recipeName").value; 
    const recipeUrl = document.querySelector("#recipeUrl").value; 
    const recipeIngredients = document.querySelector("#recipeIngredients").value.trim();
    const recipeDescription = document.querySelector("#recipeDescription").value; 
    const recipeDuration = document.querySelector("#recipeDuration").value;
    const ingridientArray = recipeIngredients.split(",").map((ingredient) => ingredient.trim())
    
    const newRecipe = {

        title: recipeName, 
        Image: recipeUrl,
        ingredients: ingridientArray,
        description: recipeDescription,
        duration: recipeDuration
    };

    try{
        let localRecipes = JSON.parse(localStorage.getItem("local-recipes")) || []; 
        localRecipes.push(newRecipe); 
        localStorage.setItem("local-recipes", JSON.stringify(localRecipes));
        alert("Recipe added");
        document.querySelector("#newRecipe-form").reset();

    }
    catch(error){
        console.error("Something went wrong", error);
    }

}