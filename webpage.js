const recipeOutput = document.getElementById("recipeOutput");

const savedRecipe = localStorage.getItem("generatedRecipe");

const clearBtn = document.getElementById('clear-recipe-btn'); 
const button = document.querySelector('.my-button');
button.addEventListener('click', function(event) {
    console.log('Button was clicked!');
  });  
  const clearButton = document.querySelector('.clear-btn');

clearButton.addEventListener('click', () => {
  // 1. Clear the recipe from localStorage (from our previous step)
  localStorage.removeItem('savedRecipe'); 
  
  // 2. Redirect to your other HTML file
  window.location.href = 'index.html'; 
});

if (savedRecipe !== null) {
    recipeOutput.textContent = savedRecipe;
}