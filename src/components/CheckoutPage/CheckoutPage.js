import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CheckoutTable from './CheckoutTable/CheckoutTable.js';
import CheckoutHeader from './CheckoutHeader/CheckoutHeader.js';
import CheckoutButton from './CheckoutButton/CheckoutButton.js';

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
                <div>
                    <CheckoutHeader />
                    <CheckoutTable />
                    <CheckoutButton />
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default CheckoutPage;