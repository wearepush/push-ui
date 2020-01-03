import React from "react";
import { array, bool, object, number, oneOfType, string } from "prop-types";
import { Field } from "redux-form";
import { FormField, Checkbox } from "../../index";

const _FormCheckbox = ({
  disabled,
  fieldProps,
  id,
  input,
  label,
  meta,
  valueProp,
  ...rest
}) => {
  const _id = id || input.name;
  return (
    <FormField {...fieldProps} label={label} name={_id}>
      <Checkbox
        {...rest}
        active={meta.active}
        checked={input.checked}
        disabled={disabled}
        id={id}
        invalid={meta.touched && meta.invalid}
        onBlur={event => input.onBlur(event)}
        onChange={event => input.onChange(event.currentTarget.checked)}
        onFocus={event => input.onFocus(event.currentTarget.checked)}
        name={input.name}
        value={valueProp}
      />
    </FormField>
  );
};

_FormCheckbox.propTypes = {
  disabled: bool,
  fieldProps: object,
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
  valueProp: oneOfType([array, bool, object, number, string])
};

_FormCheckbox.defaultProps = {
  disabled: false,
  fieldProps: null,
  id: "",
  label: "",
  valueProp: undefined
};

const FormCheckbox = props => (
  <Field
    {...props}
    component={_FormCheckbox}
    valueProp={props.value} // eslint-disable-line
    type="checkbox"
  />
);
export default FormCheckbox;
