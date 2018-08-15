import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withForm from './../__mocks__/FormDecorator';
import validate from './__mocks__/validateTextField';
import { FormTextField } from '../../index';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormTextField', module)
  .addDecorator(withInfo)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <FormTextField
      label="Email"
      name="email"
      type="email"
    />
  );
