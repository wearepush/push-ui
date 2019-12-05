import React from 'react';
import { bool, string } from 'prop-types';
import cx from 'classnames';

const FormFieldLabel = ({
  active,
  invalid,
  disabled,
  htmlFor,
  label,
  isEmpty
}) => (
  <label
    className={
      cx('FormFieldLabel', {
        'is-active': active,
        'is-invalid': invalid,
        'is-disabled': disabled,
        'is-empty': isEmpty,
        'is-not-empty': !isEmpty,
      })
    }
    htmlFor={htmlFor}
  >
    {label}
  </label>
);

FormFieldLabel.propTypes = {
  active: bool,
  disabled: bool,
  invalid: bool,
  htmlFor: string.isRequired,
  isEmpty: bool,
  label: string.isRequired,
};

FormFieldLabel.defaultProps = {
  isEmpty: false,
  active: false,
  invalid: false,
  disabled: false,
};

export default FormFieldLabel;
