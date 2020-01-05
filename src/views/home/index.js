import React from 'react';
import { useAuthState } from '../../context/providers/authProvider';
import '../../assets/styles/home/index.scss';

const Home = () => {
  const authState = useAuthState();
  return (
    <div className="homeComponent">
      this is home , {authState.user ? authState.user.name : 'Hello Guest'}
    </div>
  );
};

export default Home;
