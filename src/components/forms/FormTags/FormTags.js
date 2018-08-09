import React from 'react';
import { object, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, Tags } from '../../index';

const _FormTags = ({
  id,
  input,
  label,
  meta,
  ...rest
}) => {
  const _id = id || input.name;
  return (
    <FormField
      label={label}
      name={_id}
    >
      <Tags
        {...rest}
        active={meta.active}
        id={id}
        invalid={meta.touched && meta.invalid}
        onAdd={(values) => input.onChange(values)}
        onDrag={(values) => input.onChange(values)}
        onDelete={(values) => input.onChange(values)}
        onFocus={(event, values) => input.onFocus(values)}
        onBlur={(event, values) => input.onBlur(values)}
        name={input.name}
        tags={input.value}
        value={input.value}
        valid={!!input.value && !meta.error && !meta.warning && meta.valid}
      />
    </FormField>
  );
};

_FormTags.propTypes = {
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
};

_FormTags.defaultProps = {
  id: '',
  label: '',
};

const FormTags = props => <Field {...props} component={_FormTags} type="select-multiple" />; // eslint-disable-line
export default FormTags;
