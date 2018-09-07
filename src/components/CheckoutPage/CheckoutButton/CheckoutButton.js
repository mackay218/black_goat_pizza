import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



class CheckoutButton extends Component {

    handleCheckout = (event) => {
        console.log();
        axios({
            method: 'POST',
            url: '/api/order',
            data: this.props.reduxState.cart
        }).then((response) => {
                console.log('Back from POST: ', response.data);
                const action = {type: 'EMPTY_CART'}
                this.props.dispatch(action);
                alert('Order complete. Enjoy your Black Goat Pizza!');
                this.props.history.push('/select');
            }).catch((error) => {
                console.log(error);
                alert('Unable to POST to db.')
            })
            
    }

    // redirectToHome(){
    //     console.log(this.props.history);
    //     this.props.history.push('/select');
    // }

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