import React, { Component } from 'react';
import Axios from 'axios';

class AdminPage extends Component {

    constructor() {
        super();

        this.state = {
            orders: [],
        }
    }


    getOrders() {
        console.log('in getOrders');

        Axios({
            method: 'GET',
            url: '/api/order'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            this.setState({
                orders: response.data
            });
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an error getting the orders');
        })

        console.log(this.state.orders);
    }

    componentDidMount() {
        this.getOrders();
    };
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </thead>
                    <tbody>
                        {this.state.orders.map((order, i) => {
                            return (
                                <tr>
                                    <td>{order.customer.name}</td>
                                    <td>{order.time}</td>
                                    <td>{order.type}</td>
                                    <td>{order.order_total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default AdminPage;