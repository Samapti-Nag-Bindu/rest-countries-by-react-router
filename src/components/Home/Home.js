import React from 'react';
import { Link } from 'react-router-dom';
import Countries from '../Countries/Countries';
import Header from '../Countries/Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Countries/>
            <Link></Link>
        </div>
    );
};

export default Home;