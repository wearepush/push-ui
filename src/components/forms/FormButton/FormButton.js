import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { func, string } from 'prop-types';
import { Button } from '../../index';

const FormButton = ({
  dispatch,
  form,
  ...rest
}) => (
  <Button
    onClick={(e) => {
      const action = dispatch(submit(form));
      rest.onClick && rest.onClick(e, action);
    }}
    type="button"
    {...rest}
  />
);

FormButton.propTypes = {
  dispatch: func.isRequired,
  form: string.isRequired,
};

FormButton.defaultProps = {
};

export default connect()(FormButton);
