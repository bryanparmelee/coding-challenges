//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  let maxAmounts = [];
  let rIngredients = Object.keys(recipe);
  rIngredients.map((ingredient) => {
    if (!available[ingredient]) {
      maxAmounts.push(0);
    } else {
      maxAmounts.push(parseInt(available[ingredient] / recipe[ingredient]));
    }
  });
  return Math.min(...maxAmounts);
}

function cakes2(recipe, available) {
  return Object.keys(recipe).reduce(function (val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      val
    );
  }, Infinity);
}
