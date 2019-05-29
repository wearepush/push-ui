import React from 'react';
import { object, string } from 'prop-types';
import { Field } from 'redux-form';
import { DatePicker, FormField } from '../../index';

const _FormDatePicker = ({
  fieldProps,
  id,
  input,
  label,
  meta,
  ...rest
}) => {
  const _id = id || input.name;
  return (
    <FormField
      {...fieldProps}
      meta={meta}
      label={label}
      name={_id}
      isEmpty={!input.value}
    >
      <DatePicker
        {...rest}
        invalid={meta.touched && meta.invalid}
        onBlur={(value, dateStr) => input.onBlur(dateStr)}
        onChange={(value, dateStr) => input.onChange(dateStr)}
        onFocus={(value, dateStr) => input.onFocus(dateStr)}
        name={input.name}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
        value={input.value}
      />
    </FormField>
  );
};

_FormDatePicker.propTypes = {
  fieldProps: object,
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
};

_FormDatePicker.defaultProps = {
  fieldProps: null,
  id: '',
  label: '',
};

const FormDatePicker = props => <Field {...props} component={_FormDatePicker} type="text" />;
export default FormDatePicker;
