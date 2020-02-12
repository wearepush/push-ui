import React from 'react';
import { storiesOf } from '@storybook/react';

import withForm from './../__mocks__/FormDecorator';
import validate from './__mocks__/validateTextMask';
import { FormTextMask } from '../../index';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormTextMask', module)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <FormTextMask
      guide
      label="Phone"
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      name="phone"
      showMask
    />
  );
