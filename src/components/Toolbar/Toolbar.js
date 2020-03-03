import React from 'react'
import classes from './Toolbar.module.css'
import logo from '../../assets/images/logo.png'
import NavigationItems from './NavigationItems/NavigationItems'
const toolBar = () => { // arrow function
    return (
        <div className={classes.Toolbar}>
            <div>
                Menu
           </div>
            <div className={classes.Logo}>
                <img src={logo} alt="Magic Burger" />
            </div>
            <div>
                <NavigationItems />
            </div>
        </div>
    )
}
export default toolBar