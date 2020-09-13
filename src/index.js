import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import { store } from './utils';
import { BookStoreServiceProvider } from './components/BookStoreServiceContext';
import BookStoreService from './services/bookStoreService';
import App from './components/App';

const service = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={service}>
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
