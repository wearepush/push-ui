import React from 'react';
import { bool, object, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, TextArea } from '../../index';

const _FormTextArea = ({
  disabled,
  id,
  input,
  label,
  meta,
  ...rest
}) => {
  const _id = id || input.name;
  return (
    <FormField
      isEmpty={!input.value}
      label={label}
      meta={meta}
      name={_id}
    >
      <TextArea
        {...rest}
        active={meta.active}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
        onBlur={(event) => input.onBlur(event)}
        onChange={(event, value) => input.onChange(value)}
        onFocus={(event, value) => input.onFocus(value)}
        name={input.name}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
        value={input.value}
      />
    </FormField>
  );
};

_FormTextArea.propTypes = {
  disabled: bool,
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
};

_FormTextArea.defaultProps = {
  disabled: false,
  id: '',
  label: '',
};

const FormTextArea = props => <Field {...props} component={_FormTextArea} type="textarea" />;
export default FormTextArea;
