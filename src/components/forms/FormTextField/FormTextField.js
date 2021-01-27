import React from 'react';
import { bool, object, oneOf, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, TextField } from '../../index';

const FormComponentTextField = ({ disabled, fieldProps, id, input, label, meta, placeholder, type, ...rest }) => {
  const generateId = id || input.name;
  return (
    <FormField {...fieldProps} isEmpty={!input.value} label={label} meta={meta} name={generateId}>
      <TextField
        {...rest}
        active={meta.active}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
        onBlur={(event) => input.onBlur(event)}
        onChange={(event) => input.onChange(event.currentTarget.value)}
        onFocus={(event) => input.onFocus(event.currentTarget.value)}
        name={input.name}
        placeholder={placeholder}
        type={type}
        value={input.value}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
      />
    </FormField>
  );
};

FormComponentTextField.propTypes = {
  disabled: bool,
  fieldProps: object,
  id: string,
  input: object.isRequired,
  inputProps: object,
  label: string,
  meta: object.isRequired,
  placeholder: string,
  type: oneOf(['date', 'email', 'number', 'password', 'text']),
};

FormComponentTextField.defaultProps = {
  disabled: false,
  fieldProps: null,
  id: '',
  inputProps: null,
  label: '',
  placeholder: '',
  type: 'text',
};

const FormTextField = (props) => <Field {...props} component={FormComponentTextField} />;
export default FormTextField;
