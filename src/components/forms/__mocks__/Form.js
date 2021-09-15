import React from 'react';
import { node } from 'prop-types';
import { Form as FinalForm } from 'react-final-form';

const Form = ({ children, ...rest }) => {
  const onSubmit = (values) => {
    console.log(values); // eslint-disable-line
  };
  return (
    <FinalForm onSubmit={onSubmit} {...rest}>
      {({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
    </FinalForm>
  );
};

Form.propTypes = {
  children: node.isRequired,
};

export default Form;
