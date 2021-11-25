import React from 'react';
import choices  from './consts';
import {getPrice} from './util';

const calculateAllCost = (data) => {
    let courses = Object.keys(choices)
    let total = 0;
    courses.map((courseName) => {
        let currentCourseChoices = data[courseName]
        if (currentCourseChoices !== undefined && currentCourseChoices.length > 0){
            currentCourseChoices.map((currentCourseChoice) => {
                total += getPrice(currentCourseChoice, courseName)
            })
        }
    })
    return total;
}

class CostView extends React.Component {
    render(){
        if (!this.props.data.resultReceived){
          return null;
        }
        if (this.props.data.isError){
          return (<div>{this.props.data.errorMessage}</div>)
        }
        let totalItemCost = calculateAllCost(this.props.data)
        let serviceCharge = Math.round(totalItemCost/10 * 100) / 100
        return (
          <div class="menu">
           <div>Food: {totalItemCost}</div>
           <div>10% service: {serviceCharge}</div>
           <div>Overall: {totalItemCost  + serviceCharge}</div>
          </div>
        )
      }
}

export default CostView;