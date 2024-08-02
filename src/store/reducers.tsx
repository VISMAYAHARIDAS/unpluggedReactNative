
import { combineReducers } from 'redux';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
