import React from 'react';
import { oneOf, string } from 'prop-types';
import cx from 'classnames';

const FormFieldError = ({ text, type }) => (
  <div
    className={cx('FormFieldError', {
      [`is-${type}`]: !!type,
    })}
  >
    {text}
  </div>
);

FormFieldError.propTypes = {
  text: string,
  type: oneOf(['error', 'warning']),
};

FormFieldError.defaultProps = {
  text: '',
  type: 'error',
};

export default FormFieldError;
