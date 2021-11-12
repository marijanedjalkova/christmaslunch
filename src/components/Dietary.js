import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faLeaf, faSeedling);

function getGlutenFree(){
    return <img src="https://cdn-icons-png.flaticon.com/512/100/100277.png" height="18" width="18"/>;
}

function renderIcon(dietaryOption) {
    switch(dietaryOption) {
      case 'vegetarian': return <FontAwesomeIcon icon={faLeaf} />
      case 'vegan': return <FontAwesomeIcon icon={faSeedling} />;
      case 'GF': return getGlutenFree();
      case 'GFavailable': return (<div>{getGlutenFree()}<div>available</div></div>)
      default:
        return '';
    }
  }

function Dietary(diet){
    return (
        <div>
        {diet.diet.map((option, i)=>{
            return renderIcon(option)
         })}
         </div>
    )
}

export default Dietary;