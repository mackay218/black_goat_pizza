import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



class CheckoutButton extends Component {

    handleCheckout = () => {
        console.log();
        axios({
            method: 'POST',
            url: '/',
            data: this.props.reduxState.cart
        }).then((response) => {
                console.log('Back from POST: ', response.data);
                const action = {type: 'EMPTY_CART'}
                this.props.dispatch(action);
                this.props.history.push('/');
            }).catch((error) => {
                console.log(error);
                alert('Unable to POST to db.')
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CheckoutButton);