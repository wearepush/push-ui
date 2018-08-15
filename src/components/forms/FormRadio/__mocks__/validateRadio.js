const validate = values => {
  const errors = {};
  if (values) {
    if (!values.country) {
      errors.country = 'Required';
    }
  }
  return errors;
};

export default validate;
