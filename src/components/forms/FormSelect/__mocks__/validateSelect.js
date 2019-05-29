const validate = values => {
  const errors = {};
  if (values) {
    if (!values.option) {
      errors.option = 'Required';
    }
  }
  return errors;
};

export default validate;
