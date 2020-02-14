import cx from 'classnames';

export const createInputClassName = options => {
  if (!options) {
    return '';
  }
  const { componentClassName, className, invalid, valid } = options;

  return cx(
    componentClassName,
    {
      'is-invalid': invalid,
      'is-valid': valid,
    },
    className
  );
};
