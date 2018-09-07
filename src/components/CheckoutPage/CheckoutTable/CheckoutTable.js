import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../CheckoutItem/CheckoutItem.js'

class CheckoutTable extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.props.reduxState.cart.pizzas.map((nameOfPizza) => {
                            return (
                                <CheckoutItem nameOfPizza={nameOfPizza} />
                            );
                        }
                        )}
                    </tbody>
                </table>
                <h1>{this.props.reduxState.cart.order_total}</h1>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CheckoutTable);