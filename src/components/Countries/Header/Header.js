import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar tex-white bg-dark">
                <Link className="navbar-brand mx-auto border rounded p-3 text-white font-weight-bold bg-dark" to="/country">Country React SPA</Link>
            </nav>
        </div>
    );
};

export default Header;