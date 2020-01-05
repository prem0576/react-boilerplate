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
  const authDispatch = useAuthDispatch();
  return (
    <>
      <div className="left"> Welcome </div>
      <div className="right">
        <button
          onClick={() =>
            authState.token
              ? userLogoutAction(authDispatch)
              : userLoginAsyncAction(authDispatch)
          }
        >
          {authState.token ? 'Logout' : 'Login'}{' '}
        </button>{' '}
      </div>
    </>
  );
};

export default Header;
