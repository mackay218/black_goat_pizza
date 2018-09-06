import React, { Component } from 'react';
import PizzaList from './PizzaList/PizzaList.js';

class SelectPage extends Component {
    render() {
        return(
            <div>
                <PizzaList />
                <button>Next</button>
            </div>
        );
    }
}

export default SelectPage;