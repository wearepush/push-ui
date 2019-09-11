import React from 'react';
import { bool, object, oneOf, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, TextField } from '../../index';

const _FormTextField = ({
  disabled,
  fieldProps,
  id,
  input,
  label,
  meta,
  placeholder,
  type,
  ...rest
}) => {
  const _id = id || input.name;
  return (
    <FormField
      {...fieldProps}
      isEmpty={!input.value}
      label={label}
      meta={meta}
      name={_id}
    >
      <TextField
        {...rest}
        active={meta.active}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
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
  fieldProps: object,
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
  fieldProps: null,
  id: '',
  inputProps: null,
  label: '',
  placeholder: '',
  type: 'text',
};

const FormTextField = props => <Field {...props} component={_FormTextField} />;
export default FormTextField;
