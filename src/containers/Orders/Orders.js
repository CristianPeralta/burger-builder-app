import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {

    state = {
        orders: [1,2],
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
        let orders = null;
        if (this.state.loading) {
            orders = <Spinner />;
        } else {
            orders = this.state.orders.map(o => (<Order />));
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default Orders;
