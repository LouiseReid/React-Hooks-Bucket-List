export default function reducer(state, action){
  switch(action.type){
    case 'ADD_COUNTRY':
    if(state.items.findIndex(item => item === action.payload) > -1){
      return state
    }
    const addedItems = [...state.items, action.payload]
    return {
      ...state,
      items: addedItems
    }
    case 'REMOVE':
    const itemsAfterRemove = state.items.filter(item => item !== action.payload)
    return {
      ...state,
      items: itemsAfterRemove
    }
    default:
    return state;
  }
}
