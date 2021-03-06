import React from 'react';
import PropTypes from 'prop-types';
/**
 * @function
 * @param props - React props.
 * @returns {JSX.Element} - Render component null if success prop is false
 */
const Congrats = (props) => {
  if(props.success){
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <div data-test="congrats-message">
          <strong>Congrats you guessed the secret word correctly!</strong>
        </div>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;