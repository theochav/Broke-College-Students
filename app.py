def generateRecipe(ingredients, mealType):
    if mealType == "breakfast": 
        return (
            "Recipe Idea: " + mealType.title() + "\n"
            "Use these ingredients: " + ingredients + "\n"
            "Step 1: Gather your ingredients.\n"
            "Step 2: cook the ingredients based on the recipe.\n"
            "Step 3: Enjoy" 
        ) 
    elif mealType == "lunch": 
        return (
            "Recipe Idea: " + mealType.title() + "\n"
            "Use these ingredients: " + ingredients + "\n"
            "Step 1: gather ingredients. \n"
            "Step 2: Cook the ingredients based on the recipe. \n"
            "Step 3: Enjoy"

        )
    elif mealType == "dinner":
        return  ("Recipe Idea: " + mealType.title() + "\n"
        "Use these ingredients: " + ingredients + "\n" 
        "Step 1: gather ingredients. \n"
        "Step 2: Cook ingredients based on the recipe. \n" 
        "Step 3: Enjoy. \n"
    )
    elif mealType == "snack": 
        return ("Recipe Idea: " + mealType.title() + "\n"
        "Use these ingredients:" + ingredients + "\n"
        "Step 1: gather ingredients. \n"
        "Step 2: Cook ingredients based on the recipe. \n"
        "Step 3: Enjoy. \n"
        ) 
    else:
        return "Please re-enter your statment"


ingredients = input("Enter the ingredients you have: ")
mealType = input("Do you want breakfast, lunch, dinner, or snack? ")
mealType = mealType.lower()

recipe = generateRecipe(ingredients, mealType)
print(recipe)
    