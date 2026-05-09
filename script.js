function generateRecipe(ingredients, mealType){
    if (mealType === "breakfast"){
        return (  
            "Recipe Idea: " + mealType + "\n" +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook the ingredients based on the recipe.\n" +
            "Step 3: Enjoy."
        );
    } else if (mealType === "lunch"){
        return (
            "Recipe Idea: " + mealType + "\n" +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook the ingredients based on the recipe.\n" +
            "Step 3: Enjoy."

        );
    } else if (mealType === "dinner"){
        return (
            "Recipe Idea: " + mealType + "\n" +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook ingredients based on the recipe.\n" +
            "Step 3: Enjoy."
        ) ;
    } else if (mealType === "snack"){
        return ("Recipe Idea: " + mealType + "\n" +
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

generateButton.addEventListener("click", function () {
    const ingredients = ingredientsInput.value; 
    const mealType = mealTypeSelect.value.toLowerCase();
    const recipe = generateRecipe(ingredients, mealType);
    recipeOutput.textContent = recipe;
}); 