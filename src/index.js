import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { StoreProvider } from './store';
import 'src/i18n/i18n';
import { PrimeReactProvider } from 'primereact/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PrimeReactProvider>
        <StoreProvider>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </StoreProvider>
    </PrimeReactProvider>,
);

reportWebVitals();
