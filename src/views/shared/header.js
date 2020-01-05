import React from 'react';
import {
  useAuthState,
  useAuthDispatch,
} from '../../context/providers/authProvider';
import {
  userLogoutAction,
  userLoginAsyncAction,
} from '../../context/actions/authActions';
import '../../assets/styles/header.scss';

const Header = () => {
  const authState = useAuthState();
  const dispatch = useAuthDispatch();
  return (
    <>
      <div className="left"> Welcome </div>
      <div className="right">
        <button
          onClick={() =>
            authState.token
              ? userLogoutAction(dispatch)
              : userLoginAsyncAction(dispatch)
          }
        >
          {authState.token ? 'Logout' : 'Login'}{' '}
        </button>{' '}
      </div>
    </>
  );
};

export default Header;
