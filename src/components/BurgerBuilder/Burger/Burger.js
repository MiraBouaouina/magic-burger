import React from 'react'
import classes from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient'

const burger = (props) => {
    let ingredientsComponents = []

    for (let ingredient of props.ingredientsProps) {
        for (let i = 0; i < ingredient.count; i++) {
            ingredientsComponents.push(<Ingredient type={ingredient.label} />)
        }
    }
    let msg = null
    if (ingredientsComponents.length === 0) { msg = <p> Please start adding ingredients !! </p> }

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {msg}
            {ingredientsComponents}
            <Ingredient type="bread-bottom" />
        </div>



    )


}
export default burger