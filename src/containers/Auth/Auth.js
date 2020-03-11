import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false,
            },
        }
    }
    render() {
        const formElementsFromArray = [];
        for (const key in this.state.orderForm) {
            formElementsFromArray.push({
                id: key,
                config: this.state.orderForm[key],
            });
        }

        const form = formElementsFromArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangeHandler(event, formElement.id)}
            />
        ))

        return (
            <div>
                <form>
                    {form}
                </form>
            </div>
        );
    }
}

export default Auth;