const starterChoices = [
  {option: "soup", diet:["vegetarian", "GFavailable"], price: 4.75, description: "Soup of the day, crusty bread"},
  {option: "haggis-pakora", diet:[], price: 5.75, description: "Haggis pakora, pakora sauce"},
  {option: "bruschetta", diet:["vegetarian"],  price: 5.75, description: "Mozzarella bruschetta, balsamic, pesto"},
  {option: "sweet-potato-pakora", diet:["vegan", "GF"], price: 5.75, description: "Sweet potato pakora, sweet chilli sauce"},
  {option: "squid", diet:[],  price: 6.75, description: "Salt & chilli squid, sweet chilli sauce"},
  {option: "popcorn-chicken", diet:[], price: 5.75, description: "Popcorn chicken, BBQ sauce"},
  {option: "cullen-skink", diet:["GFavailable"], price: 5.75, description: "Cullen Skink, crusty bread"},
  {option: "sharer", diet:[], price: 15, description: "Sloans Sharer (Mixed pakora, popcorn chicken, garlic bread, skinny fries, BBQ sauce, sweet chilli sauce)"}
      ];

const mainChoices = [
  {option: "fish-and-chips", diet:[], price: 11, description: "Beer battered fish, chunky chips, garden peas, tartar sauce"}, 
  {option: "scampi", diet:[], price: 13.50, description: "Monkfish scampi, chunky chips, garden peas, tartar sauce"},
  {option: "chicken-katsu", diet:[], price: 13, description: "Chicken Katsu curry, coconut rice"},
  {option: "steak-pie", diet:[], price: 11.50, description: "Steak & Guinness pie, chunky chips, garden peas"},
  {option: "haggis-neeps-tatties", price: 10.50, diet:["VEGETARIANavailable"], description: "Haggis, neeps & tatties, peppercorn sauce"},
  {option: "sausage", diet:[], price: 10.50, description: "Cumberland sausage, mashed potato, onion gravy"},
  {option: "linguini", diet:["vegan"], price: 10.50, description: "Tenderstem broccoli & pesto linguini with vegan feta"},
  {option: "caesar", diet:[], price: 9.50, description: "Caesar salad – parmesan, croutons & anchovies"},
  {option: "caesar-bacon", diet:[], price: 12, description: "Caesar salad – parmesan, croutons & anchovies, WITH CHICKEN AND BACON"},
  {option: "veg-chilli-rice", diet:["vegetarian", "VEGANavailable"], price: 10.50, description: "Sweet potato, halloumi & black bean chilli with sour cream & jalapenos, WITH RICE AND FLATBREAD"},
  {option: "veg-chilli-nachos", diet:["vegetarian", "VEGANavailable"], price: 10.50, description: "Sweet potato, halloumi & black bean chilli with sour cream & jalapenos, WITH NACHOS"},
  {option: "meat-chilli-rice", diet:[], price: 12.50, description: "Beef chilli with sour cream, cheddar cheese, guacamole & jalapenos, WITH RICE AND FLATBREAD"},
  {option: "meat-chilli-nachos", diet:[], price: 12.50, description: "Beef chilli with sour cream, cheddar cheese, guacamole & jalapenos, WITH NACHOS"}
];

const macaroniChoices = [ 
  {option: "macaroni", diet:[], price: 9.50, toppingLimit: 2, toppings: [{name: "smoked haddock", price: 0.75}, {name: "jalapenos", price: 0.75}, {name: "gruyere", price: 0.75}, {name: "brie", price: 0.75}, {name: "bacon", price: 0.75}, {name: "sun blush tomatoes", price: 0.75}, {name: "beef chilli", price: 0.75}, {name: "katsu curry", price: 0.75}], crumbs: [{name: "bacon & gruyere", price: 1}, {name: "parmesan & basil", price: 1}, {name: "chorizo & manchego", price : 1}, {name: "no special crumb", price: 0}], description: "Macaroni cheese, skinny fries. Choose 2 toppings for £1.50 and/or a crumb for £1"}];

