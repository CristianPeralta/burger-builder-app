import React, { Component } from 'react';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Addrees',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
        }
    }
    render() {
        return (
            <div>
                AUTH
            </div>
        );
    }
}

export default Auth;