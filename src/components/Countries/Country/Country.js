import React from 'react';
import './Country.css'
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    let history = useHistory();
    console.log(props)
    const {name, flag} = props.country;

    const handleBtn = (name) => {
        console.log(name);
        history.push(`/country/${name}`);
    }
    return (
        <div className="col-8 col-sm-6 col-md-4 col-lg-3 mt-3">
            <div className="card mx-auto">
                <img className="card-img-top" src={flag} style={{ height: "150px"}} alt="" />
                <div className='card-body'>
                <h2 className='text-center pb-4'>Name: {name}</h2>
                <div className='text-center'>
                <Link className="btn btn-info"onClick={(() => handleBtn(name))}>See Details</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Country;