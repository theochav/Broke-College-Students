def generateRecipe(ingredients, mealType):
    if mealType == "breakfast": 
        return (
            "Recipe Idea: " + mealType.title() + "\n"
            "Use these ingredients: " + ingredients + "\n"
            "Step 1: Gather your ingredients.\n"
            "Step 2: Prepare a simple breakfast using them.\n"
            "Step 3: Cook and enjoy"
        )
    elif mealType == "lunch": 
        return 
    elif mealType == "dinner":
        return 
    else:
        return 


ingredients = input("Enter the ingredients you have: ")
mealType = input("Do you want breakfast, lunch, or dinner? ")
mealType = mealType.lower()

recipe = generateRecipe(ingredients, mealType)
print(recipe)