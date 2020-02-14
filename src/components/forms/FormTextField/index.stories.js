import React from 'react';
import { storiesOf } from '@storybook/react';

import { Field } from 'redux-form';
import withForm from '../__mocks__/FormDecorator';
import validate from './__mocks__/validateTextField';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormTextField', module)
  .addDecorator(withForm({ form }))
  .add('default', () => <Field label="Email" name="email" type="email" component="input" />);
