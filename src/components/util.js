import choices  from './consts';

function getMenuByType(itemtype){
    switch(itemtype) {
        case 'starter': return choices.starters;
        case 'main': return choices.mains;
        case 'dessert': return choices.desserts;
        case 'bread': return choices.breads;
        case 'macaroni': return choices.macaronis;
        case 'loadedFries': return choices.loadedFriess;
        case 'burger': return choices.burgers;
        case 'side': return choices.sides;
        case 'starters': return choices.starters;
        case 'mains': return choices.mains;
        case 'desserts': return choices.desserts;
        case 'breads': return choices.breads;
        case 'macaronis': return choices.macaronis;
        case 'loadedFriess': return choices.loadedFriess;
        case 'burgers': return choices.burgers;
        case 'sides': return choices.sides;
        default:
          return null;
      }
}

 function isGFAvailable(item, itemtype){
    const menu = getMenuByType(itemtype);
    return menu.some(starter => (starter.option === item && starter.diet !== undefined && starter.diet.includes("GFavailable")));
}

 function isVegetarianAvailable(item, itemtype){
    const menu = getMenuByType(itemtype);
    return menu.some(starter => (starter.option === item && starter.diet !== undefined && starter.diet.includes("VEGETARIANavailable")));
}

 function isVeganAvailable(item, itemtype){
    const menu = getMenuByType(itemtype);
    return menu.some(starter => (starter.option === item && starter.diet !== undefined && starter.diet.includes("VEGANavailable")));
}

function getToppings(item, itemtype){
    const menu = getMenuByType(itemtype);
    const fullItem = menu.find(menuItem => (menuItem.option === item))
    let toppingsWithPrices = fullItem.toppings;
    if (toppingsWithPrices === undefined){
        return toppingsWithPrices;
    }
    let result = toppingsWithPrices.map(toppingDict => toppingDict.name)
    return result;
}


function getFullItem(item, itemtype){
    const menu = getMenuByType(itemtype);
    return menu.find(menuItem => (menuItem.option === item))
}

function getToppingLimits(item, itemtype){
    const fullItem = getFullItem(item, itemtype)
    return fullItem.toppingLimit;
}


function getCrumbs(item, itemtype){
    const menu = getMenuByType(itemtype);
    let crumbsWithPrices = menu.find(starter => (starter.option === item)).crumbs;
    if (crumbsWithPrices === undefined){
        return crumbsWithPrices;
    }
    let result = crumbsWithPrices.map(crumbDict => crumbDict.name)
    return result;
}

function getCrumbLimits(item, itemtype){
    const fullItem = getFullItem(item, itemtype)
    return fullItem.crumbLimit;
}

const getToppingsCost = (itemFromMenu, itemToppings) => {
    if (itemToppings === undefined || itemToppings.length === 0 ){
        return 0;
    }
    let toppingsFromMenu = itemFromMenu.toppings;
    if (toppingsFromMenu === undefined || toppingsFromMenu.length === 0 ){
        return 0;
    }
    let toppingPrices = 0;
    toppingPrices = itemToppings.map(toppingName => {
        let toppingFound = toppingsFromMenu.find(toppingFromMenu => (toppingFromMenu.name === toppingName))
        return toppingFound.price;
    })
    return toppingPrices.reduce((a, b) => a + b, 0)
}

const getCrumbCost = (itemFromMenu, itemCrumb) => {
    if (itemCrumb === undefined || itemCrumb === "" ){
        return 0;
    }
    let crumbsFromMenu = itemFromMenu.crumbs;
    if (crumbsFromMenu === undefined || crumbsFromMenu.length === 0 ){
        return 0;
    }
    return crumbsFromMenu.find(crumbFromMenu => (crumbFromMenu.name === itemCrumb)).price
}

function getPrice(item, itemtype){
    const menu = getMenuByType(itemtype);
    let itemFromMenu = menu.find(starter => (starter.option === item.option))
    let mainPrice = itemFromMenu.price;
    let toppingsCost = getToppingsCost(itemFromMenu, item.toppings)
    let crumbCost = getCrumbCost(itemFromMenu, item.crumb)
    return mainPrice + toppingsCost + crumbCost
}

export {isGFAvailable, isVegetarianAvailable, isVeganAvailable, getToppings, getCrumbs, getPrice, getToppingLimits}

