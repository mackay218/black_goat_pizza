import React, { Component } from 'react';
import { connect } from 'react-redux';

const customerFormObject = {
    customer: {
        name: '',
        street_address: '',
        city: '',
        zip: '',
    },
    pickOrDeliv: 'pickup',
};//end customerFormObject





class CustomerPage extends Component {
    constructor() {
        super();
        
        this.state = customerFormObject;

        
    }

    handleOptionChange = (event) => {
        console.log('in handleOptionChange');
        this.setState({
            ...this.state,
            pickOrDeliv : event.target.value
        });

        console.log(this.state);
    }

     handleChange = (event) =>{

         console.log(event.target.value);

         this.setState({
             customer:{
                 ...this.state.customer, 
                 [event.target.name]: event.target.value,
             }
         });
         
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();

        const action = { type: 'ADD_CUSTOMER', payload: this.state}
        this.props.dispatch(action);
        
        this.props.history.push('checkout');

        this.clearFields();

        
    }

    clearFields(){
        this.setState(customerFormObject);
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
                            <input onChange={this.handleChange} placeholder="Buzz Lightyear" id="nameInput" name="name" required/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="#addressInput">Address</label>
                            <input onChange={this.handleChange} placeholder="Andy's Room" id="addressInput" 
                                name="street_address" required/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="#cityInput">City</label>
                            <input onChange={this.handleChange} placeholder="pixar city" id="cityInput"  name="city" required/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="#zipInput">Zip Code</label>
                            <input type="number" step="1" onChange={this.handleChange} placeholder="55555" id="zipInput" name="zip" required/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="#pickBtn">Pickup</label>
                            <input onChange={this.handleOptionChange} id="pickBtn" type="radio" value="pickup" name="pickOrDeliv" checked={this.state.pickOrDeliv === 'pickup'} required/>
                            <label htmlFor="#delvBtn">Delivery</label>    
                            <input onChange={this.handleOptionChange} id="delvBtn" type="radio" value="delivery" name="pickOrDeliv" checked={this.state.pickOrDeliv === 'delivery'} required/>
                        </div>
                        <div className="submitSection">
                            <button type="submit">Next</button>
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