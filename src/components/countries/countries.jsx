import React, { use } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({fetchCountriesData}) => {
    const countries = use(fetchCountriesData);
    // console.log(countries);
    return (
        <div >
            <h1>Traveling Countries: {countries.length}</h1>
            
            <div className='countries'>

            {
                countries.map((country,index)=><Country key={index} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;