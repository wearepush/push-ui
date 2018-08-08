const validate = values => {
  const errors = {};
  if (values) {
    if (!values.gender) {
      errors.gender = 'Required';
    }
  }
  return errors;
};

export default validate;
