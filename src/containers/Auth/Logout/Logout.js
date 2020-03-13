import React, { Component } from 'react';
import { logout } from '../../../store/actions/index';

class Logout extends Component {
    render() {
        return (
            <div>
                Logout
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: dispatch(logout()),
    };
};

export default Logout;