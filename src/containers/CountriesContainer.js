import React, { useState, useEffect } from 'react';
import Select from '../components/Select';
import CountryDetail from '../components/CountryDetail';

export default function CountriesContainer() {

  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => setCountries(countries))
  }

  const handleCountrySelected = index => {
    const country = countries[index]
    setSelectedCountry(country)
  }

  return (
    <>
    <h1>Countries of the World</h1>
    <Select countries={countries} onCountrySelected={handleCountrySelected}/>
    <CountryDetail country={selectedCountry} />
    </>
  )

}
