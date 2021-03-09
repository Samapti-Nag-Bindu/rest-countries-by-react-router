import React from 'react';
import errorImg from '../../images/404_illustration.jpg'

const NotMatch = () => {
    return (
        <div>
            <img className="img-fluid w-100" src={errorImg} alt="error-img"/>
        </div>
    );
};

export default NotMatch;