import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withForm from './../__mocks__/FormDecorator';
import { FormDatePicker } from '../../index';
import validate from './__mocks__/validateDatepicker';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormDatePicker', module)
  .addDecorator(withInfo)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <FormDatePicker
      label="Select date"
      name="date"
    />
  );
