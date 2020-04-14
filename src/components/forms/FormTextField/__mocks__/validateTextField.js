const isEmpty = value => value === undefined || value === null || value === '' || !value; // eslint-disable-line

function email(value) { // eslint-disable-line
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

const validate = (values) => {
  const errors = {};
  if (values) {
    const validEmail = email(values.email);
    if (!values.email) {
      errors.email = 'Required';
    } else if (validEmail) {
      errors.email = validEmail;
    }
  }
  return errors;
};

export default validate;
