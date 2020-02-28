import React, { Component } from 'react';

class ContactData extends  Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    }
    render() {
        return (
            <div>
                Contact Data
            </div>
        );
    }
}

export default ContactData;