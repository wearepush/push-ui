const validate = values => {
  const errors = {};
  if (values) {
    if (!values.date) {
      errors.date = 'Required';
    }
  }
  return errors;
};

export default validate;
