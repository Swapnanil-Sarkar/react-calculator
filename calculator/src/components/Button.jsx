/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

// Prop validation
Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is provided
  onClick: PropTypes.func.isRequired, // Ensure onClick is a function
};

export default Button;
