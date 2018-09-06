import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerPage extends Component {

    render() {

        return (
            <div className="customerContainer">
                <h2>Customer Information</h2>




            </div>
        );

    }


}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(CustomerPage);