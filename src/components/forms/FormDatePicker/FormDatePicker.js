import React from 'react';
import { object } from 'prop-types';
import { Field } from 'redux-form';
import { DatePicker, FormField } from '../../index';

const _FormDatePicker = ({
  input,
  meta
}) => {
  const _id = input.name;
  return (
    <FormField
      meta={meta}
      name={_id}
    >
      <DatePicker
        onChange={(value) => input.onChange(value)}
        onClose={(value) => input.onClose(value)}
        onOpen={(value) => input.onOpen(value)}
        name={input.name}
        valid={meta.valid}
        value={input.value}
      />
    </FormField>
  );
};

_FormDatePicker.propTypes = {
  meta: object.isRequired,
  input: object,
};

_FormDatePicker.defaultProps = {};

const FormDatePicker = props => <Field {...props} component={_FormDatePicker} type="DatePicker" />;
export default FormDatePicker;
