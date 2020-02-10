import { combineReducers } from 'redux';
// import { USER_LOGOUT } from '../actionType';

const allReducers = combineReducers({});

const rootReducer = (state, action) => {
  // if (action.type === USER_LOGOUT) {
  //   return allReducers(undefined, action);
  // }
  return allReducers(state, action);
};

export default rootReducer;
