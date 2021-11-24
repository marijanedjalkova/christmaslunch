const starterChoices = [
  {option: "soup", diet:["vegetarian", "GFavailable"], description: "Soup of the day, crusty bread"},
  {option: "haggis-pakora", diet:[], description: "Haggis pakora, pakora sauce"},
  {option: "bruschetta", diet:["vegetarian"], description: "Mozzarella bruschetta, balsamic, pesto"},
  {option: "sweet-potato-pakora", diet:["vegan", "GF"], description: "Sweet potato pakora, sweet chilli sauce"},
  {option: "squid", diet:[], description: "Salt & chilli squid, sweet chilli sauce"},
  {option: "popcorn-chicken", diet:[], description: "Popcorn chicken, BBQ sauce"},
  {option: "cullen-skink", diet:["GFavailable"], description: "Cullen Skink, crusty bread"},
  {option: "sharer", diet:[], description: "Sloans Sharer (Pigs in blankets, roast potatoes, sweet potato pakora, stuffing balls, garlic bread and brie, gravy and cranberry sauce)"}
      ];

const mainChoices = [
  {option: "christmas-dinner", diet:[], description: "Sloans Christmas Dinner with all the trimmings"}, 
  {option: "fish-and-chips", diet:[], description: "Beer battered fish, chunky chips, garden peas, tartar sauce"}, 
  {option: "scampi", diet:[], description: "Monkfish scampi, chunky chips, garden peas, tartar sauce"},
  {option: "chicken-katsu", diet:[], description: "Chicken Katsu curry, coconut rice"},
  {option: "steak-pie", diet:[], description: "Steak & Guinness pie, chunky chips, garden peas"},
  {option: "haggis-neeps-tatties", diet:["VEGETARIANavailable"], description: "Haggis, neeps & tatties, peppercorn sauce"},
  {option: "sausage", diet:[], description: "Cumberland sausage, mashed potato, onion gravy"},
  {option: "linguini", diet:["vegan"], description: "Tenderstem broccoli & pesto linguini with vegan feta"},
  {option: "caesar", diet:[], description: "Caesar salad – parmesan, croutons & anchovies"},
  {option: "caesar-bacon", diet:[], description: "Caesar salad – parmesan, croutons & anchovies, WITH CHICKEN AND BACON"},
  {option: "veg-chilli-rice", diet:["vegetarian", "VEGANavailable"], description: "Sweet potato, halloumi & black bean chilli with sour cream & jalapenos, WITH RICE AND FLATBREAD"},
  {option: "veg-chilli-nachos", diet:["vegetarian", "VEGANavailable"], description: "Sweet potato, halloumi & black bean chilli with sour cream & jalapenos, WITH NACHOS"},
  {option: "meat-chilli-rice", diet:[], description: "Beef chilli with sour cream, cheddar cheese, guacamole & jalapenos, WITH RICE AND FLATBREAD"},
  {option: "meat-chilli-nachos", diet:[], description: "Beef chilli with sour cream, cheddar cheese, guacamole & jalapenos, WITH NACHOS"}
];

const macaroniChoices = [ 
  {option: "macaroni", diet:[], toppings: ["bacon", "jalapenos", "brie and cranberry", "pigs in blanket", "turkey and stuffing"], crumbs: ["sage and opion (vegan)", "parmesan & basil", "chorizo & manchego"], description: "Macaroni cheese, skinny fries"},
  {option: "vegan-macaroni", diet:["vegan"], description: "Vegan macaroni with parmesan and basil crumb"}
];

const burgerChoices = [
  {option: "classic-burger", diet:[], toppings: ["jalapenos", "cheese", "bacon", "macaroni", "pepperorn sauce"], description: "The Classic Burger"},
  {option: "highlander-burger", diet:[], toppings: ["jalapenos", "cheese", "bacon", "macaroni", "pepperorn sauce"], description: "The Highlander Burger"},
  {option: "mexican-burger", diet:["GFavailable"], toppings: ["jalapenos", "cheese", "bacon", "macaroni", "pepperorn sauce"], description: "The Mexican Burger"},
  {option: "vegan-burger", diet:["vegan"], toppings: ["jalapenos", "cheese", "bacon", "macaroni", "pepperorn sauce"], description: "The Vegan Burger"}
];

const breadChoices = [
  {option: "steak-break", diet: ["GFavailable"], description: "Minute steak, caramelised onion, garlic mayo, foccacia"},
  {option: "chicken-pesto", diet: ["GFavailable"], description: "Chicken, mozzarella, pesto, ciabatta"},
  {option: "caprese-foccacia", diet: ["vegetarian", "GFavailable"], description: "Caprese foccacia"},
  {option: "christmas-bread", diet: ["GFavailable"], description: "Christmas Piece and Chips"}
];

const loadedFriesChoices = [
  {option: "skinny-loaded-fries", diet:[], toppings: ["salt & chilli (vegetarian, GF)", "katsu curry sauce (GF)", "cheese & gravy", "beef chilli & jalapenos", "macaroni cheese (vegetarian)"], description: "Skinny Loaded Fries"},
  {option: "chunky-loaded-fries", diet:[], toppings: ["salt & chilli (vegetarian, GF)", "katsu curry sauce (GF)", "cheese & gravy", "beef chilli & jalapenos", "macaroni cheese (vegetarian)"], description: "Chunky Chips Loaded Fries"}
];

const sidesChoices = [
  {option: "garlic-bread", diet: [], description: "Garlic Bread"},
  {option: "garlic-bread-cheese", diet: [], description: "Garlic Bread with cheese"},
  {option: "onion-rings", diet: [], description: "Onion rings, sweet chilli sauce"},
  {option: "mini-macaroni", diet: [], description: "Mini macaroni"},
  {option: "garden-salad", diet: [], description: "Garden Salad"},
  {option: "pigs-in-blankets", diet: [], description: "Pigs in blankets"}
];

const dessertChoices = [
  { option: "pretzel", diet: [], description: "Warm pretzel, dipping chocolate & sprinkles" },
  { option: "brownie", diet: [], description: "Chocolate brownie, vanilla ice cream, chocolate sauce" },
  { option: "eton-mess-cheesecake", diet: [], description: "Eton mess cheesecake" },
  { option: "sticky-toffee-pudding", diet: [], description: "Sticky toffee pudding, vanilla ice cream" },
  { option: "sorbet", diet : [], description: "Sorbet & Mixed berries"}
];

const choices = {starters: starterChoices, mains: mainChoices, desserts: dessertChoices, macaronis: macaroniChoices, burgers: burgerChoices, breads: breadChoices, loadedFriess: loadedFriesChoices, sides: sidesChoices}

export default choices;
