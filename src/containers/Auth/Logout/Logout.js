import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(null, mapDispatchToProps)(Logout);