import React from 'react'
import classes from './BuilderControls.module.css'
import BuilderControl from './BuilderControl/BuilderControl'

const builderControls = (props) => {


    let buildControlList = props.ingredientsProps.map(
        (ingredient) => {
            return <BuilderControl label={ingredient.label}
                count={ingredient.count}
                added={() => { props.addOrRemoveIngredient(ingredient.id, "add") }}
                removed={() => { props.addOrRemoveIngredient(ingredient.id, "remove") }}
                disableRemoving={!ingredient.count}
                disableAdding={ingredient.count >= ingredient.maxCount}
                key={ingredient.id} />
        })

    return (
        <div className={classes.BuildControls}>
            <p> Total price: {(props.total).toFixed(2)} DT </p>
            <div>
                {buildControlList}
            </div>
            <button className={classes.OrderButton}> Order Now</button>

        </div>
    )
}
export default builderControls