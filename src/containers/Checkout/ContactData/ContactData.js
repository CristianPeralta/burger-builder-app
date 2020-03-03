import React, { Component } from 'react';
import Button from './../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import axios from '../../../axios-orders';
import classes from './ContactData.css';

class ContactData extends  Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code',
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail',
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: Number(this.props.price).toFixed(2),
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.orderForm,
        };

        const updatedFormElement = {
            ...updatedForm[inputIdentifier],
        };

        updatedFormElement.value = event.target.value;

        updatedForm[inputIdentifier] = updatedFormElement;

        this.setState({ orderForm: updatedForm });
    }

    render() {
        const formElementsFromArray = [];
        for (const key in this.state.orderForm) {
            formElementsFromArray.push({
                id: key,
                config: this.state.orderForm[key],
            });
        }

        let form = (
            <form>
                {formElementsFromArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.value}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = (<Spinner />);
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;