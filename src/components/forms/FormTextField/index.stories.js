import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withForm from './../__mocks__/FormDecorator';
import validate from './__mocks__/validateTextField';
import { FormTextField } from '../../index';
import { Field } from 'redux-form';

const form = {
  form: 'testForm',
  validate,
};

console.log('Field', Field);

storiesOf('forms/FormTextField', module)
  .addDecorator(withInfo)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <Field
      label="Email!!!!!"
      name="email"
      type="email"
      component="input"
      onChange={(event) => {
        console.log(event);
      }}
    />
  );
