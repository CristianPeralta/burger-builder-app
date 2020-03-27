import React, { useState, useEffect } from 'react';
import Aux from '../Auxw/Auxw';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req;
        })

        const resInterceptor = axios.interceptors.response.use(
            res =>
            res, error => {
                setError(error);
            }
        );

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            };
        }, [reqInterceptor, resInterceptor]);

        const errorComfirmedHandler = () => {
            setError(null);
        };
        return (
            <Aux>
                <Modal
                    show={error}
                    modalClosed={errorComfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrapperComponent {...props} />
            </Aux>
        );
    };
};

export default withErrorHandler;