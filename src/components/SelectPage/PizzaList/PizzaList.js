import React, { Component } from 'react';
import Axios from 'axios';
import PizzaListItem from '../PizzaListItem/PizzaListItem.js'

class PizzaList extends Component {
    constructor(props){
        super(props);
        this.state = {
            pizzas: [],
        }
    }

    componentDidMount(){
        this.getPizzas();
    }

    getPizzas(){
        console.log('in getPizzas');

        Axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            this.setState({
                pizzas: response.data
            });
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an error getting the pizzas');
        })

        console.log(this.state.pizzas);
    }

    render() {
        return(
            <ul>
                {this.state.pizzas.map((pizza, i) => {
                    return(
                        <PizzaListItem key={pizza._id} pizza={pizza} />
                    );
                })}
            </ul>
        );
    }
}

export default PizzaList;