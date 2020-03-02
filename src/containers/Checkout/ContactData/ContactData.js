import React, { Component } from 'react';
import Button from './../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import classes from './ContactData.css';

class ContactData extends  Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "John Doe",
                address: {
                    street: "street 1",
                    zipCode: "20184",
                    country: "United States"
                },
                email: "johndoe@test.com"
            },
            deliveryMethod: "fastest"
        };
        console.log(order);
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false });
            });
    }
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" className={classes.Input} name="name" placeholder="Your Name" />
                    <input type="text" className={classes.Input} name="email" placeholder="Your Mail" />
                    <input type="text" className={classes.Input} name="street" placeholder="Street" />
                    <input type="text" className={classes.Input} name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;