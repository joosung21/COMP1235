let liked = [];

// Recipe List
const recipes = [
  {
    name: "Bibimbap",
    image: "assets/img/img2.jpg",
    description: "Mixed Rice with Vegetables and Meat",
    nutrition: "Calories: 550, Protein: 20g, Carbs: 70g, Fat: 15g",
    allergens: "Contains eggs, soy, and sesame",
    recipe:
      "Cook rice, sauté vegetables, cook beef, and serve with egg and gochujang sauce.",
  },
  {
    name: "Kimchi",
    image: "assets/img/img1.jpg",
    description: "Fermented Spicy Cabbage",
    nutrition: "Calories: 15 per serving, Probiotics-rich",
    allergens: "Contains fish sauce",
    recipe:
      "Salt napa cabbage, mix with spicy paste, and ferment for several days.",
  },
  {
    name: "Tteokbokki",
    image: "assets/img/img3.jpg",
    description: "Spicy Rice Cakes in Gochujang Sauce",
    nutrition: "Calories: 400, Carbs: 80g, Protein: 5g, Fat: 5g",
    allergens: "Contains soy and gluten",
    recipe:
      "Boil rice cakes in spicy gochujang sauce with fish cakes and green onions.",
  },
  {
    name: "Bulgogi",
    image: "assets/img/img4.jpg",
    description: "Marinated Grilled Beef",
    nutrition: "Calories: 500, Protein: 30g, Carbs: 10g, Fat: 35g",
    allergens: "Contains soy and sesame",
    recipe:
      "Marinate sliced beef with soy sauce, sugar, garlic, and sesame oil, then grill.",
  },
  {
    name: "Jajangmyeon",
    image: "assets/img/img5.jpg",
    description: "Black Bean Sauce Noodles",
    nutrition: "Calories: 600, Carbs: 90g, Protein: 15g, Fat: 20g",
    allergens: "Contains soy and gluten",
    recipe:
      "Stir-fry black bean paste with pork and onions, then mix with noodles.",
  },
  {
    name: "Samgyeopsal",
    image: "assets/img/img6.webp",
    description: "Grilled Pork Belly Served with Sides",
    nutrition: "Calories: 700, Protein: 40g, Fat: 60g",
    allergens: "No major allergens",
    recipe:
      "Grill thick slices of pork belly and serve with dipping sauces and lettuce wraps.",
  },
  {
    name: "Sundubu Jjigae",
    image: "assets/img/img7.jpg",
    description: "Spicy Soft Tofu Stew with Seafood and Vegetables",
    nutrition: "Calories: 350, Protein: 25g, Carbs: 20g, Fat: 15g",
    allergens: "Contains shellfish and soy",
    recipe: "Simmer soft tofu, seafood, vegetables, and egg in a spicy broth.",
  },
  {
    name: "Mandu",
    image: "assets/img/img8.jpg",
    description: "Korean Dumplings Filled with Meat and Vegetables",
    nutrition: "Calories: 250, Protein: 10g, Carbs: 30g, Fat: 8g",
    allergens: "Contains wheat and soy",
    recipe:
      "Mix ground meat, vegetables, and seasonings, wrap in dumpling skins, and steam or fry.",
  },
];

//  handles displaying/hiding recipes
function handleRecipeDisplay(element, dishName, callback) {
  const recipe = recipes.find((r) => r.name === dishName);
  if (recipe) {
    callback(element, recipe);
  }
}

// Show Recipe
function showRecipe(element, recipe) {
  element.querySelector(".content").innerHTML = `
    <div class="info">
      <strong>${recipe.name}</strong><br>
      ${recipe.description}<br>
      <em>${recipe.recipe}</em><br>
      <button onClick="addLike('${recipe.name}')" class="like-btn">Like</button>
    </div>`;
}

// Hide Recipe
function hideRecipe(element) {
  element.querySelector(".content").innerHTML = "";
}

// update liked recipes
function updateLikedRecipes() {
  let likedDiv = document.querySelector(".likedDiv");
  if (likedDiv) {
    likedDiv.innerHTML = `<h3>Liked Recipes</h3>`;
    liked.forEach((cuisine) => {
      likedDiv.innerHTML += `
      <div class="likedItem" onClick="removeLike('${cuisine.name}')">
        <strong>${cuisine.name}</strong>
        <strong>x</strong>
      </div>`;
    });
  }
}

// add like
function addLike(dishName) {
  const recipe = recipes.find((r) => r.name === dishName);

  if (liked.some((r) => r.name === dishName)) {
    alert("Recipe already liked!");
    return;
  }

  if (recipe) {
    liked = [...liked, recipe];
    updateLikedRecipes();
  }
}

// remove like
function removeLike(dishName) {
  liked = liked.filter((r) => r.name !== dishName);
  updateLikedRecipes();
}

// Initialize grid items
function init() {
  const gridContainer = document.querySelector(".grid-container");
  recipes.forEach((recipe) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.onmouseenter = () =>
      handleRecipeDisplay(gridItem, recipe.name, showRecipe);
    gridItem.onmouseleave = () =>
      handleRecipeDisplay(gridItem, recipe.name, hideRecipe);
    gridItem.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <strong>${recipe.name}</strong>
      <div class="content"></div>`;
    gridContainer.appendChild(gridItem);
  });
}

init();
