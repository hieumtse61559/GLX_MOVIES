import { GET_MOVIES } from "../Constants/movieConstants";
const initialState = {
  data: [],
}

export const movieReducer = (state = initialState, action) =>{
  switch (action.type) {
    case GET_MOVIES:{
      return {...state, data: action.payload.data}
    }
      
  
    default:
      return state
  }
}