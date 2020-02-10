import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import View from './views';
import store from './redux/store';

store.subscribe(() => {
  const encryptedData = store.getState();
  sessionStorage.setItem('instaStore', JSON.stringify(encryptedData));
});

const Root = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

// Render the Root element into the DOM
ReactDOM.render(<Root />, document.getElementById('root'));
