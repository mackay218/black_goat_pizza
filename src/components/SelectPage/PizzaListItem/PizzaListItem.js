import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../SelectPage.css';

class PizzaListItem extends Component {
    constructor(props) {
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
            _id: this.props.pizza._id,
            name: this.props.pizza.name,
            description: this.props.pizza.description,
            cost: this.props.pizza.cost
        }

        let total = Math.floor((this.props.reduxState.cart.order_total + this.props.pizza.cost) * 100) / 100;

        const order = {
            pizzas: [...this.props.reduxState.cart.pizzas, pizzaToAdd],
            order_total: total
        }

        const action = {
            type: 'UPDATE_PIZZA',
            payload: order,
        }

        this.props.dispatch(action)
    }

    handleRemovePizza = (event) => {
        this.setState({
            pizzaAdded: false,
        })

        let pizzaToRemoveId = this.props.pizza._id;

        console.log(pizzaToRemoveId);
        console.log(this.props.reduxState.cart.pizzas);

        let total = Math.floor((this.props.reduxState.cart.order_total - this.props.pizza.cost) * 100) / 100;

        const matchPizza = pizza => pizza._id !== pizzaToRemoveId;
        let newPizzaList = this.props.reduxState.cart.pizzas.filter(matchPizza);

        console.log(newPizzaList);

        const order = {
            pizzas: newPizzaList,
            order_total: total
        }

        const action = {
            type: 'UPDATE_PIZZA',
            payload: order,
        }

        this.props.dispatch(action)
    }

    render() {
        const pizzaAdded = this.state.pizzaAdded;
        let toDisplay;

        if (pizzaAdded) {
            toDisplay = <button className="addBtn" onClick={this.handleRemovePizza}>Remove</button>;
        } else {
            toDisplay = <button className="addBtn" onClick={this.handleAddPizza}>Add</button>;
        }
        return (
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