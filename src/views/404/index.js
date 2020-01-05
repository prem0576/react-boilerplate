import React from 'react';
import { PropTypes } from 'prop-types';

const PageNotFound = props => (
  <div>
    Oh, you have entered a forbiddon territory. wanna go back to{' '}
    <button onClick={() => props.history.push('/')}> Home </button> ?{' '}
  </div>
);

PageNotFound.propTypes = {
  history: PropTypes.element.isRequired,
};

export default PageNotFound;
