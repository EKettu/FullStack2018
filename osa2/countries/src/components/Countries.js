import React from 'react'
import Country from './Country'

const Countries = ({ countries, filter, selectCountry}) => {
    const countriesToShow =
        countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    let one = false

    if (countriesToShow.length > 10) {
        return (
            <p>too many matches, specify another filter</p>
        )
    }
    else if (countriesToShow.length === 1) {
        one = true
    }
    return (
        <ul>
            {countriesToShow.map(country => <Country key={country.name} country={country} 
            onlyOne={one} selectCountry={selectCountry(country)} />)}
        </ul>
    )
}

export default Countries