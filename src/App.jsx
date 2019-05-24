import React from 'react';
import logo from './logo.svg';
import Router from './routes/Router';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Router />
            </header>
        </div>
    );
};

export default App;
