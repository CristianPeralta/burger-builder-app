import React, { Component } from 'react';
import Aux from '../Auxw/Auxw';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent) => {
    return class extends Component {
        state = {
            error: {
                message: "Something went worng!",
            }
        };
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        };
    };
};

export default withErrorHandler;