import React, {useContext, useReducer} from 'react';
import BucketListContext from './store/context';
import bucketListReducer from './store/reducer';
import CountriesContainer from './containers/CountriesContainer';

export default function App(){
  const initialState = useContext(BucketListContext)
  const [state, dispatch] = useReducer(bucketListReducer, initialState)

  return (
    <BucketListContext.Provider value={{state, dispatch}}>
      <CountriesContainer />
    </BucketListContext.Provider>
  )
}
