import React from 'react';
import { bool, node, shape, string } from 'prop-types';
import { FormFieldLabel, FormFieldError } from '../../index';
import cx from 'classnames';

const FormField = ({
  children,
  label,
  meta,
  name,
  className,
  isEmpty,
}) => (
    <div
      className={cx("FormField", {
        [className]: !!className
      })}
    >
      {label && (
        <div className={cx("FormField__label", {
          'is-active': meta.active,
          'is-invalid': meta.touched && meta.invalid,
          'is-valid': meta.valid,
          'is-empty': isEmpty,
          'is-not-empty': !isEmpty
        })}>
          <FormFieldLabel
            active={meta.active}
            invalid={meta.touched && meta.invalid}
            htmlFor={name}
            label={label}
            isEmpty={isEmpty}
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
  className: string,
  isEmpty: bool,
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
  className: '',
  isEmpty: false,
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
