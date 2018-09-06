import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleChange = (event) => {
    }

    render() {
        return (
            <div>
                <h1>Hi!</h1>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default CheckoutPage;