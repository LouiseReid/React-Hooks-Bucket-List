import React, {useContext, useReducer} from 'react';
import BucketListContext from './store/context';
import bucketListReducer from './store/reducer';
import CountriesContainer from './containers/CountriesContainer';
import BucketList from './containers/BucketList';
import './App.css';

export default function App(){
  const initialState = useContext(BucketListContext)
  const [state, dispatch] = useReducer(bucketListReducer, initialState)

  return (
    <BucketListContext.Provider value={{state, dispatch}}>
      <div className="container">
        <CountriesContainer />
        <BucketList />
      </div>
    </BucketListContext.Provider>
  )
}
