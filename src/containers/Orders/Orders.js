import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {

    state = {
        orders: [],
        loading: null
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get('/orders.json')
            .then(response => {
                console.log(response);
                this.setState({ loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                {this.state.loading ? <p>LOADING...</p> : null}
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;
