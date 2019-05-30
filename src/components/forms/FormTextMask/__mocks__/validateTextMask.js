const validate = values => {
  const errors = {};
  if (values) {
    if (!values.phone) {
      errors.phone = 'Required';
    }
  }
  return errors;
};

export default validate;
