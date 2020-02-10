import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import AES_CORE from '../../utils/services/encryptDecryptHelper';

import rootReducer from '../reducers';

// const decryptedData = sessionStorage.getItem('instaStore')
//   ? new AES_CORE(JSON.parse(sessionStorage.getItem('instaStore'))).decrypt()
//   : {};

const persistedState = sessionStorage.getItem('instaStore');
// if (persistedState.authReducer) persistedState.authReducer.loading = false;
// if (persistedState.offerReducer) persistedState.offerReducer.loading = false;

const store = createStore(
  rootReducer,
  persistedState,
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(logger, thunk)
    : applyMiddleware(thunk)
);

export default store;
