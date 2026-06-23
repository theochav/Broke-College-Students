const recipeOutput = document.getElementById("recipeOutput");

const savedRecipe = localStorage.getItem("generatedRecipe");

if (savedRecipe !== null) {
    recipeOutput.textContent = savedRecipe;
}