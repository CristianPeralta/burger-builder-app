import React, { Component } from 'react';
import Aux from '../Auxw/Auxw';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent) => {
    return class extends Component {
        render() {
            return (
                <Aux>
                    <Modal show>
                        Something went worng!
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        };
    };
};

export default withErrorHandler;