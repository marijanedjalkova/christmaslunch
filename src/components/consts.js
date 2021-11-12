const starterChoices = [
    { option: "soup", diet: ["vegetarian", "GFavailable"], description: "Spiced parsnip and apple soup, crusty bread" },
    { option: "tartlet", diet: [],  description: "Mushroom & caramelised onion tartlet, blue cheese dressing" },
    { option: "salmon", diet: [],  description: "Smoked salmon, lemon and dill dressing, potato salad, wholemeal bread" },
    {option: "pate", diet: ["GFavailable"],  description: "Chicken liver pate, plum and raisin chutney, oatcakes"}
  ];

const mainChoices = [
    { option: "turkey", diet: [],   description: "Roast turkey paupiette, roast potatoes, roast carrots and parsnips, Brussels sprouts, pigs in blankets, gravy" },
    { option: "beef", diet: ["GFavailable"],  description: "Slow roasted feather blade of beef, sage and onion stuffing ball, roast potatoes, roast carrots and parsnips, Brussels sprouts, pigs in blankets, red wine jus" },
    { option: "seabass", diet: ["GF"],  description: "Grilled Sea bass, caper butter, tender stem broccoli, potato cake" },
    {option: "squash", diet: ["vegan"],  description: "Roast butternut squash, caramelised onion & vegan feta tart, tenderstem brocolli, sweet potato fries"}
  ];

  const dessertChoices = [
    { option: "caramel-tart", diet: [], description: "Salted caramel and hazelnut tart, Chantilly cream, butterscotch sauce" },
    { option: "pavlova", diet: ["GF"],  description: "Mulled berry pavlova" },
    { option: "cheese", diet: ["GFavailable"],  description: "Blue cheese, Scottish cheddar and brie served with oatcakes and chutney" },
    {option: "chocolate-tart", diet: ["vegan"],  description: "Chocolate truffle tart, berry compote"}
  ];

  const choices = {starters: starterChoices, mains: mainChoices, desserts: dessertChoices}

  export default choices;
