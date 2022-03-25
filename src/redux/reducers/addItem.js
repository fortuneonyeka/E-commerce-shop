const addItem = [];

const addItems = (state = addItem, action) => {
  switch(action.type) {
    case "ADDITEM" : return [
      ...state, 
      action.payload
    ]
    

    case "DELITEM" : 
    return state = state.filter((item)=> {
      return item.id !== action.payload.id
    })
   
    default: return state;
    
  }
}

export default addItems