import React, { useState } from "react";
import './country.css'

const Country = ({ country,handleVisitedCountries,handleVisitedFlags }) => {
  // console.log(handleVisitedCountries);

  const[visite,setVisite]=useState(false)

  const visited = ()=>{
    setVisite(!visite)
    handleVisitedCountries(country);

      // if(visite){
      //   setVisite(false)
      // }
      // else{
      //   setVisite(true)
      // }
    
  }
 return(
    <section>
    <div className={`country ${visite && "visited-country"}`}>
    <h1 className="name">{country.name.common} </h1>
    <img className="countryImg" src={country.flags.png} alt="" />
    <div className="display">
    <h3 className="population">population: {country.population}</h3>
    <p className="population">Independent: {country.independent ? "free" : "not free"}</p>
    </div>
    <button className={visite? "btn-visited":"btn-not-visited"} onClick={visited}>{ visite ? "visited" : "not visited"}</button>
    <button onClick={()=> handleVisitedFlags(country.flags.png)}>visited flag</button>
  </div>
    </section>
 )
};

export default Country;
