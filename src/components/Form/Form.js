import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({dataTestId}) => (
  <div className="Form" data-testid={dataTestId}>
    Form Component
  </div>
);

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
