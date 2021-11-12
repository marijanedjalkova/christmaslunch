import choices  from './consts';

function getMenuByType(itemtype){
    switch(itemtype) {
        case 'starter': return choices.starters;
        case 'main': return choices.mains;
        case 'dessert': return choices.desserts;
        default:
          return choices.starters;
      }
}

function isGFAvailable(item, itemtype){
    const menu = getMenuByType(itemtype);
    return menu.some(starter => (starter.option === item && starter.diet.includes("GFavailable")));
}

export default isGFAvailable;

