import React from 'react'
import classes from './Ingredient.module.css'

const ingredient = (props) => {
    let ingredient = null
    switch (props.type) {
        case 'salad':
            ingredient = <div className={classes.Salad}> </div>
            break;
        case 'meat':
            ingredient = <div className={classes.Meat}> </div>
            break;
        case 'escalope':
            ingredient = <div className={classes.Escalope}> </div>
            break;
        case 'cheese':
            ingredient = <div className={classes.Cheese}> </div>
            break;
        case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}> </div>
            break;
        case 'bread-top':
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>

                </div>
            )
            break;
        default:
            break;

    }
    return ingredient
}
export default ingredient