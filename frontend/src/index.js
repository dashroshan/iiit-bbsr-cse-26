import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "./components/alert";

window.APIROOT = '/';
// window.APIROOT = 'http://localhost:4000/';

const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE,
    containerStyle: { textShadow: "none", zIndex: 999 }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        </React.StrictMode>
    </BrowserRouter>
);