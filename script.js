function generateRecipe(ingredients, mealType, people){
    if (ingredients === "") return "Please input your ingredients.";
    if (mealType === "breakfast"){
        return (  
            "Recipe Idea: " + mealType + "\n" +
            "Recipe for " + people + " people\n" +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook the ingredients based on the recipe.\n" +
            "Step 3: Enjoy."
        );
    } else if (mealType === "lunch"){
        return (
            "Recipe Idea: " + mealType + "\n" +
            "Recipe for " + people + " people\n" +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook the ingredients based on the recipe.\n" +
            "Step 3: Enjoy."

        );
    } else if (mealType === "dinner"){
        return (
            "Recipe Idea: " + mealType + "\n" +
            "Recipe for " + people + " people\n" +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook ingredients based on the recipe.\n" +
            "Step 3: Enjoy."
        ) ;
    } else if (mealType === "snack"){
        return ("Recipe Idea: " + mealType + "\n" +
        "Recipe for " + people + " people\n" +
        "Use these ingredients: " + ingredients + "\n" +
        "Step 1: Gather your ingredients.\n" +
        "Step 2: Cook ingredients based on the recipe.\n" +
        "Step 3: Enjoy."
        );
    } else { 
     return "Please re-enter your statement.";
    }
}

const ingredientsInput = document.getElementById("ingredientsInput");
const mealTypeSelect = document.getElementById("mealTypeSelect");
const generateButton = document.getElementById("generateButton");
const recipeOutput = document.getElementById("recipeOutput");
const peopleInput = document.getElementById("peopleInput");
const clearButton = document.getElementById("clearButton");

generateButton.addEventListener("click", function () {
    const ingredients = ingredientsInput.value; 
    const mealType = mealTypeSelect.value.toLowerCase();
    const people= peopleInput.value;
    const recipe = generateRecipe(ingredients, mealType, people);
    recipeOutput.textContent = recipe;
}); 

clearButton.addEventListener("click", function () {
    ingredientsInput.value = "";
    peopleInput.value = "";
    recipeOutput.textContent = "";  
})