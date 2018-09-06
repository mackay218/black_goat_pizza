import React, { Component } from 'react';
import { connect } from 'react-redux';

class PizzaListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            pizzaAdded: false,
        }
    }

    handleAddPizza = (event) => {
        this.setState({
            pizzaAdded: true,
        })

        let pizzaToAdd = {
            name: this.props.pizza.name,
            description: this.props.pizza.description,
            cost: this.props.pizza.cost
        }

        let total = this.props.reduxState.cart.order_total + this.props.pizza.cost;

        const order = {
            pizzas: [...this.props.reduxState.cart.pizzas, pizzaToAdd],
            order_total: total
        }

        const action = {
            type: 'ADD_PIZZA',
            payload: order,
        }

        this.props.dispatch(action)
    }

    handleRemovePizza = (event) => {
        this.setState({
            pizzaAdded: false,
        })
    }

    render(){
        const pizzaAdded = this.state.pizzaAdded;
        let toDisplay;

        if (pizzaAdded) {
            toDisplay = <button onClick={this.handleRemovePizza}>Remove</button>;
        } else {
            toDisplay = <button onClick={this.handleAddPizza}>Add</button>;
        }
        return(
            <li>
                <div>
                    <img src={this.props.pizza.image_path} />
                    <h2>{this.props.pizza.name}</h2>
                    <h3>{this.props.pizza.cost}</h3>
                    <p>{this.props.pizza.description}</p>
                    <br /> {toDisplay}
                </div>
            </li>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(PizzaListItem);