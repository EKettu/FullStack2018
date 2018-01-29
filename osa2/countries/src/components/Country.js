import React from 'react'


const Country = ({ country, onlyOne, selectCountry }) => {

    if (onlyOne) {
        return (
            <div>
                <h2>{country.name} </h2>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <img src={country.flag} />
            </div>
        )
    }
    return (
        <div onClick={selectCountry}>
            <a href='#' >{country.name}</a>
        </div>
    )
}

export default Country