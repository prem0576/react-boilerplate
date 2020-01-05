import React, { useReducer, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from '../actionTypes';

const localState = JSON.parse(localStorage.getItem('auth'));
const initialState = {
  user: null,
  token: null,
  loading: null,
  error: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_START:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
      };
    case USER_LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };
    case USER_LOGOUT:
      return { ...initialState };
    default:
      throw new Error('Should be a legit action');
  }
};

const AuthContext = React.createContext();

const AuthProvider = props => {
  const [state, dispatch] = useReducer(reducer, localState || initialState);
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(state));
  }, [state]);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useAuthState = () => {
  const { state } = React.useContext(AuthContext);
  if (state === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return state;
};

const useAuthDispatch = () => {
  const { dispatch } = React.useContext(AuthContext);
  if (dispatch === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return dispatch;
};

export { AuthProvider, useAuthState, useAuthDispatch };
