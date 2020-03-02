import React, { Component } from 'react';
import Button from './../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends  Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
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