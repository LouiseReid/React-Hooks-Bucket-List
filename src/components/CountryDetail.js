import React, {useContext} from 'react';
import BucketListContext from '../store/context';
import './CountryDetail.css'

export default function CountryDetail({country}){
  if(!country) return null;

  const { dispatch } = useContext(BucketListContext)

  const handleAdd = () => {
    dispatch({type: 'ADD_COUNTRY', payload: country.name})
  }

  return (
    <div className="country-detail">
    <h4>{country.name}</h4>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <button className="btn-add" onClick={handleAdd}>&#43;</button>
    </div>
  )
}
