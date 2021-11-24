import choices  from './consts';

function getMenuByType(itemtype){
    switch(itemtype) {
        case 'starter': return choices.starters;
        case 'main': return choices.mains;
        case 'dessert': return choices.desserts;
        case 'bread': return choices.breads;
        case 'macaroni': return choices.macaroni;
        case 'loadedFries': return choices.loadedFries;
        case 'burger': return choices.burgers;
        case 'side': return choices.sides;
        default:
          return choices.starters;
      }
}

 function isGFAvailable(item, itemtype){
    const menu = getMenuByType(itemtype);
    return menu.some(starter => (starter.option === item && starter.diet.includes("GFavailable")));
}

 function isVegetarianAvailable(item, itemtype){
    const menu = getMenuByType(itemtype);
    return menu.some(starter => (starter.option === item && starter.diet.includes("VEGETARIANavailable")));
}

 function isVeganAvailable(item, itemtype){
    const menu = getMenuByType(itemtype);
    return menu.some(starter => (starter.option === item && starter.diet.includes("VEGANavailable")));
}

export {isGFAvailable, isVegetarianAvailable, isVeganAvailable}

