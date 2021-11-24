
import React from 'react'

export const CheckBox = props => {
    return (
      <li>
       <input key={props.id} value={props.value} title={props.menupart} onClick={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} disabled={props.checkDisabled}/> {props.description}
      </li>
    )
}

export default CheckBox