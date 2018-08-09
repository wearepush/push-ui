const validate = values => {
  const errors = {};
  if (values) {
    if (!values.tags|| values.tags.length === 0) {
      errors.tags = 'Required';
    }
  }
  return errors;
};

export default validate;
