import React, { Component } from 'react';
import PizzaList from './PizzaList/PizzaList.js';
import { connect } from 'react-redux';

class SelectPage extends Component {
    render() {
        return(
            <div>
                <h1>TOTAL: {this.props.reduxStore.cart.order_total}</h1>
                <PizzaList />
                <button>Next</button>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStoreToProps)(SelectPage);