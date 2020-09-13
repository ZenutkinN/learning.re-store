import React from 'react';

import { BookStoreServiceConsumer } from './../../BookStoreServiceContext';

const WithBookStoreService = () => Wrapped => {
    return props => {
        return (
            <BookStoreServiceConsumer>
                {service => {
                    return <Wrapped {...props} service={service} />;
                }}
            </BookStoreServiceConsumer>
        );
    };
};

export default WithBookStoreService;
