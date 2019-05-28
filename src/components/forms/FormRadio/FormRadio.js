import React from 'react';
import { bool, object, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, Radio } from '../../index';

const _FormRadio = ({
  disabled,
  id,
  input,
  label,
  meta,
  ...rest
}) => {
  const _id = id || `${input.name}-${JSON.stringify(input.value)}`; // replace to hash
  return (
    <FormField
      label={label}
      name={_id}
      isEmpty={!input.value}
    >
      <Radio
        {...rest}
        active={meta.active}
        checked={input.checked}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
        onBlur={(event) => input.onBlur(event)}
        onChange={(event, value) => input.onChange(value)}
        onFocus={(event, value) => input.onFocus(value)}
        name={input.name}
        value={input.value}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
      />
    </FormField>
  );
};

_FormRadio.propTypes = {
  disabled: bool,
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
};

_FormRadio.defaultProps = {
  disabled: false,
  id: '',
  label: '',
};

const FormRadio = props => <Field {...props} component={_FormRadio} type="radio" />;
export default FormRadio;
