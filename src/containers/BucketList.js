import React, { useContext } from 'react';
import BucketListContext from '../store/context';
import './BucketList.css';

export default function BucketList(){

  const { state, dispatch } = useContext(BucketListContext)
  const subTitle = state.items.length > 0 ? null : 'Bucket List empty'
  const items = state.items.map((item, index) => {
    return <li key={index}>
    {item}
    <button onClick={() => dispatch({type: 'REMOVE', payload: item})} className="btn-remove">X</button>
    </li>
  })

  return (
    <div className="bucket-list">
    <h2>Bucket List</h2>
    <p className="subtitle">{subTitle}</p>
    <ul>
    {items}
    </ul>
    </div>
  )
}
