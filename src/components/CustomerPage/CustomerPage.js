import React, { Component } from 'react';
import { connect } from 'react-redux';

const customerFormObject = {
    name: '',
    address: '',
    city: '',
    zip: '',
    pickOrDeliv: 'pickup',
};//end customerFormObject





class CustomerPage extends Component {
    constructor() {
        super();
        
        this.state = customerFormObject;

        this.handleChange = this.handleOptionChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // getInitialState(){
    //     return (
    //         pickOrDeliv: 'pickup'
    //     );
    // }

    handleOptionChange = (event) => {
        this.setState({
            pickOrDeliv : event.target.value
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }



    render() {

        return (
            <div className="customerContainer">
                <h2>Customer Information</h2>
                <p id="totalCost">Total Cost: {this.props.reduxState.cart.order_total}</p>

                <div className="customerFormContainer">
                    <form onSubmit={this.handleSubmit}>
                        <div className="formSection">
                            <label htmlFor="#nameInput">Name</label>
                            <input onChange={this.handleChange} placeholder="Buzz Lightyear" id="nameInput" name="name" />
                        </div>
                        <div className="formSection">
                            <label htmlFor="#addressInput">Address</label>
                            <input onChange={this.handleChange} placeholder="Andy's Room" id="addressInput" name="address" />
                        </div>
                        <div className="formSection">
                            <label htmlFor="#cityInput">City</label>
                            <input onChange={this.handleChange} placeholder="pixar city" id="cityInput"  name="city" />
                        </div>
                        <div className="formSection">
                            <label htmlFor="#zipInput">Zip Code</label>
                            <input onChange={this.handleChange} placeholder="55555" id="zipInput" name="zip" />
                        </div>
                        <div className="formSection">
                            <label htmlFor="#pickBtn">Pickup</label>
                            <input onChange={this.handleOptionChange} id="pickBtn" type="radio" value="pickup" name="pickOrDeliv" checked={this.state.pickOrDeliv === 'pickup'}/>
                            <label htmlFor="#delvBtn">Delivery</label>    
                            <input onChange={this.handleOptionChange} id="delvBtn" type="radio" value="delivery" name="pickOrDeliv" checked={this.state.pickOrDeliv === 'delivery'}/>
                        </div>
                        <div className="submitSection">
                            <input type="submit" value="submit" />
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