const burgerChoices = [
  {option: "classic-burger", diet:[], price: 10.50, toppings: [{name: "jalapenos", price: 1}, {name: "cheese", price: 1}, {name: "bacon", price: 1.50}, {name: "macaroni", price: 1.50}, {name: "pepperorn sauce", price: 1.50}], description: "The Classic Burger"},
  {option: "highlander-burger", diet:[], price: 11, toppings: [{name: "jalapenos", price: 1}, {name: "cheese", price: 1}, {name: "bacon", price: 1.50}, {name: "macaroni", price: 1.50}, {name: "pepperorn sauce", price: 1.50}], description: "The Highlander Burger"},
  {option: "mexican-burger", diet:["GFavailable"], price: 11, toppings: [{name: "jalapenos", price: 1}, {name: "cheese", price: 1}, {name: "bacon", price: 1.50}, {name: "macaroni", price: 1.50}, {name: "pepperorn sauce", price: 1.50}], description: "The Mexican Burger"},
  {option: "vegan-burger", diet:["vegan"], price: 12, toppings: [{name: "jalapenos", price: 1}, {name: "cheese", price: 1}, {name: "bacon", price: 1.50}, {name: "macaroni", price: 1.50}, {name: "pepperorn sauce", price: 1.50}], description: "The Vegan Burger"}
];

const breadChoices = [
  {option: "steak-bread", diet: ["GFavailable"], price: 9.50, description: "Minute steak, caramelised onion, garlic mayo, foccacia + skinny fries"},
  {option: "chicken-pesto", diet: ["GFavailable"], price: 9.50, description: "Chicken, mozzarella, pesto, ciabatta + skinny fries"},
  {option: "caprese-foccacia", diet: ["vegetarian", "GFavailable"], price: 8.50, description: "Caprese foccacia + skinny fries"}
];

const loadedFriesChoices = [
  {option: "skinny-loaded-fries", diet:[], price: 3.50, toppings: [{name: "salt & chilli (vegetarian, GF)", price: 1}, {name:"katsu curry sauce (GF)", price: 1}, {name: "cheese & gravy", price: 2}, {name: "beef chilli & jalapenos", price: 2.50}, {name: "macaroni cheese (vegetarian)", price: 2.50}], description: "Skinny Loaded Fries"},
  {option: "chunky-loaded-fries", diet:[], price: 3.50, toppings: [{name: "salt & chilli (vegetarian, GF)", price: 1}, {name:"katsu curry sauce (GF)", price: 1}, {name: "cheese & gravy", price: 2}, {name: "beef chilli & jalapenos", price: 2.50}, {name: "macaroni cheese (vegetarian)", price: 2.50}], description: "Chunky Chips Loaded Fries"}
];

const sidesChoices = [
  {option: "garlic-bread", diet: [], price: 3.50, description: "Garlic Bread"},
  {option: "garlic-bread-cheese", diet: [], price: 4.50, description: "Garlic Bread with cheese"},
  {option: "onion-rings", diet: [], price: 3.50, description: "Onion rings, sweet chilli sauce"},
  {option: "mini-macaroni", diet: [], price: 3.50, description: "Mini macaroni"},
  {option: "garden-salad", diet: [], price: 3.50, description: "Garden Salad"}
];

const dessertChoices = [
  { option: "pretzel", diet: [], price: 5.50, description: "Warm pretzel, dipping chocolate & sprinkles" },
  { option: "brownie", diet: [], price: 5.50, description: "Chocolate brownie, vanilla ice cream, chocolate sauce" },
  { option: "eton-mess-cheesecake", diet: [], price: 5.50, description: "Eton mess cheesecake" },
  { option: "sticky-toffee-pudding", diet: [], price: 5.50, description: "Sticky toffee pudding, vanilla ice cream" },
  { option: "sorbet", diet : [], price: 5.50, description: "Sorbet & Mixed berries"}
];

const choices = {starters: starterChoices, mains: mainChoices, desserts: dessertChoices, macaronis: macaroniChoices, burgers: burgerChoices, breads: breadChoices, loadedFriess: loadedFriesChoices, sides: sidesChoices}

export default choices;
