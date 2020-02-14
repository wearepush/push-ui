const isEmpty = value => value === undefined || value === null || value === '' || !value;

const validate = values => {
  const errors = {};
  if (values) {
    if (isEmpty(values.remember)) {
      errors.remember = 'Required';
    }
  }
  return errors;
};

export default validate;
