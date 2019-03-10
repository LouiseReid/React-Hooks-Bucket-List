import React, { useState, useEffect } from 'react';
import Select from '../components/Select'

export default function CountriesContainer() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => setCountries(countries))
  }

  return (
    <>
    <h1>Countries of the World</h1>
    <Select countries={countries} />
    </>
  )

}
