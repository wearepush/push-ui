import React from 'react';
import { bool, node, shape, string } from 'prop-types';
import { FormFieldLabel, FormFieldError } from '../../index';
import styles from './FormField.scss';

const FormField = ({
  children,
  label,
  meta,
  name,
}) => (
  <div
    className="FormField"
  >
    {label && (
      <div className="FormField__label">
        <FormFieldLabel
          active={meta.active}
          invalid={meta.touched && meta.invalid}
          htmlFor={name}
          label={label}
        />
      </div>
    )}
    <div className="FormField__children">
      {children}
    </div>
    {meta.touched && (meta.error || meta.warning) && (
      <div className="FormField__error">
        <FormFieldError
          text={meta.error || meta.warning}
          type={(meta.error ? 'error' : '') || (meta.warning ? 'warning' : '')}
        />
      </div>
    )}
  </div>
);

FormField.propTypes = {
  children: node.isRequired,
  label: string,
  meta: shape({
    active: bool,
    error: string,
    invalid: bool,
    touched: bool,
    warning: string,
  }),
  name: string,
};

FormField.defaultProps = {
  label: '',
  meta: {
    active: false,
    error: '',
    invalid: false,
    touched: false,
    warning: '',
  },
  name: '',
};

export default FormField;
