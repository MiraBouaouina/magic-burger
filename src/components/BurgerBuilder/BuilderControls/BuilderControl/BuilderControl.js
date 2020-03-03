import React from 'react'
import classes from './BuilderControl.module.css'

const builderControl = (props) => {//pour un seul ingredient 

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}> {props.label} </div>

            <button onClick={props.added} disabled={props.disableAdding} className={classes.More}> More </button>


            <button onClick={props.removed} disabled={props.disableRemoving} className={classes.Less}> Less </button>

        </div>
    )
}
export default builderControl