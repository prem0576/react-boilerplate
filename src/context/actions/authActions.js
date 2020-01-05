import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from '../actionTypes';

const userLogoutAction = dispatch => {
  dispatch({
    type: USER_LOGOUT,
  });
};

const userLoginAsyncAction = async (dispatch, payload = null) => {
  dispatch({
    type: USER_LOGIN_START,
  });
  try {
    const obj = { user: { name: 'Prem Patel' }, token: 'jsjjsj', payload };
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: obj,
    });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILURE, payload: { code: 403 } });
  }
};

export { userLogoutAction, userLoginAsyncAction };
