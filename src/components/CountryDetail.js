import React from 'react';

export default function CountryDetail({country}){

  if(!country) return null;


  return (
    <p>{country.name}</p>
  )
}
