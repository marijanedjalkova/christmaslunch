
import React from 'react'

export const RadioBox = props => {
    return (
      <li>
       <input key={props.id} value={props.value} title={props.menupart} onChange={props.onValueChange} type="radio" checked={props.checked} disabled={props.checkDisabled}/> {props.description}
      </li>
    )
}

export default RadioBox