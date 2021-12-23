import React from 'react';
import { string } from 'prop-types';
import Button from '../../buttons/Button/Button';

const FormButton = ({ form, ...rest }) => <Button type="button" {...rest} />;

FormButton.propTypes = {
  form: string.isRequired,
};

FormButton.defaultProps = {};

export default FormButton;
