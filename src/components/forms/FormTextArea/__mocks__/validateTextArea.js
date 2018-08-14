const validate = values => {
  const errors = {};
  if (values) {
    if (!values.description) {
      errors.description = 'Required';
    }
  }
  return errors;
};

export default validate;
