import React from 'react';
import { storiesOf } from '@storybook/react';

import withForm from './../__mocks__/FormDecorator';
import validate from './__mocks__/validateRadio';
import { FormRadio } from '../../index';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormRadio', module)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <FormRadio
      placeholder="USA"
      name="country"
      value="usa"
    />
  );
