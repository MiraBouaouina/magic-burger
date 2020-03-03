import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuilderControls from './BuilderControls/BuilderControls'
import axios from 'axios'
class BurgerBuilder extends Component {
    state = {
        ingredients: [
            {
                id: 0,
                label: "salad",
                count: 0,
                price: 1,
                maxCount: 2
            },
            {
                id: 1,
                label: "cheese",
                count: 0,
                price: 2,
                maxCount: 2

            },
            {
                id: 2,
                label: "escalope",
                count: 0,
                price: 3,
                maxCount: 2
            },
            {
                id: 3,
                label: "meat",
                count: 0,
                price: 4,
                maxCount: 2
            }
        ],
        total: 4 //prix initial
    }
    addOrRemoveIngredient = (id, action) => {
        const newIngredients = [...this.state.ingredients]
        let newTotalPrice = this.state.total
        const i = newIngredients.findIndex(ingredient => {
            return ingredient.id === id
        })
        if (action === "add") {
            newIngredients[i].count++
            newTotalPrice += newIngredients[i].price
        }
        else if (action === "remove") {
            newIngredients[i].count--
            newTotalPrice -= newIngredients[i].price
        }
        this.setState(
            {
                ingredients: newIngredients,
                total: newTotalPrice
            }
        )
    }



    render() {

        return (
            <div>
                <Burger ingredientsProps={this.state.ingredients} />
                <BuilderControls
                    ingredientsProps={this.state.ingredients}
                    total={this.state.total}
                    addOrRemoveIngredient={this.addOrRemoveIngredient} />


            </div>
        )
    }
}
export default BurgerBuilder