import React from 'react';
import { array, bool, object, number, oneOfType, string } from 'prop-types';
import { Field } from 'react-final-form';
import { FormField, Checkbox } from '../../index';

const FormComponentCheckbox = ({ disabled, fieldProps, id, input, label, meta, valueProp, ...rest }) => {
  const generateId = id || input.name;
  return (
    <FormField {...fieldProps} label={label} name={generateId}>
      <Checkbox
        {...rest}
        active={meta.active}
        checked={input.checked}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
        onBlur={(event) => input.onBlur(event)}
        onChange={(event) => input.onChange(event.currentTarget.checked)}
        onFocus={(event) => input.onFocus(event.currentTarget.checked)}
        name={input.name}
        value={valueProp}
      />
    </FormField>
  );
};

FormComponentCheckbox.propTypes = {
  disabled: bool,
  fieldProps: object,
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
  valueProp: oneOfType([array, bool, object, number, string]),
};

FormComponentCheckbox.defaultProps = {
  disabled: false,
  id: '',
  label: '',
};

const FormCheckbox = (props) => (
  <Field
    {...props}
    component={FormComponentCheckbox}
    valueProp={props.value} // eslint-disable-line
    type="checkbox"
  />
);
export default FormCheckbox;
