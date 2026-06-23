const recipeOutput = document.getElementById("recipeOutput");

const savedRecipe = localStorage.getItem("generatedRecipe");

const clearBtn = document.getElementById('clearRecipeButton'); 

clearBtn.addEventListener('click', function(event) {
  localStorage.removeItem('generatedRecipe');   
  recipeOutput.textContent = "No recipe has been genereated yet."
  window.location.href = 'index.html'; 
  });  

if (savedRecipe !== null) {
    recipeOutput.textContent = savedRecipe;
}