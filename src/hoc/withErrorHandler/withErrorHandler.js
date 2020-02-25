import React from 'react';
import Aux from '../Auxw/Auxw';

const withErrorHanlder = (WrapperComponent) => {
    return (props) => {
        return (
            <Aux>
                <WrapperComponent {...props} />
            </Aux>
        );
    };
};

export default withErrorHanlder;