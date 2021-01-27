import React from 'react';
import { bool, object, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, TextMask } from '../../index';

const FormComponentTextMask = ({ disabled, fieldProps, id, input, label, meta, placeholder, ...rest }) => {
  const generateId = id || input.name;
  return (
    <FormField {...fieldProps} isEmpty={!input.value} label={label} meta={meta} name={generateId}>
      <TextMask
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
        value={input.value}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
      />
    </FormField>
  );
};

FormComponentTextMask.propTypes = {
  disabled: bool,
  fieldProps: object,
  id: string,
  input: object.isRequired,
  inputProps: object,
  label: string,
  meta: object.isRequired,
  placeholder: string,
};

FormComponentTextMask.defaultProps = {
  disabled: false,
  fieldProps: null,
  id: '',
  inputProps: null,
  label: '',
  placeholder: '',
};

const FormTextMask = props => <Field {...props} component={FormComponentTextMask} type="text" />; // eslint-disable-line
export default FormTextMask;
