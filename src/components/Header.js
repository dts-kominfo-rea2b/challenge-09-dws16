// Kalian bisa menambahkan CSS di src/components/Header.css
import './Header.css';

import React from 'react';

const Header = () => {
    return (
        <header className="App-header">
            <h1 className="App-title">Call a Friend</h1>
            <h4>Your friendly contact app</h4>
        </header>
    )
}

export default Header;