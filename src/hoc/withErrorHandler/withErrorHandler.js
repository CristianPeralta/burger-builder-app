import React, { useState } from 'react';
import Aux from '../Auxw/Auxw';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
    return props => {
        state = {
            error: null
        };

        const componentWillMount = () => {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error });
            });
        };

        const componentWillUnmount = () => {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        };

        const errorComfirmedHanlder = () => {
            this.setState({ error: null });
        };
        return (
            <Aux>
                <Modal
                    show={this.state.error}
                    modalClosed={errorComfirmedHanlder}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrapperComponent {...props} />
            </Aux>
        );
    };
};

export default withErrorHandler;