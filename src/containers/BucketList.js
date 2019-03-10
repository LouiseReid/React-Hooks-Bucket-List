import React, { useContext } from 'react';
import BucketListContext from '../store/context';

export default function BucketList(){

  const { state, dispatch } = useContext(BucketListContext)

  console.log(state.items);

  return (
    <h2>Bucket-list</h2>
  )
}
