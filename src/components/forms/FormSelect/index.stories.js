import React from 'react';
import { storiesOf } from '@storybook/react';

import withForm from './../__mocks__/FormDecorator';
import validate from './__mocks__/validateSelect';
import { FormSelect } from '../../index';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormSelect', module)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <FormSelect
      label="Option"
      name="option"
      placeholder="Select option"
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </FormSelect>
  );
