import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerPage extends Component {

    render() {

        return (
            <div className="customerContainer">
                <h2>Customer Information</h2>
                <p>{this.props.reduxState.cart.order_total}</p>

                <div className="customerFormContainer">
                    <form>
                        <div className="formSection">
                            <label htmlFor="#nameInput">Name</label>
                            <input placeholder="Buzz Lightyear" />
                        </div>
                        <div className="formSection">
                            <label htmlFor="#addressInput">Address</label>
                            <input placeholder="Andy's Room"/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="#cityInput">City</label>
                            <input placeholder="pixar city"/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="#zipInput">Zip Code</label>
                            <input placeholder="55555" />
                        </div>
                        <div className="formSection">
                            <label htmlFor="#pickBtn">Pickup</label>
                            <input id="pickBtn" type="radio" value="pickup" name="pickOrDelv"/>
                            <label htmlFor="#delvBtn">Delivery</label>    
                            <input id="delvBtn" type="radio" value="delivery" name="pickOrDelv"/>
                        
                        </div>
                    </form>
                
                </div>

            </div>
        );

    }


}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(CustomerPage);