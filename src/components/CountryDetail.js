import React, {useContext} from 'react';
import BucketListContext from '../store/context';

export default function CountryDetail({country}){
  if(!country) return null;

  const { dispatch } = useContext(BucketListContext)

  const handleAdd = () => {
    dispatch({type: 'ADD_COUNTRY', payload: country.name})
  }

  return (
    <div className="country-wrapper">
    <h4>{country.name}</h4>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <button onClick={handleAdd}>Add to Bucket-List</button>
    </div>
  )
}
