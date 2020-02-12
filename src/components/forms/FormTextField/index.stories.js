import React from 'react';
import { storiesOf } from '@storybook/react';

import withForm from './../__mocks__/FormDecorator';
import validate from './__mocks__/validateTextField';
import { Field } from 'redux-form';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormTextField', module)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <Field
      label="Email"
      name="email"
      type="email"
      component="input"
    />
  );
