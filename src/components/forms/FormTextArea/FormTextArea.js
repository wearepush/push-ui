import React from 'react';
import { bool, object, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, TextArea } from '../../index';

const FormComponentTextArea = ({ disabled, fieldProps, id, input, label, meta, ...rest }) => {
  const generateId = id || input.name;
  return (
    <FormField {...fieldProps} isEmpty={!input.value} label={label} meta={meta} name={generateId}>
      <TextArea
        {...rest}
        active={meta.active}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
        onBlur={event => input.onBlur(event)}
        onChange={event => input.onChange(event.currentTarget.value)}
        onFocus={event => input.onFocus(event.currentTarget.value)}
        name={input.name}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
        value={input.value}
      />
    </FormField>
  );
};

FormComponentTextArea.propTypes = {
  disabled: bool,
  fieldProps: object,
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
};

FormComponentTextArea.defaultProps = {
  disabled: false,
  fieldProps: null,
  id: '',
  label: '',
};

const FormTextArea = props => (
  <Field {...props} component={FormComponentTextArea} type="textarea" />
);
export default FormTextArea;
