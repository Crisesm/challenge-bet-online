import {
  SET_GAMES_DATA
} from "../Actions/action";

const initialState = {
    gamesData:[]
};
   
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES_DATA : {
      return {
        ...state,
        gamesData: action.payload
      };
    }
    
    default: {
      return state;
    }
  }
};

export default reducer;
