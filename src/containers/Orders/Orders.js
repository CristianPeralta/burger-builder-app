import React, { Component } from 'react';
import { connect } from 'react-redux'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

import { fetchOrders } from '../../store/actions/index';

class Orders extends Component {

    state = {
        orders: [],
        loading: null
    }

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = null;
        if (this.state.loading) {
            orders = <Spinner />;
        } else {
            orders = this.state.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ));
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapDispatchProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(fetchOrders()),
    };
};

export default connect(null, mapDispatchProps)(withErrorHandler(Orders, axios));
