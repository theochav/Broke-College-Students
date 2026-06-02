function generateRecipe(ingredients, mealType, people, cuisines, dietaryRestrictions){
    if (ingredients === "") return "Please input your ingredients.";

    // Build extra lines only if the user typed something (both are optional)
    let extraInfo = "";
    if (cuisines !== "") {
        extraInfo += "Favorite cuisines: " + cuisines + "\n";
    }
    if (dietaryRestrictions !== "") {
        extraInfo += "Dietary restrictions: " + dietaryRestrictions + "\n";
    }

    if (mealType === "breakfast"){
        return (  
            "Recipe Idea: " + mealType + "\n" +
            "Recipe for " + people + " people\n" +
            extraInfo +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook the ingredients based on the recipe.\n" +
            "Step 3: Enjoy."
        );
    } else if (mealType === "lunch"){
        return (
            "Recipe Idea: " + mealType + "\n" +
            "Recipe for " + people + " people\n" +
            extraInfo +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook the ingredients based on the recipe.\n" +
            "Step 3: Enjoy."

        );
    } else if (mealType === "dinner"){
        return (
            "Recipe Idea: " + mealType + "\n" +
            "Recipe for " + people + " people\n" +
            extraInfo +
            "Use these ingredients: " + ingredients + "\n" +
            "Step 1: Gather your ingredients.\n" +
            "Step 2: Cook ingredients based on the recipe.\n" +
            "Step 3: Enjoy."
        ) ;
    } else if (mealType === "snack"){
        return ("Recipe Idea: " + mealType + "\n" +
        "Recipe for " + people + " people\n" +
        extraInfo +
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
const cuisineInput = document.getElementById("cuisineInput");
const dietaryInput = document.getElementById("dietaryInput");
const clearButton = document.getElementById("clearButton");

// Stop the user from typing e, minus, or plus in the people box
peopleInput.addEventListener("keydown", function (event) {
    if (event.key === "e" || event.key === "E" || event.key === "-" || event.key === "+") {
        event.preventDefault(); // cancel the key so nothing gets added
    }
});

// Clear bad values or cap at 10 if user types/pastes too high
peopleInput.addEventListener("input", function () {
    if (peopleInput.value !== "" && Number(peopleInput.value) < 1) {
        peopleInput.value = ""; // remove 0 or negative numbers
    }
    if (peopleInput.value !== "" && Number(peopleInput.value) > 10) {
        peopleInput.value = "10"; // set back to 10 if over the max
    }
});

generateButton.addEventListener("click", function () {
    const ingredients = ingredientsInput.value; 
    const mealType = mealTypeSelect.value.toLowerCase();
    const people = Number(peopleInput.value); // turn the text into a number
    if (peopleInput.value === "" || people < 1) { // check for empty, 0, or negative
        recipeOutput.textContent = "Please enter at least 1 person."; // show error message
        return; // stop here so no recipe is made
    }
    if (people > 10) { // check if number is above the max
        recipeOutput.textContent = "Please enter 10 people or fewer."; // show error message
        return; // stop here so no recipe is made
    }
    const cuisines = cuisineInput.value;
    const dietaryRestrictions = dietaryInput.value;
    const recipe = generateRecipe(ingredients, mealType, people, cuisines, dietaryRestrictions);
    recipeOutput.textContent = recipe;
}); 

clearButton.addEventListener("click", function () {
    ingredientsInput.value = "";
    cuisineInput.value = "";
    dietaryInput.value = "";
    peopleInput.value = "";
    recipeOutput.textContent = "";  
})