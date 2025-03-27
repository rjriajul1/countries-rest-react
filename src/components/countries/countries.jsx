import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({fetchCountriesData}) => {
    const countries = use(fetchCountriesData);

    const [visitedCountries, setVisitedCountries]=useState([]);
    const [visitedFlags, setVisitedFlags]=useState([]);

    const handleVisitedFlags = (flag)=>{
        // console.log(flag);
        const newFlagLink = [...visitedFlags, flag];
        setVisitedFlags(newFlagLink)
    }

    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
      
    }
   
    return (
        <div >
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled so far: {visitedCountries.length}</h3>
            <h2>visited country flag: {visitedFlags.length}</h2>
            <div >

            {
               visitedFlags.map((flag,index)=><img className='flag' key={index} src={flag}></img>)
            }
            </div>

            {
                visitedCountries.map((country,index)=><ol key={index}><li >{country.name.common}</li></ol>)
            }
            
            <div className='countries'>

            {
                countries.map((country,index)=><Country 
                key={index}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags} 
                country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;