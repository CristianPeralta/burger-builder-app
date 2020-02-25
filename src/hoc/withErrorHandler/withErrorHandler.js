import React from 'react';
import Aux from '../Auxw/Auxw';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent) => {
    return (props) => {
        return (
            <Aux>
                <Modal>
                    Something went worng!
                </Modal>
                <WrapperComponent {...props} />
            </Aux>
        );
    };
};

export default withErrorHandler;