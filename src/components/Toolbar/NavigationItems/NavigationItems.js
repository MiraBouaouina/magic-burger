import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => {
    return ( //unordered list 
        <ul className={classes.NavigationItems}>
            <NavigationItem name="Burger Builder" active />
            <NavigationItem name="Check out" />
        </ul>
    )

}
export default navigationItems