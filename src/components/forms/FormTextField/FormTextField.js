import React from 'react';
import { bool, object, oneOf, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, TextField } from '../../index';

const _FormTextField = ({
  disabled,
  id,
  input,
  inputProps,
  label,
  meta,
  placeholder,
  type,
  ...rest
}) => {
  const _id = id || input.name;
  return (
    <FormField
      meta={meta}
      label={label}
      name={_id}
    >
      <TextField
        active={meta.active}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
        inputProps={inputProps}
        onBlur={(event) => input.onBlur(event)}
        onChange={(event, value) => input.onChange(value)}
        onFocus={(event, value) => input.onFocus(value)}
        name={input.name}
        placeholder={placeholder}
        type={type}
        value={input.value}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
      />
    </FormField>
  );
};

_FormTextField.propTypes = {
  disabled: bool,
  id: string,
  input: object.isRequired,
  inputProps: object,
  label: string,
  meta: object.isRequired,
  placeholder: string,
  type: oneOf([
    'date',
    'email',
    'number',
    'password',
    'text',
  ]),
};

_FormTextField.defaultProps = {
  disabled: false,
  id: '',
  inputProps: null,
  label: '',
  placeholder: '',
  type: 'text',
};

const FormTextField = props => <Field {...props} component={_FormTextField} />;
export default FormTextField;
