import React from 'react';
import ReactDOM from 'react-dom';
import View from './views';

function Root() {
  return <View />;
}

// Render the Root element into the DOM
ReactDOM.render(<Root />, document.getElementById('root'));
