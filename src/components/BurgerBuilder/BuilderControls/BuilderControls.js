import React from 'react'
import classes from './BuilderControls.module.css'
import BuilderControl from './BuilderControl/BuilderControl'

const builderControls = (props) => {


    let buildControlList = props.ingredientsProps.map(
        (ingredient) => {
            return <BuilderControl label={ingredient.label} count={ingredient.count} change={() => this.props.change({ ingredient.label })} />
        }
    
    return (
        <div className={classes.BuildControls}>
            <p> Total price: {props.total} DT </p>
            <div>
                {buildControlList}
            </div>
            <button className={classes.OrderButton}> Order Now</button>

        </div>
    )
}
export default builderControls