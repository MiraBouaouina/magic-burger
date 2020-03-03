import React from 'react'
import classes from './NavigationItem.module.css'

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a href="/" className={props.active ? classes.active : null} >{props.name} </a>

        </li>
    )

}
export default navigationItem