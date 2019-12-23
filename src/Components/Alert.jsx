import React from 'react';

const Alert = ({ message, success }) => (
  <div className={`Alert ${success ? 'success' : ''}`}>{message}</div>
);

export default Alert;
