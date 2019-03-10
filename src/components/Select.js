import React from 'react';

export default function Select({countries, onCountrySelected}){

  const options = countries.map((country, index) => {
    return <option value={index} key={country.name}>{country.name}</option>
  })

  const handleChange = evt => {
    onCountrySelected(evt.target.value)
  }

  return (
    <select defaultValue="default" id="country-selector" onChange={handleChange}>
      <option disabled value="default">Choose a country...</option>
      {options}
    </select>
  )
}
