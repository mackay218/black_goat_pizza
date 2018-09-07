import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutHeader extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>{this.props.reduxState.cart.customer.name}</p>
                    <p>{this.props.reduxState.cart.customer.street_address}</p>
                    <p>{this.props.reduxState.cart.customer.city}</p>
                    <p>{this.props.reduxState.cart.customer.zip}</p>
                </div>
                <div>
                    <p>{this.props.reduxState.cart.type}</p>
                </div>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CheckoutHeader);