import React from 'react'
import classes from './BuilderControl.module.css'

const builderControl = (props) => {//pour un seul ingredient 
    let disabledless = props.count == 0
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}> {props.label} </div>
            <button onClick={props.change} className={classes.More}>More</button>
            <button disabled={disabledless} className={classes.Less}>Less</button>

        </div>
    )
}
export default builderControl