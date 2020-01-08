import React from 'react';
import PropTypes from 'prop-types';

import '../Styles/Alert.css';

const Alert = ({ message, success }) => (
  <div className={`Alert ${success ? 'success' : ''}`}>{message}</div>
);

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.any,
};

export default Alert;
