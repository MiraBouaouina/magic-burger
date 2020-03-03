import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuilderControls from './BuilderControls/BuilderControls'
class BurgerBuilder extends Component {
    state = {
        ingredients: [
            {
                label: "salad",
                count: 2,
                price: 1
            },
            {
                label: "cheese",
                count: 1,
                price: 2

            },
            {
                label: "escalope",
                count: 0,
                price: 3
            },
            {
                label: "meat",
                count: 0,
                price: 4
            }
        ],
        total: 4 //prix initial
    }
    changeBurgerHandler = (label) => {
        if (label == "salad") {
            const newing = [...this.state.ingredients]
            newing[0].count = newing[0].count + 1
            this.setState(
                { ingredients: newing }
            )

        }

    }



    render() {

        return (
            <div>
                <Burger ingredientsProps={this.state.ingredients} />
                <BuilderControls ingredientsProps={this.state.ingredients} total={this.state.total}
                    change={this.changeBurgerHandler} />


            </div>
        )
    }
}
export default BurgerBuilder