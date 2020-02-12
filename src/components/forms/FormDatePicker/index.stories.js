import React from 'react';
import { storiesOf } from '@storybook/react';

import withForm from './../__mocks__/FormDecorator';
import { FormDatePicker } from '../../index';
import validate from './__mocks__/validateDatepicker';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormDatePicker', module)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <FormDatePicker
      label="Select date"
      name="date"
    />
  );
