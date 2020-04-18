import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { func, string } from 'prop-types';
import Button from '../../buttons/Button/Button';

const FormButton = ({ dispatch, form, ...rest }) => (
  <Button
    type="button"
    {...rest}
    onClick={(e) => {
      if (rest.onClick) {
        const action = dispatch(submit(form));
        rest.onClick(e, action);
      }
    }}
  />
);

FormButton.propTypes = {
  dispatch: func.isRequired,
  form: string.isRequired,
};

FormButton.defaultProps = {};

export default connect()(FormButton);
