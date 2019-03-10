import React from 'react';

export default function Select({countries}){

  const options = countries.map((country, index) => {
    return <option value={index} key={country.name}>{country.name}</option>
  })

  return (
    <select defaultValue="default" id="country-selector">
      <option disabled value="default">Choose a country...</option>
      {options}
    </select>
  )
}
