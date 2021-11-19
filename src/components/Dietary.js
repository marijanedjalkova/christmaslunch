import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faLeaf, faSeedling);

function getGlutenFree(i){
    return <img key={i} src="https://cdn-icons-png.flaticon.com/512/100/100277.png" height="18" width="18"/>;
}

function getGlutenFreeAvailable(i){
return (<div key={i} class="gfAvailable"><img class="onSameLine" src="https://cdn-icons-png.flaticon.com/512/100/100277.png" height="18" width="18"/><div class="onSameLine">available</div></div>);
}

function renderIcon(dietaryOption, i) {
    switch(dietaryOption) {
      case 'vegetarian': return <FontAwesomeIcon key={i} icon={faLeaf} />
      case 'vegan': return <FontAwesomeIcon key={i} icon={faSeedling} />;
      case 'GF': return getGlutenFree(i);
      case 'GFavailable': return getGlutenFreeAvailable(i);
      default:
        return '';
    }
  }

function Dietary(diet){
    console.log(diet)
    return (
        diet.diet.map((option, i)=>{
            return <div class="inline-block">{renderIcon(option, i)}</div>
         })
    )
}

export default Dietary;